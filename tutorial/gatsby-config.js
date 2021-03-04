/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 * configuration follows strict rules defined above. In the case of siteMetadata (which is an object), properties must be declared a certain way.
 */

module.exports = {
  /* Your site config here */
  siteMetadata:{
    title:'Gatsby Tutorial',
    description: 'random description',
    author:'@johndoe',
    data:['item 1', 'item 2'], // dummy data we will delete later 
    person: {
      name: 'peter',
      age:32
    }, // just to show how we can access objects and their properties.
  }
  ,

  plugins: [
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
  ],
}
