const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md'],
  experimental: {
    modern: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config, _options) => {
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
});
