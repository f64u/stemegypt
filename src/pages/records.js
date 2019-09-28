import React from "react"
import Layout from "../components/layout"
import SiteMetadata from "../components/site-metadata"

const Records = () => {
  return (
    <Layout>
      <SiteMetadata pathname="/records" pageTitle="Competition Records" />

      <h1>This is competition records</h1>
    </Layout>
  )
}

export default Records
