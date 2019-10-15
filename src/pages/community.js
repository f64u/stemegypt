import React from "react"
import Layout from "../components/layout"
import SubCommunity from "../components/community/community"
import SiteMetadata from "../components/site-metadata"

const Community = () => {
  return (
    <Layout>
      <SiteMetadata pathname="/community" pageTitle="School Community" />

      <SubCommunity />
    </Layout>
  )
}

export default Community
