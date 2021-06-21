import cn from 'classnames';

const Logo = ({ invert = false }) => {
  return (
    <a href="/">
      <span
        className={cn('text-3xl font-logo', {
          'text-gray-lighter': !invert,
          'text-gray-dark': invert,
        })}
      >
        nxtcoder
      </span>
      <span className="text-4xl text-gray-darker">17</span>
    </a>
  );
};
export default Logo;
