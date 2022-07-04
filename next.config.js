const nextConfig = {
  /* config options here */
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/blog/launch-portfolio-site': { page: '/post', query: { title: 'launch-portfolio-site' } },
      '/blog/web-scraping-nodejs': { page: '/post', query: { title: 'web-scraping-nodejs' } },
      '/blog/where-to-start': { page: '/post', query: { title: 'where-to-start' } },
    }
  },
  images: {
    loader: "imgix",
    path: "",
  }
}

module.exports = nextConfig