import fs from 'fs';
import path from 'path';
import assert from 'assert';
import parseBlog from './parse-blog';

const postsDir = path.join(process.cwd(), 'src', 'blog-posts');

const grabAllPosts = (start, end) => {
  const postsList = fs.readdirSync(postsDir);
  const xStart = start || 0;
  const xEnd = end || postsList.length - 1;
  assert(xStart <= postsList.length && xEnd <= postsList.length);

  const posts = [];
  for (let x = xStart; x <= xEnd; x++) {
    posts.push(parseBlog(path.resolve(postsDir, postsList[x])));
  }
  return posts;
};

export default grabAllPosts;
