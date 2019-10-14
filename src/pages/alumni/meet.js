import React from "react"
import Layout from "../../components/layout"
import SiteMetadata from "../../components/site-metadata"
import Paragraphs from "../../components/meetalumni/paragraphs"

const MeetAlumni = () => {
  return (
    <Layout>
      <SiteMetadata pathname="/alumni/meet" pageTitle="Meet our Alumni" />

      <Paragraphs />
    </Layout>
  )
}

export default MeetAlumni
