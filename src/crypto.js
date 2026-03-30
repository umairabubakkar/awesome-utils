const crypto = require('crypto');
function hash(str, algo = 'sha256') { return crypto.createHash(algo).update(str).digest('hex'); }
function randomString(length = 32) { return crypto.randomBytes(length).toString('hex').slice(0, length); }
function uuid() { return crypto.randomUUID(); }
module.exports = { hash, randomString, uuid };
