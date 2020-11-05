module.exports = {
    async redirects() {
      return [
        {
          source: '/the-life-and-times-of-https',
          destination: '/posts/the-life-and-times-of-https',
          permanent: true,
        },
      ]
    },
  }