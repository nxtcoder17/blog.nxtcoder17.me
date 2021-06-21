import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';

const CodeBlock = ({ children, className }) => {
  const language = className.replace(/language-/, '');
  return (
    <Highlight {...defaultProps} code={children} language={language}>
      {({
        className: className2,
        style,
        tokens,
        getLineProps,
        getTokenProps,
      }) => (
        <pre className={className2} style={{ ...style, padding: '20px' }}>
          {tokens.map((line, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                // eslint-disable-next-line react/no-array-index-key
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default CodeBlock;
