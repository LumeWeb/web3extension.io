import type {GatsbyConfig} from "gatsby";

const config: GatsbyConfig = {
    siteMetadata: {
        title: 'Lume Web Web3 Extension',
        description: 'Get the browser extension that will give you free, open access into the user-owned Web3 Internet',
        siteUrl: 'https://web3extension.com',
        twitter: '@lumeweb3',
        siteLanguage: 'en',
        ogLanguage: 'en-US',
    },
    plugins: ["gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-react-helmet", {
        resolve: 'gatsby-plugin-manifest',
        options: {
            "icon": "src/images/icon.png"
        }
    }, {
        resolve: 'gatsby-source-filesystem',
        options: {
            "name": "images",
            "path": "./src/images/"
        },
        __key: "images"
    },
        `gatsby-plugin-offline`,
        "gatsby-plugin-sharp",
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-plugin-web-font-loader`,
            options: {
                google: {
                    families: ['Roboto']
                }
            }
        }
    ],

};

export default config;
