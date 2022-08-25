import type { GatsbyConfig } from 'gatsby';

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
  // Since `gatsby-plugin-typescript` is automatically included in Gatsby you
  // don't need to define it here (just if you need to change the options)
  plugins: [
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: process.env.STRAPI_API_URL || 'http://localhost:8000',
        accessToken: process.env.STRAPI_TOKEN,
        collectionTypes: [
          {
            singularName: 'article',
            queryParams: {
              publicationState:
                process.env.GATSBY_IS_PREVIEW === 'true' ? 'preview' : 'live',
              populate: {
                cover: '*',
                blocks: {
                  populate: '*',
                },
              },
            },
          },
          {
            singularName: 'author',
          },
          {
            singularName: 'category',
          },
        ],
        singleTypes: [
          {
            singularName: 'about',
            queryParams: {
              populate: {
                blocks: {
                  populate: '*',
                },
              },
            },
          },
          {
            singularName: 'global',
            queryParams: {
              populate: {
                favicon: '*',
                defaultSeo: {
                  populate: '*',
                },
              },
            },
          },
          {
            singularName: 'homepage',
          },
          {
            singularName: 'top-menu',
          },
        ],
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-remark',
  ],
  jsxRuntime: 'automatic',
};

export default config;
