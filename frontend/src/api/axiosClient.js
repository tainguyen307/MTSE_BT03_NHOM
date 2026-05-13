import axios from 'axios';
import { tokenStorage } from '../utils/storage';
import { ERROR_MESSAGES } from '../constants';

const BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  'http://localhost:3000/api';

export const axiosClient = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// REQUEST
axiosClient.interceptors.request.use((config) => {
  const token = tokenStorage.getToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// RESPONSE
axiosClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (!error.response) {
      return Promise.reject(new Error(ERROR_MESSAGES.NETWORK_ERROR));
    }

    const message =
      error.response.data?.message ||
      ERROR_MESSAGES.SERVER_ERROR;

    return Promise.reject(new Error(message));
  }
);

export default axiosClient;