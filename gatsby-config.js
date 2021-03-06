const keys = require('./keys');

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-shopify`,
      options: {
        shopName: `ebukagatsby.myshopify.com`,
        accessToken: keys.STOREFRONT_TOKEN,
      }
    },
  ],
}
