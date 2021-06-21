import Logo from '../atoms/logo';

const WelcomeSection = () => {
  return (
    <div className="text-2xl p-16 flex flex-col gap-3">
      <span className="first-letter:text-4xl">Hi,</span>
      <span>
        I am <Logo invert />
      </span>
      <span>This is my corner of internet.</span>
    </div>
  );
};

export default WelcomeSection;
