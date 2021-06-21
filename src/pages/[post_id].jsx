import parseBlog from '../lib/parse-blog';
import BlogTitle from '../components/atoms/blog-title';
import BlogPostContainer from '../components/atoms/blog-post-container';
import { getMdxString } from '../lib/md-to-html';

export const BlogPost = ({ post }) => {
  if (!post) return <></>;
  return (
    <div>
      <BlogPostContainer>
        <BlogTitle>{post.title}</BlogTitle>
        <article dangerouslySetInnerHTML={{ __html: post.html }} />
      </BlogPostContainer>
    </div>
  );
};

export default BlogPost;

export async function getStaticPaths() {
  return {
    paths: [{ params: { post_id: 'base64 encoded string of chars' } }],
    fallback: true,
  };
}

export async function getStaticProps(appCtx) {
  const pPath = appCtx.params.post_id;
  const x = Buffer.from(pPath, 'base64').toString();
  const postData = parseBlog(x);
  postData.html = getMdxString(postData.content);
  console.log(postData);
  return { props: { post: postData } };
}
