import Link from 'next/link';
import Tag from '../atoms/tag';

const PostCard = ({ title = 'Hello World', tags = [], href }) => {
  return (
    <Link href={href}>
      <div className="h-80 bg-red-200 rounded-lg bg-gray-xxLightest border-t-8 border-gray-dark shadow-lg cursor-pointer">
        <div className="flex flex-col h-full">
          <div className="bg-gray-lighter py-3 px-5">
            <div className="font-medium text-xl first-letter:text-2xl capitalize">
              {title}
            </div>
            <div className="h-0.5 w-8 bg-gray-darker" />
          </div>

          <div className="flex-1" />

          <Tag.Container>
            {tags.map((tag) => {
              return <Tag key={tag} label={tag} />;
            })}
          </Tag.Container>
        </div>
      </div>
    </Link>
  );
};

PostCard.Container = ({ children }) => {
  return <div className="grid grid-cols-2 gap-8 p-16">{children}</div>;
};

export default PostCard;
