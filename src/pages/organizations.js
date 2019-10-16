import React from "react"
import Layout from "../components/shared/layout"
import SiteMetadata from "../components/shared/site-metadata"

const Organizations = () => {
  return (
    <Layout>
      <SiteMetadata
        pathname="/organizations"
        pageTitle="School Organizations and Events"
      />

      <h1>This is organizations</h1>
    </Layout>
  )
}

export default Organizations
