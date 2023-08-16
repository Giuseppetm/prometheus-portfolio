/** @type {import('next').NextConfig} */
const withVideos = require('next-videos');

module.exports = withVideos({
  webpack(config) {
    config.module.rules.push({
      test: /\.(mov|mp4)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            name: 'static/media/[name].[hash].[ext]',
          },
        },
      ],
    });

    return config;
  }
});