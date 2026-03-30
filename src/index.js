const strings = require('./strings');
const arrays = require('./arrays');
const dates = require('./dates');
const objects = require('./objects');

module.exports = { ...strings, ...arrays, ...dates, ...objects };
