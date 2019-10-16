import React from "react"
import Layout from "../components/shared/layout"
import SiteMetadata from "../components/shared/site-metadata"

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
