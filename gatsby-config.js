require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: `The Brazilian Guys`,
    siteUrl: `https://the-brazilian-guys.netlify.com`,
    shortName: `TBG`,
    keywords: `Bang for your burger buck, Brazilian Food, Stuffed Hash Browns, San Diego, Best Places to eat, La Jolla, #glutenfree`,
    description: `The Brazilian Guys ...`,
    copyright: `&copy; The Brazilian Guys, Established 2015. San Diego, CA.`,
    icon: `src/assets/images/logo.svg`,
    rssFeed: `https://thebrazilianguys.com/feed`,
    twitterID: `@thebrazilianguys`,
    fbAppID: `thebrazilianguys`,
    instagramID: `thebrazilianguys`,
    googleAnalyticsId: `UA-131102503-1`
  },

  plugins: [
    // Files system
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: prismicSiteMetadata.googleAnalyticsId,
      }
    },
    // Media
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: true,
        stripMetadata: true
      }
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `thebrazilianguys`
      }
    },
    // Performance
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        display: "standalone",
        query: `
        {
          site {
            siteMetadata {
              title
              siteUrl
              shortName
              shortUrl
              startUrl
            }
          }        
          allSitePage {
            edges {
              node {
                path
              }
            }
          }
        }`,
        icon: `./src/assets/images/logo.svg`,
        legacy: true
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [`400`, `700`]
          },
          {
            family: `Lato`,
            variants: [`400`, `700`, `900`]
          }
        ]
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        rejected: true,
        printRejected: true,
        develop: true
      }
    },
    "gatsby-plugin-offline",
    // `gatsby-plugin-netlify-cache`,
    // `gatsby-plugin-remove-serviceworker`,
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `${process.env.PRISMIC_REPO}`,
        accessToken: `${process.env.PRISMIC_API_KEY}`,
        linkResolver: ({ node, key, value }) => post => `/${post.uid}`
      }
    },
    "gatsby-plugin-netlify"
  ]
};
