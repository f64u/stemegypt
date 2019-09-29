import React from "react"
import Layout from "../../components/layout"
import SiteMetadata from "../../components/site-metadata"

const MainAbout = () => {
  return (
    <Layout>
      <SiteMetadata pathname="/about" pageTitle="About" />

      <h1>This is overview of about</h1>
    </Layout>
  )
}

export default MainAbout
