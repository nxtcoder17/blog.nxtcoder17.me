export const Title = (props) => {
  return (
    <div
      className="text-2xl text-gray-dark font-bold p-3 px-4 bg-gray-lighter"
      {...props}
    />
  );
};

export const SubTitle = (props) => {
  return (
    <div
      className="text-lg text-gray-dark font-bold py-1 px-4 bg-gray-lighter
      border-l-4 border-gray-dark
      "
      {...props}
    />
  );
};
