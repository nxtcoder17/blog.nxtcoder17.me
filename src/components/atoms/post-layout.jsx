import { Title } from './title';
import Tag from './tag';

const Blog = ({ title, tags, content }) => {
  return (
    <div className="py-8 px-4 flex flex-col container mx-auto">
      <Title>{title}</Title>
      <Tag.Container2>
        {tags.map((tag) => {
          return <Tag key={tag} label={tag} />;
        })}
      </Tag.Container2>
      <Blog.Body content={content} />
    </div>
  );
};

Blog.Body = ({ content }) => {
  return (
    <article
      className="py-4 flex flex-col gap-4"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default Blog;
