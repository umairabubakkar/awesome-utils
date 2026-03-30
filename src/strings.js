/**
 * Capitalize the first letter of each word
 */
function capitalize(str) {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

/**
 * Convert string to camelCase
 */
function toCamelCase(str) {
  return str.replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''));
}

/**
 * Convert string to kebab-case
 */
function toKebabCase(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/[\s_]+/g, '-').toLowerCase();
}

/**
 * Truncate string to specified length
 */
function truncate(str, length, suffix = '...') {
  if (str.length <= length) return str;
  return str.slice(0, length) + suffix;
}

module.exports = { capitalize, toCamelCase, toKebabCase, truncate };
