import React from "react"
import Layout from "../components/layout"
import SiteMetadata from "../components/site-metadata"

const Campus = () => {
  return (
    <Layout>
      <SiteMetadata pathname="/campus" pageTitle="Campus" />

      <h1>This is campus</h1>
    </Layout>
  )
}

export default Campus
