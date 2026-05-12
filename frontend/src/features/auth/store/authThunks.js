import { createAsyncThunk } from '@reduxjs/toolkit';
import { authApi } from '../api/authApi';
import { setCredentials, setLoading, setError, logout as logoutAction } from './authSlice';

// Login thunk
export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { dispatch, rejectWithValue }) => {
    try {
      dispatch(setLoading());
      const response = await authApi.login(credentials);

      dispatch(setCredentials({
        user: response.user,
        token: response.token,
        refreshToken: response.refreshToken,
      }));

      return response;
    } catch (error) {
      const message = error.message || 'Login failed';
      dispatch(setError(message));
      return rejectWithValue(message);
    }
  }
);

// Register thunk
export const register = createAsyncThunk(
  'auth/register',
  async (userData, { dispatch, rejectWithValue }) => {
    try {
      dispatch(setLoading());
      const response = await authApi.register(userData);

      dispatch(setCredentials({
        user: response.user,
        token: response.token,
        refreshToken: response.refreshToken,
      }));

      return response;
    } catch (error) {
      const message = error.message || 'Registration failed';
      dispatch(setError(message));
      return rejectWithValue(message);
    }
  }
);

// Logout thunk
export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      await authApi.logout();
      dispatch(logoutAction());
    } catch (error) {
      // Even if API call fails, still logout locally
      dispatch(logoutAction());
      return rejectWithValue(error.message);
    }
  }
);

// Forgot password thunk
export const forgotPassword = createAsyncThunk(
  'auth/forgotPassword',
  async (email, { dispatch, rejectWithValue }) => {
    try {
      dispatch(setLoading());
      const response = await authApi.forgotPassword(email);
      return response;
    } catch (error) {
      const message = error.message || 'Failed to send reset link';
      dispatch(setError(message));
      return rejectWithValue(message);
    }
  }
);

// Reset password thunk
export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async ({ token, password }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(setLoading());
      const response = await authApi.resetPassword(token, password);
      return response;
    } catch (error) {
      const message = error.message || 'Failed to reset password';
      dispatch(setError(message));
      return rejectWithValue(message);
    }
  }
);
