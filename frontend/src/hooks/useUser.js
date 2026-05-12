import { useDispatch, useSelector } from 'react-redux';
import {
  selectUserProfile,
  selectUserStats,
  selectUserStatus,
  selectUserError,
  setProfile,
  updateProfile as updateProfileAction,
  setStats,
  setLoading,
  setError,
} from '../features/user/store/userSlice';
import { userApi } from '../features/user/api/userApi';
import { STATUS } from '../constants';

export function useUser() {
  const dispatch = useDispatch();

  const profile = useSelector(selectUserProfile);
  const stats = useSelector(selectUserStats);
  const status = useSelector(selectUserStatus);
  const error = useSelector(selectUserError);

  const isLoading = status === STATUS.LOADING;

  const fetchProfile = async () => {
    try {
      dispatch(setLoading());
      const data = await userApi.getProfile();
      dispatch(setProfile(data));
      return data;
    } catch (err) {
      dispatch(setError(err.message));
      throw err;
    }
  };

  const updateProfile = async (updates) => {
    try {
      dispatch(setLoading());
      const data = await userApi.updateProfile(updates);
      dispatch(updateProfileAction(data));
      return data;
    } catch (err) {
      dispatch(setError(err.message));
      throw err;
    }
  };

  const changePassword = async (passwords) => {
    try {
      dispatch(setLoading());
      await userApi.changePassword(passwords);
    } catch (err) {
      dispatch(setError(err.message));
      throw err;
    }
  };

  const uploadAvatar = async (file) => {
    try {
      dispatch(setLoading());
      const data = await userApi.uploadAvatar(file);
      dispatch(updateProfileAction({ avatar: data.avatar }));
      return data;
    } catch (err) {
      dispatch(setError(err.message));
      throw err;
    }
  };

  return {
    profile,
    stats,
    isLoading,
    error,
    fetchProfile,
    updateProfile,
    changePassword,
    uploadAvatar,
  };
}
