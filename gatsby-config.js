module.exports = {
  pathPrefix: '/blog',
  siteMetadata: {
    title: "Tan's Blog",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`
      }
    }
  ]
}
