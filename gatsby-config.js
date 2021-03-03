module.exports = {
  siteMetadata: {
    title: "My Super Cool Blog",
    description: "My blog where I write super cool stuff.",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/blog/`,
      },
    },
  ],
};
