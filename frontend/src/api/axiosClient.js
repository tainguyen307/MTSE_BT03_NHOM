import axios from 'axios';
import { tokenStorage } from '../utils/storage';
import { ERROR_MESSAGES } from '../constants';

// Base URL từ environment variable hoặc default
const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://api.picklepro.com/v1';

// Tạo axios instance
export const axiosClient = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
axiosClient.interceptors.request.use(
  (config) => {
    const token = tokenStorage.getToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async (error) => {
    const originalRequest = error.config;

    // Handle 401 Unauthorized
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = tokenStorage.getRefreshToken();

        if (refreshToken) {
          const response = await axios.post(`${BASE_URL}/auth/refresh`, {
            refreshToken,
          });

          const { token } = response.data;
          tokenStorage.setToken(token);

          originalRequest.headers.Authorization = `Bearer ${token}`;
          return axiosClient(originalRequest);
        }
      } catch (refreshError) {
        // Refresh failed, clear tokens and redirect to login
        tokenStorage.removeToken();
        tokenStorage.removeRefreshToken();
        window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }

    // Handle other errors
    const errorMessage = getErrorMessage(error);
    return Promise.reject(new Error(errorMessage));
  }
);

// Helper function to extract error message
function getErrorMessage(error) {
  if (!error.response) {
    return ERROR_MESSAGES.NETWORK_ERROR;
  }

  const { status, data } = error.response;

  switch (status) {
    case 400:
      return data?.message || 'Bad request';
    case 401:
      return ERROR_MESSAGES.UNAUTHORIZED;
    case 403:
      return 'Access forbidden';
    case 404:
      return ERROR_MESSAGES.NOT_FOUND;
    case 500:
      return ERROR_MESSAGES.SERVER_ERROR;
    default:
      return data?.message || 'An error occurred';
  }
}

export default axiosClient;
