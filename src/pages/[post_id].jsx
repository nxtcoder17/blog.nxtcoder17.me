import PageHeader from '../components/molecules/page-header';
import Logo from '../components/atoms/logo';
import HeaderLinks from '../components/molecules/header-links';
import {renderToStaticMarkup} from "react-dom/server";
import {MDXProvider} from "@mdx-js/react";
import {MDXComponents} from "../lib/mdx-helpers";
import Blog from "../components/atoms/post-layout";

export const BlogPost = ({ content, title, tags }) => {
  if (!content) return <></>;
  return (
    <div className="h-screen flex flex-col">
      <PageHeader Logo={Logo} Links={HeaderLinks} />
      <Blog title={title} tags={tags} content={content} />
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
  const { default: X,  meta} = await import('../blog-posts/first-post.mdx');
  console.log(meta);
  const blogHtml = renderToStaticMarkup(
    <MDXProvider components={MDXComponents}>
        <X />
    </MDXProvider>
  );
  return { props: { content: blogHtml , title: meta.title, tags: meta.tags } };
}
