const r2 = require('r2');

module.exports.badge = async (req, res) => {
  const url = req.body.url || 'https://snyk.io/test/npm/snyk/latest/badge.svg';
  const str = await r2(url).text

  res.set('Access-Control-Allow-Origin', '*');

  return res.send(str);
}
