function parseQuery(url) {
  const params = new URLSearchParams(new URL(url).search);
  return Object.fromEntries(params);
}
function buildUrl(base, params) {
  const url = new URL(base);
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
  return url.toString();
}
function isAbsoluteUrl(str) {
  return /^https?:\/\//i.test(str);
}
module.exports = { parseQuery, buildUrl, isAbsoluteUrl };
