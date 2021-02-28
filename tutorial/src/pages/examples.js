import React from 'react'
import Header from '../examples/Header'
import Layout from '../components/layout'
import HeaderStatic from '../examples/HeaderStatic'

// Importing PageQuery
// once we have imported the graph ql tagged template ({graphql}) we need to set up the query : once we set up the query it will make our data object available in the props of the component (const examples = (PROPS)). 
// To add the data proporty we need to set up graphql : in this case : we need to export a variable (export const data)
import {graphql} from 'gatsby'

// DESTRUCTURING : in order to access data more easily : we replace (props) with (data) and destructure it within the function body
const examples = ({data}) => {
    const {
        site:{
            info:{ author },
        },
    } = data   

    return (
        <Layout>
            <h1>This is our examples page</h1>
            <Header />
            <HeaderStatic />
            <h5>Author: {author}</h5>
        </Layout>
    )
}

// Here we add the data property and pass in the query in template literals. Once this is done, the console.log(props) shows a data property in console : all the properties added in the Gatsby config show up
export const data = graphql`
    query {
        site {
            info:siteMetadata {
                author
                data
                description
                person {
                    age
                    name
                }
                title
                }
        }
}
`
export default examples
