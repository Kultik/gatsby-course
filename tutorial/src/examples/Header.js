import React from 'react'

// setting up ourself USESTATICQUERY
// once the query is setup (copy-pased from graphql), we need to invoke our useStaticQuery from the import.
import {useStaticQuery, graphql} from 'gatsby'
const getData = graphql`
    {
        site {
            siteMetadata {
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
// it is in the react component that we will invoke the useStaticQuery under a const - and then calling the query inside it (getData)
const Header = () => {
    // const data = useStaticQuery(getData);
    // console.log(data) 
    // data appears as shown previously from a copy in the exporter

    // DESTRUCTURING : so we don't need to nest the fetching of our data below - FASTER
    const {
        site:{
            siteMetadata:{
                title, 
                person:{name, age},
            },
        },
    } = useStaticQuery(getData)


    return (
        <div>
            {/* <h1>Title : {data.site.siteMetadata.title}</h1>
            <h2>Name : {data.site.siteMetadata.person.name}</h2> */}
            <h1> Title : {title} </h1>
            <h2> Name : {name} </h2>
            <h2> Age : {age} </h2>
        </div>
    )
}

export default Header

// useStaticQuery + graphql 
// *** RECAP ***
// We import the two : graphql is tagged template so we need to set up template literals and pass our query
// Once the query is setup, we invoke : useStaticQuery and pass in the variable (getData), or graphql with the whole query
// That is gonna 'spit' back our data object and then we assign it to a variable 
// We can then destructure it in each tag or centralize in a const