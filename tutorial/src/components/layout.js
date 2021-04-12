// NAMING CONVENTION : layout
// The meaning behind this file is to centralize the distribution of the components such as the Navbar : so if destination changes, you don't have to go edit the imports file per file manually

// Functional component
import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
// IMPORTING GLOBAL CSS : layout.css : we need to use full file ext
import "./layout.css"

// Below, instead of constantly having DIVs, we can use REACT FRAGMENTS (empty tags) - we cannot have adjacent components (Nav & Foot) without PARENT COMPONENT (= <>) - use of a specific PROPS ({children}) ::> looking for the children prop : i can then decide where to place that content

const layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default layout

// once the LAYOUT is established, we can place it in each page
