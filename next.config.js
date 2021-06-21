const path = require('path');

module.exports = {
  pageExtensions: ['js', 'jsx', 'mdx'],
  experimental: {
    modern: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: '@mdx-js/loader',
          options: {
            remarkPlugins: [],
            rehypePlugins: [],
          },
        },
        path.join(__dirname, './src/lib/mdx-custom-loader'),
      ],
    });

    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            icon: true,
            titleProp: true,
          },
        },
      ],
    });

    return config;
  },
};
