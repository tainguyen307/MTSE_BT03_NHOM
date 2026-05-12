import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import {
  selectCurrentUser,
  selectIsAuthenticated,
  selectAuthStatus,
  selectAuthError
} from '../features/auth/store/authSlice';
import {
  login as loginThunk,
  register as registerThunk,
  logout as logoutThunk,
  forgotPassword as forgotPasswordThunk,
  resetPassword as resetPasswordThunk,
} from '../features/auth/store/authThunks';
import { ROUTES, STATUS } from '../constants';

export function useAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector(selectCurrentUser);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const status = useSelector(selectAuthStatus);
  const error = useSelector(selectAuthError);

  const isLoading = status === STATUS.LOADING;

  const login = async (credentials) => {
    try {
      await dispatch(loginThunk(credentials)).unwrap();
      navigate(ROUTES.PROFILE);
    } catch (err) {
      throw err;
    }
  };

  const register = async (userData) => {
    try {
      await dispatch(registerThunk(userData)).unwrap();
      navigate(ROUTES.PROFILE);
    } catch (err) {
      throw err;
    }
  };

  const logout = async () => {
    try {
      await dispatch(logoutThunk()).unwrap();
      navigate(ROUTES.LOGIN);
    } catch (err) {
      // Still navigate to login even if API call fails
      navigate(ROUTES.LOGIN);
    }
  };

  const forgotPassword = async (email) => {
    try {
      await dispatch(forgotPasswordThunk(email)).unwrap();
    } catch (err) {
      throw err;
    }
  };

  const resetPassword = async (token, password) => {
    try {
      await dispatch(resetPasswordThunk({ token, password })).unwrap();
      navigate(ROUTES.LOGIN);
    } catch (err) {
      throw err;
    }
  };

  return {
    user,
    isAuthenticated,
    isLoading,
    error,
    login,
    register,
    logout,
    forgotPassword,
    resetPassword,
  };
}
