// Local Storage utilities
const PREFIX = 'picklepro_';

export const storage = {
  set(key, value) {
    try {
      const serialized = JSON.stringify(value);
      localStorage.setItem(PREFIX + key, serialized);
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  },

  get(key, defaultValue = null) {
    try {
      const item = localStorage.getItem(PREFIX + key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return defaultValue;
    }
  },

  remove(key) {
    try {
      localStorage.removeItem(PREFIX + key);
    } catch (error) {
      console.error('Error removing from localStorage:', error);
    }
  },

  clear() {
    try {
      const keys = Object.keys(localStorage);
      keys.forEach(key => {
        if (key.startsWith(PREFIX)) {
          localStorage.removeItem(key);
        }
      });
    } catch (error) {
      console.error('Error clearing localStorage:', error);
    }
  }
};

// Token management
export const tokenStorage = {
  setToken(token) {
    storage.set('auth_token', token);
  },

  getToken() {
    return storage.get('auth_token');
  },

  removeToken() {
    storage.remove('auth_token');
  },

  setRefreshToken(token) {
    storage.set('refresh_token', token);
  },

  getRefreshToken() {
    return storage.get('refresh_token');
  },

  removeRefreshToken() {
    storage.remove('refresh_token');
  }
};
