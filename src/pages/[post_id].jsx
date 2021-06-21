import BlogTitle from '../components/atoms/blog-title';
import BlogPostContainer from '../components/atoms/blog-post-container';
import PageHeader from '../components/molecules/page-header';
import Logo from '../components/atoms/logo';
import HeaderLinks from '../components/molecules/header-links';
import {renderToStaticMarkup} from "react-dom/server";
import {MDXProvider} from "@mdx-js/react";
import {MDXComponents} from "../lib/mdx-helpers";

export const BlogPost = ({ post, html }) => {
  if (!post) return <></>;
  return (
    <div className="h-screen flex flex-col">
      <PageHeader Logo={Logo} Links={HeaderLinks} />
      <BlogPostContainer>
        <BlogTitle>{post.title}</BlogTitle>
        <article dangerouslySetInnerHTML={{ __html: html }} />
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
  const { default: X } = await import('../blog-posts/first-post.mdx');
  console.log(X);
  const blogHtml = renderToStaticMarkup(
    <MDXProvider components={MDXComponents}>
      <X />
    </MDXProvider>
  );
  return { props: { post: { title: 'sample', html: 'sample' }, html: blogHtml } };
}
