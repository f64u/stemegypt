import React from "react"
import Layout from "../components/layout"
import SiteMetadata from "../components/site-metadata"

import TabbedAcademics from "../components/academics/tabbedAcademics"

const Academics = () => {
  return (
    <Layout>
      <SiteMetadata pathname="/academics" pageTitle="Academics" />

      <TabbedAcademics />
    </Layout>
  )
}

export default Academics
