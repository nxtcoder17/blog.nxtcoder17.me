import PageHeader from '../components/molecules/page-header';
import Logo from '../components/atoms/logo';
import HeaderLinks from '../components/molecules/header-links';
import WelcomeSection from '../components/molecules/welcome-section';
import PostCard from '../components/molecules/post-card';
import grabAllPosts from '../lib/grab-all-posts';

const HomePage = ({ posts }) => {
  return (
    <div className="h-screen flex flex-col">
      <PageHeader Logo={Logo} Links={HeaderLinks} />
      <div className="container mx-auto flex-1 bg-gray-xLightest">
        <WelcomeSection />

        <PostCard.Container>
          {posts.map((post) => {
            return (
              <PostCard
                key={post._id}
                title={post.title}
                tags={post.tags}
                href={`/${post._id}`}
              />
            );
          })}
        </PostCard.Container>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const posts = grabAllPosts();
  return { props: { posts } };
}

export default HomePage;
