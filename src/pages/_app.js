import '../styles/global.css';
import { MDXProvider } from '@mdx-js/react';
import { MDXComponents } from '../lib/mdx-helpers';

const App = ({ Component, pageProps }) => {
  return (
    <MDXProvider components={MDXComponents}>
      <Component {...pageProps} />
    </MDXProvider>
  );
};

export default App;
