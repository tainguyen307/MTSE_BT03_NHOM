import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { tokenStorage, storage } from '../../../utils/storage';
import { STATUS } from '../../../constants';
import { authApi } from '../api/authApi';

// ─── Async Thunks ────────────────────────────────────────────────────────────

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      return await authApi.login(credentials);
    } catch (error) {
      return rejectWithValue(error.message || 'Đăng nhập thất bại');
    }
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async (userData, { rejectWithValue }) => {
    try {
      return await authApi.register(userData);
    } catch (error) {
      return rejectWithValue(error.message || 'Đăng ký thất bại');
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await authApi.logout();
    } catch (error) {
      // Vẫn cho logout dù API lỗi — xử lý ở rejected case
      return rejectWithValue(error.message);
    }
  }
);

export const forgotPassword = createAsyncThunk(
  'auth/forgotPassword',
  async (email, { rejectWithValue }) => {
    try {
      return await authApi.forgotPassword(email);
    } catch (error) {
      return rejectWithValue(error.message || 'Không thể gửi link đặt lại mật khẩu');
    }
  }
);

export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async ({ token, password }, { rejectWithValue }) => {
    try {
      return await authApi.resetPassword(token, password);
    } catch (error) {
      return rejectWithValue(error.message || 'Không thể đặt lại mật khẩu');
    }
  }
);

// ─── Helper: lưu thông tin đăng nhập ─────────────────────────────────────────

function persistCredentials(state, payload) {
  const { user, token, refreshToken } = payload;
  state.user = user;
  state.token = token;
  state.isAuthenticated = true;
  state.status = STATUS.SUCCESS;
  state.error = null;
  storage.set('user', user);
  tokenStorage.setToken(token);
  if (refreshToken) tokenStorage.setRefreshToken(refreshToken);
}

function clearCredentials(state) {
  state.user = null;
  state.token = null;
  state.isAuthenticated = false;
  state.status = STATUS.IDLE;
  state.error = null;
  storage.remove('user');
  tokenStorage.removeToken();
  tokenStorage.removeRefreshToken();
}

// ─── Slice ────────────────────────────────────────────────────────────────────

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
    updateUser: (state, action) => {
      state.user = { ...state.user, ...action.payload };
      storage.set('user', state.user);
    },
    clearError: (state) => {
      state.error = null;
      if (state.status === STATUS.ERROR) state.status = STATUS.IDLE;
    },
  },
  extraReducers: (builder) => {
    // ── Login ──────────────────────────────────────────────────────────────
    builder
      .addCase(login.pending, (state) => {
        state.status = STATUS.LOADING;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        persistCredentials(state, action.payload);
      })
      .addCase(login.rejected, (state, action) => {
        state.status = STATUS.ERROR;
        state.error = action.payload;
      })

    // ── Register ───────────────────────────────────────────────────────────
      .addCase(register.pending, (state) => {
        state.status = STATUS.LOADING;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        persistCredentials(state, action.payload);
      })
      .addCase(register.rejected, (state, action) => {
        state.status = STATUS.ERROR;
        state.error = action.payload;
      })

    // ── Logout ─────────────────────────────────────────────────────────────
      .addCase(logout.fulfilled, (state) => {
        clearCredentials(state);
      })
      .addCase(logout.rejected, (state) => {
        // Dù API lỗi vẫn xóa thông tin cục bộ
        clearCredentials(state);
      })

    // ── Forgot Password ────────────────────────────────────────────────────
      .addCase(forgotPassword.pending, (state) => {
        state.status = STATUS.LOADING;
        state.error = null;
      })
      .addCase(forgotPassword.fulfilled, (state) => {
        state.status = STATUS.SUCCESS;
        state.error = null;
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.status = STATUS.ERROR;
        state.error = action.payload;
      })

    // ── Reset Password ─────────────────────────────────────────────────────
      .addCase(resetPassword.pending, (state) => {
        state.status = STATUS.LOADING;
        state.error = null;
      })
      .addCase(resetPassword.fulfilled, (state) => {
        state.status = STATUS.SUCCESS;
        state.error = null;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.status = STATUS.ERROR;
        state.error = action.payload;
      });
  },
});

export const { updateUser, clearError } = authSlice.actions;
export default authSlice.reducer;

// ─── Selectors ────────────────────────────────────────────────────────────────
export const selectCurrentUser      = (state) => state.auth.user;
export const selectIsAuthenticated  = (state) => state.auth.isAuthenticated;
export const selectAuthStatus       = (state) => state.auth.status;
export const selectAuthError        = (state) => state.auth.error;
