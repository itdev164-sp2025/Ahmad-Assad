/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
  });
module.exports = {
  siteMetadata: {
    title: "My Gatsby Blog",
    description: "A simple blog created for ITDEV-164",
    author: "Ahmad Assad",
    contact: {
      name: "Ahmad",
      email: "assada5@gmatc.matc.edu",
    },
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.hhw0otuzizr6,
        accessToken: process.env.dtelreve2_jY1aaR-jq9-gepjjceoWdkpQuysXfVFuE,
},
    },
  ],
};