/* eslint-disable react/display-name */
import CodeBlock from '../components/atoms/code-block';
import { SubTitle, Title } from '../components/atoms/title';

export const MDXComponents = {
  p: (props) => <div {...props} />,
  h1: Title,
  h2: SubTitle,
  h3: SubTitle,
  img: (props) => (
    <div className="w-full flex flex-row justify-center">
      <img {...props} alt="This is an img" />
    </div>
  ),
  a: (props) => <a {...props} />,
  pre: (props) => <div {...props} />,
  code: (props) => <CodeBlock {...props} />,
};
