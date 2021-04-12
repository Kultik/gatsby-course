import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { box } from "../components/products.module.css"
import Image from "gatsby-image"
import { Link } from "gatsby"

const ComponentName = ({ data }) => {
  const {
    allContentfulProduct: { nodes: products },
  } = data
  return (
    <Layout>
      <section className={box}>
        {products.map(product => {
          return (
            <article key={product.id}>
              <Image fluid={product.image.fluid} alt={product.title}></Image>
              <h3>
                {product.title} <span>${product.price}</span>
              </h3>
              <Link to={`/products/${product.slug}`}>More details</Link>
            </article>
          )
        })}
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        id
        price
        title
        slug
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

export default ComponentName

// import React, { Component } from "react"
// import Layout from "../components/layout"
// // Importing STYLES
// import { box } from "../components/products.module.css"
// // Console log to show that styles is a JS object
// // console.log(styles)

// export default class products extends Component {
//   render() {
//     return (
//       <Layout>
//         <div className={box}>
//           <h1>This is our products page</h1>
//           <p className={box}>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
//             nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
//             Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu
//             venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum
//             eget.
//           </p>
//         </div>
//       </Layout>
//     )
//   }
// }
