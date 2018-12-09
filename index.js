const r2 = require('r2');

module.exports.badge = async (req, res) => {
  const url = req.body.url;

  if (!url) {
    return res.status(400).send('');
  }

  const str = await r2(url).text;

  res.set('Access-Control-Allow-Origin', '*');

  return res.send(str);
};
