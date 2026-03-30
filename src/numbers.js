function clamp(num, min, max) { return Math.min(Math.max(num, min), max); }
function randomInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
function formatCurrency(num, currency = 'USD') {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(num);
}
function percentage(value, total) { return ((value / total) * 100).toFixed(2) + '%'; }
function average(arr) { return arr.reduce((a, b) => a + b, 0) / arr.length; }
module.exports = { clamp, randomInt, formatCurrency, percentage, average };
