import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Image from "gatsby-image"

const ComponentName = ({
  data: {
    product: {
      title,
      price,
      image: { fluid },
      info: { info },
    },
  },
}) => {
  return (
    <Layout>
      <div style={{ textAlign: "center" }}>
        <Link to="/products">Back to products</Link>
        <h1>single product: {title}</h1>
      </div>
      <section className="single-product">
        <article>
          <Image fluid={fluid} alt={title} />
        </article>
        <article>
          <h1 style={{ color: "blue" }}>{title}</h1>
          <h3>${price}</h3>
          <p>{info}</p>
          <button>Add to cart</button>
        </article>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleProduct($slug: String) {
    product: contentfulProduct(slug: { eq: $slug }) {
      title
      price
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      info {
        info
      }
    }
  }
`

export default ComponentName

// import React from "react"

// const productTemplate = props => {
//   console.log(props)
//   return (
//     <div>
//       <h1>Hello from Product Template</h1>
//     </div>
//   )
// }

// export default productTemplate
