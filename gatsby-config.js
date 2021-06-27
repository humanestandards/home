const siteMetadata = require('./site-metadata.json')

module.exports = {
    pathPrefix: '/',
    siteMetadata: siteMetadata,
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-source-data`,
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages`
            }
        },
        {
            resolve: `gatsby-plugin-sass`,
            options: {}
        },
        {
            resolve: `gatsby-remark-page-creator`,
            options: {}
        },
        {
            resolve: `@stackbit/gatsby-plugin-menus`,
            options: {
                sourceUrlPath: `fields.url`,
                pageContextProperty: `menus`,
            }
        }
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
              // You can add multiple tracking ids and a pageview event will be fired for all of them.
              trackingIds: [
                " UA-174209095-1", // Google Analytics / GA
              ],
              // This object gets passed directly to the gtag config command
              // This config will be shared across all trackingIds
              gtagConfig: {
                optimize_id: "OPT_CONTAINER_ID",
                anonymize_ip: true,
                cookie_expires: 0,
              },
              // This object is used for configuration specific to this plugin
              pluginConfig: {
                // Puts tracking script in the head instead of the body
                head: true,
                // Setting this parameter is also optional
                respectDNT: true,
                // Avoids sending pageview hits from custom paths
                exclude: ["/preview/**", "/do-not-track/me/too/"],
              },
            },
          },
    ]
};
