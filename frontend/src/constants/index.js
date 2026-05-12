// API endpoints
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
    FORGOT_PASSWORD: '/auth/forgot-password',
    RESET_PASSWORD: '/auth/reset-password',
    VERIFY_EMAIL: '/auth/verify-email',
  },
  USER: {
    PROFILE: '/user/profile',
    UPDATE_PROFILE: '/user/profile',
    CHANGE_PASSWORD: '/user/change-password',
    UPLOAD_AVATAR: '/user/avatar',
  },
  COURTS: {
    LIST: '/courts',
    DETAIL: '/courts/:id',
  },
  BOOKINGS: {
    LIST: '/bookings',
    CREATE: '/bookings',
    DETAIL: '/bookings/:id',
    CANCEL: '/bookings/:id/cancel',
  },
};

// App routes
export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
  PROFILE: '/profile',
  COURTS: '/courts',
  BOOKINGS: '/bookings',
  LEAGUES: '/leagues',
  EVENTS: '/events',
};

// App status
export const STATUS = {
  IDLE: 'idle',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};

// User roles
export const USER_ROLES = {
  ADMIN: 'admin',
  USER: 'user',
  GUEST: 'guest',
};

// Skill levels
export const SKILL_LEVELS = [
  { value: '1.0', label: 'Beginner (1.0-2.0)' },
  { value: '2.5', label: 'Novice (2.5-3.0)' },
  { value: '3.5', label: 'Intermediate (3.5-4.0)' },
  { value: '4.5', label: 'Advanced (4.5+)' },
  { value: '5.0', label: 'Expert (5.0+)' },
];

// Error messages
export const ERROR_MESSAGES = {
  REQUIRED_FIELD: 'This field is required',
  INVALID_EMAIL: 'Please enter a valid email address',
  INVALID_PHONE: 'Please enter a valid phone number',
  PASSWORD_TOO_SHORT: 'Password must be at least 8 characters',
  PASSWORDS_NOT_MATCH: 'Passwords do not match',
  NETWORK_ERROR: 'Network error. Please check your connection.',
  UNAUTHORIZED: 'You are not authorized to perform this action',
  NOT_FOUND: 'The requested resource was not found',
  SERVER_ERROR: 'Server error. Please try again later.',
};
