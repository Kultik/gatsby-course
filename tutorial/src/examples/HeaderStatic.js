// OLD SYNTAX

import React from "react"
import { StaticQuery, graphql } from "gatsby"

// StaticQuery is a component : 
// Has 2 props : Query prop (we needed to name it query) (in which we pass our graphql) + render is also a prop
function ComponentName() {
    return (
        <StaticQuery
            query={graphql`
            {
                site {
                    info: siteMetadata {
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
        `}
            // render={data => <pre>{JSON.stringify(data, null, 4)}</pre>}
            render = {donburi => <div><h4>Description :</h4> {donburi.site.info.description}</div>}
        ></StaticQuery>
    )
}

export default ComponentName

// CONCLUSION : instead of the hook, here we have a COMPONENT with 2 PROPS : query + render (using the render props with function whose parameter has access to what we got back from the graphql)