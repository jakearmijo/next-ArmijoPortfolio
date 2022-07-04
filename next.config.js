const nextConfig = {
  /* config options here */
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/blog/launch-portfolio-site': { page: '/blog', query: { title: 'launch-portfolio-site' } },
      '/blog/web-scraping-nodejs': { page: '/blog', query: { title: 'web-scraping-nodejs' } },
      '/blog/where-to-start': { page: '/blog', query: { title: 'where-to-start' } },
    }
  },
  images: {
    loader: 'custom',
    path: '',
  }
}

module.exports = nextConfig