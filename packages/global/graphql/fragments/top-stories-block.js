const gql = require('graphql-tag');

module.exports = gql`

fragment TopStoriesBlockFragment on Content {
  id
  type
  shortName
  teaser(input: { useFallback: false, maxLength: null })
  siteContext {
    path
  }
  primarySection {
    id
    name
    fullName
    canonicalPath
  }
  primaryImage {
    id
    src
    alt
    isLogo
  }
}

`;
