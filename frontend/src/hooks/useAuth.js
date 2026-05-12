import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import {
  selectCurrentUser,
  selectIsAuthenticated,
  selectAuthStatus,
  selectAuthError,
  clearError,
  login as loginThunk,
  register as registerThunk,
  logout as logoutThunk,
  forgotPassword as forgotPasswordThunk,
  resetPassword as resetPasswordThunk,
} from '../features/auth/store/authSlice';
import { ROUTES, STATUS } from '../constants';

export function useAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user           = useSelector(selectCurrentUser);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const status         = useSelector(selectAuthStatus);
  const error          = useSelector(selectAuthError);
  const isLoading      = status === STATUS.LOADING;

  const login = async (credentials) => {
    const result = await dispatch(loginThunk(credentials));
    if (!result.error) navigate(ROUTES.PROFILE);
  };

  const register = async (userData) => {
    const result = await dispatch(registerThunk(userData));
    if (!result.error) navigate(ROUTES.PROFILE);
  };

  const logout = async () => {
    await dispatch(logoutThunk());
    navigate(ROUTES.LOGIN);
  };

  const forgotPassword = async (email) => {
    return dispatch(forgotPasswordThunk(email)).unwrap();
  };

  const resetPassword = async (token, password) => {
    await dispatch(resetPasswordThunk({ token, password })).unwrap();
    navigate(ROUTES.LOGIN);
  };

  return {
    user,
    isAuthenticated,
    isLoading,
    error,
    clearError: () => dispatch(clearError()),
    login,
    register,
    logout,
    forgotPassword,
    resetPassword,
  };
}
