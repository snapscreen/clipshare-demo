/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Clipshare`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-postcss", "gatsby-plugin-image", {
    resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ClipShare`,
        short_name: `ClipShare`,
        start_url: `/`,
        background_color: `#00172e`,
        theme_color: `#f7a600`,
        display: `minimal-ui`,
        icon: `src/images/ClipShare_Icon.svg`, // This path is relative to the root of the site.
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  ]
};
