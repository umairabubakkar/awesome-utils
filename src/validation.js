function isEmail(str) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
}
function isURL(str) {
  try { new URL(str); return true; } catch { return false; }
}
function isPhoneNumber(str) {
  return /^\+?[\d\s-()]{7,15}$/.test(str);
}
function isStrongPassword(str) {
  return str.length >= 8 && /[A-Z]/.test(str) && /[a-z]/.test(str) && /[0-9]/.test(str);
}
module.exports = { isEmail, isURL, isPhoneNumber, isStrongPassword };
