import React from "react"
import Layout from "../components/layout"
import SiteMetadata from "../components/site-metadata"
import CampusComponent from "../components/campus/subcampus"

const Campus = () => {
  return (
    <Layout>
      <SiteMetadata pathname="/campus" pageTitle="Campus" />

      <CampusComponent />
    </Layout>
  )
}

export default Campus
