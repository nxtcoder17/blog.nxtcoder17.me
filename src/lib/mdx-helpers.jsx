/* eslint-disable react/display-name */
import CodeBlock from '../components/atoms/code-block';

export const MDXComponents = {
  p: (props) => <div {...props} />,
  h1: (props) => <div className="text-3xl" {...props} />,
  h2: (props) => <div {...props} />,
  h3: (props) => <div {...props} />,
  pre: (props) => <div {...props} />,
  img: (props) => <div {...props} />,
  a: (props) => <div {...props} />,
  code: (props) => <CodeBlock {...props} />,
};
