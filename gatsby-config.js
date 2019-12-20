module.exports = {
  siteMetadata: {
    siteTitle: 'Daniel Kapper',
    siteDescription: 'Daniel Kapper - projects and blog post',
    siteImage: '/banner.png', // main image of the site for metadata
    siteUrl: 'https://www.danielkapper.com/',
    pathPrefix: '/',
    siteLanguage: 'en',
    ogLanguage: `en_US`,
    author: 'Daniel Kapper', // for example - 'Ivan Ganev'
    authorDescription: 'I like to build cool websites and apps', //
    avatar: '/danielkapper.png',
    twitterSite: '', // website account on twitter
    twitterCreator: '', // creator account on twitter
    social: [
      {
        icon: `twitter`,
        url: `https://twitter.com/dkapper01`
      },
      {
        icon: `github`,
        url: `https://github.com/dkapper01`
      },
      {
        icon: `node-js`,
        url: `https://www.linkedin.com/in/kapper/`
      }
    ]
  },
  plugins: [
    {
      resolve: 'gatsby-theme-chronoblog',
      options: {
        uiText: {
          // ui text fot translate
          feedShowMoreButton: 'show more',
          feedSearchPlaceholder: 'search',
          cardReadMoreButton: 'read more →',
          allTagsButton: 'all tags'
        },
        feedItems: {
          // global settings for feed items
          limit: 50,
          yearSeparator: true,
          yearSeparatorSkipFirst: true,
          contentTypes: {
            links: {
              beforeTitle: '🔗 '
            }
          }
        },
        feedSearch: {
          symbol: '🔍'
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Daniel Kapper projects and blog`,
        short_name: `Daniel Kapper`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#3a5f7d`,
        display: `standalone`,
        icon: `src/assets/danielkapper.png`
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: 'UA-XXXXXXXXX-X'
      }
    }
  ]
};
