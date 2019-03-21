require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: `Liverpool Soccer Club`,
    siteUrl: `https://liverpoolsc.netlify.com`,
    shortName: `LiverpoolSC`,
    slogan: `You'l never walk alone`,
    keywords: `soccer, club, youth, liverpool, competitive, lakeside, el cajon, san diego, east county, presidio`,
    description: `Liverpool Soccer Club ... `,
    copyright: `&copy; The Brazilian Guys, Established 2015. San Diego, CA.`,
    icon: `src/assets/images/logo.svg`,
    rssFeed: ``,
    twitterID: `@liverpoolsc`,
    fbAppID: `liverpoolsc`,
    instagramID: `liverpoolsc`,
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
    // {
    //   resolve: `gatsby-source-instagram`,
    //   options: {
    //     username: `thebrazilianguys`
    //   }
    // },
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
