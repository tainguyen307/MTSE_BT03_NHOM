import { axiosClient } from '../../../api';
import { API_ENDPOINTS } from '../../../constants';

export const userApi = {
  // Get profile
  async getProfile() {
    const response = await axiosClient.get(API_ENDPOINTS.USER.PROFILE);
    return response;
  },

  // Update profile
  async updateProfile(data) {
    const response = await axiosClient.put(API_ENDPOINTS.USER.UPDATE_PROFILE, data);
    return response;
  },

  // Change password
  async changePassword(passwords) {
    const response = await axiosClient.post(API_ENDPOINTS.USER.CHANGE_PASSWORD, passwords);
    return response;
  },

  // Upload avatar
  async uploadAvatar(file) {
    const formData = new FormData();
    formData.append('avatar', file);

    const response = await axiosClient.post(API_ENDPOINTS.USER.UPLOAD_AVATAR, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response;
  },
};
