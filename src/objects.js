function deepMerge(target, source) {
  const result = { ...target };
  for (const key of Object.keys(source)) {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      result[key] = deepMerge(result[key] || {}, source[key]);
    } else {
      result[key] = source[key];
    }
  }
  return result;
}

function pick(obj, keys) {
  return keys.reduce((acc, key) => {
    if (key in obj) acc[key] = obj[key];
    return acc;
  }, {});
}

function omit(obj, keys) {
  return Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));
}

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

module.exports = { deepMerge, pick, omit, isEmpty };
