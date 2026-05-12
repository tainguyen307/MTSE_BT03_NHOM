import { createSlice } from '@reduxjs/toolkit';
import { STATUS } from '../../../constants';

const initialState = {
  profile: null,
  stats: {
    totalBookings: 0,
    matchesThisWeek: 0,
    clubCredits: 0,
  },
  status: STATUS.IDLE,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setProfile: (state, action) => {
      state.profile = action.payload;
      state.status = STATUS.SUCCESS;
      state.error = null;
    },

    setStats: (state, action) => {
      state.stats = action.payload;
    },

    updateProfile: (state, action) => {
      state.profile = { ...state.profile, ...action.payload };
    },

    setLoading: (state) => {
      state.status = STATUS.LOADING;
      state.error = null;
    },

    setError: (state, action) => {
      state.status = STATUS.ERROR;
      state.error = action.payload;
    },

    clearError: (state) => {
      state.error = null;
      state.status = STATUS.IDLE;
    },

    resetUser: (state) => {
      state.profile = null;
      state.stats = initialState.stats;
      state.status = STATUS.IDLE;
      state.error = null;
    },
  },
});

export const {
  setProfile,
  setStats,
  updateProfile,
  setLoading,
  setError,
  clearError,
  resetUser,
} = userSlice.actions;

export default userSlice.reducer;

// Selectors
export const selectUserProfile = (state) => state.user.profile;
export const selectUserStats = (state) => state.user.stats;
export const selectUserStatus = (state) => state.user.status;
export const selectUserError = (state) => state.user.error;
