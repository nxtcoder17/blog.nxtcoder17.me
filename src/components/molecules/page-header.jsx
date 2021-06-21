const PageHeader = ({ Logo, Links }) => {
  return (
    <div className="flex flex-row bg-gray-xDarkest text-white py-6 px-24">
      <Logo />
      <div className="flex-1" />
      <Links />
    </div>
  );
};

export default PageHeader;
