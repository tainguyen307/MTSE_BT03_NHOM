import { axiosClient } from '../../../api';
import { API_ENDPOINTS } from '../../../constants';

export const authApi = {
  // Login
  async login(credentials) {
    const response = await axiosClient.post(API_ENDPOINTS.AUTH.LOGIN, credentials);
    return response;
  },

  // Register
  async register(userData) {
    const response = await axiosClient.post(API_ENDPOINTS.AUTH.REGISTER, userData);
    return response;
  },

  // Logout
  async logout() {
    const response = await axiosClient.post(API_ENDPOINTS.AUTH.LOGOUT);
    return response;
  },

  // Forgot password
  async forgotPassword(email) {
    const response = await axiosClient.post(API_ENDPOINTS.AUTH.FORGOT_PASSWORD, { email });
    return response;
  },

  // Reset password
  async resetPassword(token, newPassword) {
    const response = await axiosClient.post(API_ENDPOINTS.AUTH.RESET_PASSWORD, {
      token,
      password: newPassword,
    });
    return response;
  },

  // Verify email
  async verifyEmail(token) {
    const response = await axiosClient.post(API_ENDPOINTS.AUTH.VERIFY_EMAIL, { token });
    return response;
  },

  // Refresh token
  async refreshToken(refreshToken) {
    const response = await axiosClient.post(API_ENDPOINTS.AUTH.REFRESH, { refreshToken });
    return response;
  },
};
