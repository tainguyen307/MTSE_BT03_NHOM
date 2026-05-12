// Email validation
export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Phone validation (US format)
export function isValidPhone(phone) {
  const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  return phoneRegex.test(phone);
}

// Password strength
export function getPasswordStrength(password) {
  if (!password) return { strength: 'none', score: 0 };

  let score = 0;

  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^a-zA-Z0-9]/.test(password)) score++;

  const strengths = ['weak', 'fair', 'good', 'strong', 'very strong'];
  const strengthIndex = Math.min(Math.floor(score / 1.5), strengths.length - 1);

  return {
    strength: strengths[strengthIndex],
    score: score
  };
}

// Required field
export function isRequired(value) {
  return value !== null && value !== undefined && value !== '';
}

// Min length
export function minLength(value, min) {
  if (!value) return false;
  return String(value).length >= min;
}

// Max length
export function maxLength(value, max) {
  if (!value) return true;
  return String(value).length <= max;
}
