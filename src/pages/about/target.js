import React from "react"
import Layout from "../../components/shared/layout"
import SiteMetadata from "../../components/shared/site-metadata"

const TargetedStudents = () => {
  return (
    <Layout>
      <SiteMetadata pathname="/about/target" pageTitle="Targeted Students" />

      <h1>This is targeted students</h1>
    </Layout>
  )
}

export default TargetedStudents
