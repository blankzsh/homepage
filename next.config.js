module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/:dog*',
        destination: 'https://cdn.houi.cn/:dog*',
      },
    ]
  },
}
