import fs from 'fs';
import matter from 'gray-matter';

const parseBlog = (mdFilePath) => {
  const md = fs.readFileSync(mdFilePath).toString();
  const { data, content } = matter(md);
  return {
    ...data,
    tags: (data.tags || '').split(',').map((item) => item.trim()),
    content,
    _id: Buffer.from(mdFilePath).toString('base64'),
  };
};

export default parseBlog;
