import Link from 'next/link';

const Tag = ({ label, value = null }) => {
  return (
    <Link href={`/tags/${value || label}`}>
      <div
        className="rounded-md text-sm font-medium text-gray-lightest p-1 px-4 bg-gray-dark tracking-wide cursor-pointer
      select-none
    transform
    active:-translate-y-1
    "
      >
        {label}
      </div>
    </Link>
  );
};

Tag.Container = ({ children }) => {
  return (
    <ul className="flex flex-row gap-3 px-5 py-3 bg-gray-lighter flex-wrap">
      {children}
    </ul>
  );
};

export default Tag;
