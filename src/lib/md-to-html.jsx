import { renderToStaticMarkup } from 'react-dom/server';
import { MDXProvider } from '@mdx-js/react';
import { MDXComponents } from './mdx-helpers';

export const getMdxString = (content) => {
  return renderToStaticMarkup(
    // @ts-expect-error MDX shut up
    <MDXProvider components={MDXComponents}>{content}</MDXProvider>
  );
};
