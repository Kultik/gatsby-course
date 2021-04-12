import React from "react"
// Here we will set up a component that will allow us to switch onto single page application - react style - on react we would use REACT ROUTER / REACH ROUTER (which Gatsby is using under the hood) : NAMED IMPORT --> use curly brackets

// import{Link} from 'gatsby' not needed after removal of Link to blog page
// once this link hereabove is set, we will delete the html links below to convert them to link component

// PROPS (to="" - just like in the regular REACT ROUTER) is a way to transform data from one component to another

// SHOWCASE (not the best option because adding the footer means we would have 2 things we need to import in each page) : NAVBAR IMPORT ('../' going next level up = source : here the folder name is 'components')
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'
// These two lines above were commented after the LAYOUT creation and <Navbar /> and <Footer /> were deleted from component

// LAYOUT COMPONENT
import Layout from "../components/layout"
// we then have to wrap the entire component in Layout tag : content in index.js is not loaded -> in React, if component (here LAYOUT COMPONENT) has children or some content within - in order to render that content we need to use a specific PROP

// BUTTON
// here we will add the button created in button.js through styled components. Between curly brackets because named import.
import { ExampleButton } from "../components/button"

// export default () => (
//   return (
//     <Layout>
//       <h1 style={{ color: "red", textTransform: "uppercase" }}>
//         Hello from Gatsby
//       </h1>
//       <a href="https://www.gatsbyjs.org" target="_blank" rel="noreferrer">
//         Gatsby official documentation
//       </a>
//       <br></br>
//       <ExampleButton>Click me</ExampleButton>
//     </Layout>
//   )
// )

// export default home

// export default () => (
//   <Layout>
//     <h1 style={{ color: "red", textTransform: "uppercase" }}>
//       Hello from Gatsby
//     </h1>
//     <a href="https://www.gatsbyjs.org" target="_blank" rel="noreferrer">
//       Gatsby official documentation
//     </a>
//     <br></br>
//     <ExampleButton>Click me</ExampleButton>
//   </Layout>
// )

// NAMING THE FUNCTION

const index = () => {
  return (
    <Layout>
      <h1 style={{ color: "red", textTransform: "uppercase" }}>
        Hello from Gatsby
      </h1>
      <a href="https://www.gatsbyjs.org" target="_blank" rel="noreferrer">
        Gatsby official documentation
      </a>
      <br></br>
      <ExampleButton>Click me</ExampleButton>
    </Layout>
  )
}
export default index

// **** OFFICIAL STARTER PAGE (slightly different than what was shown in tuto so tryout above) ****
// export default function Home() {
//   return <div>Hello Peeps!
//     <div>
//       <Navbar />
//       <Link to="/blog/">Blog page</Link>
//     </div>
//     <a href="https://www.gatsbyjs.org">Gatsby docs</a>
//   </div>
// }
