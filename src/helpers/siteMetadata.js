module.exports = ({ graphql }) => {
  return graphql(`
    {
      prismicSiteMetadata {
        data {
          title
          siteurl
          shortname
          keywords
          description
          copyright
          rssfeed
          fbappid
          instagramid
          googleanalyticsid
          icon {
            localFile {
              publicURL
              id
              relativePath
            }
          }
        }
      }
    }
  `)
}
