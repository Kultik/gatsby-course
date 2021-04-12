import React from "react"
import Layout from "../components/layout"
// After importing the Layout which dresses our page with Navbar (in which we also need to add images page) + Footer we still need to import Images from the examples folder
import Images from "../examples/Images"

const images = () => {
  return (
    <Layout>
      <Images />
    </Layout>
  )
}

export default images
