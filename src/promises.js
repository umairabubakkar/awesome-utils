function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }
async function retry(fn, retries = 3, delay = 1000) {
  for (let i = 0; i < retries; i++) {
    try { return await fn(); }
    catch (e) { if (i === retries - 1) throw e; await sleep(delay); }
  }
}
async function timeout(promise, ms) {
  return Promise.race([promise, sleep(ms).then(() => { throw new Error('Timeout'); })]);
}
module.exports = { sleep, retry, timeout };
