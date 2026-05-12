// Thunks đã được gộp vào authSlice.js
// File này chỉ re-export để giữ backward compatibility
export {
  login,
  register,
  logout,
  forgotPassword,
  resetPassword,
} from './authSlice';
