const nextConfig = {
  /* config options here */
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/blog/posts/launch-portfolio-site': { page: '/post', query: { title: 'launch-portfolio-site' } },
      '/blog/posts/web-scraping-nodejs': { page: '/post', query: { title: 'web-scraping-nodejs' } },
      '/blog/posts/where-to-start': { page: '/post', query: { title: 'where-to-start' } },
    }
  },
}

module.exports = nextConfig