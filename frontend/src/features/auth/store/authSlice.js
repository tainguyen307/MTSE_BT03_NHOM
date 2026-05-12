import { createSlice } from '@reduxjs/toolkit';
import { tokenStorage, storage } from '../../../utils/storage';
import { STATUS } from '../../../constants';

const initialState = {
  user: storage.get('user'),
  token: tokenStorage.getToken(),
  isAuthenticated: !!tokenStorage.getToken(),
  status: STATUS.IDLE,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, token, refreshToken } = action.payload;

      state.user = user;
      state.token = token;
      state.isAuthenticated = true;
      state.status = STATUS.SUCCESS;
      state.error = null;

      // Save to storage
      storage.set('user', user);
      tokenStorage.setToken(token);
      if (refreshToken) {
        tokenStorage.setRefreshToken(refreshToken);
      }
    },

    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.status = STATUS.IDLE;
      state.error = null;

      // Clear storage
      storage.remove('user');
      tokenStorage.removeToken();
      tokenStorage.removeRefreshToken();
    },

    setLoading: (state) => {
      state.status = STATUS.LOADING;
      state.error = null;
    },

    setError: (state, action) => {
      state.status = STATUS.ERROR;
      state.error = action.payload;
    },

    updateUser: (state, action) => {
      state.user = { ...state.user, ...action.payload };
      storage.set('user', state.user);
    },

    clearError: (state) => {
      state.error = null;
      state.status = STATUS.IDLE;
    },
  },
});

export const {
  setCredentials,
  logout,
  setLoading,
  setError,
  updateUser,
  clearError
} = authSlice.actions;

export default authSlice.reducer;

// Selectors
export const selectCurrentUser = (state) => state.auth.user;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectAuthStatus = (state) => state.auth.status;
export const selectAuthError = (state) => state.auth.error;
