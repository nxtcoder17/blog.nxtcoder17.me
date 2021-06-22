const matter = require('gray-matter');
const stringifyObject = require('stringify-object');

module.exports = async function (src) {
  const callback = this.async();
  const { content, data } = matter(src);
  data.tags = data.tags.split(',').map((item) => item.trim());

  const code = `export const meta = ${stringifyObject(data)};
  ${content}`;

  return callback(null, code);
};
