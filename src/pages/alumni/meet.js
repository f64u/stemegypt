import React from "react"

import alumniImage from "../../assets/images/landings/alumni.jpg"

import Layout from "../../components/shared/layout"
import SiteMetadata from "../../components/shared/site-metadata"
import Paragraphs from "../../components/meetalumni/paragraphs"
import LandingImage from "../../components/shared/landingimage"

const MeetAlumni = () => {
  return (
    <Layout>
      <SiteMetadata pathname="/alumni/meet" pageTitle="Meet our Alumni" />

      <LandingImage
        imgSrc={alumniImage}
        title="Meet our Alumni"
        subtitle="Stories about two of our alumni"
      />
      <Paragraphs />
    </Layout>
  )
}

export default MeetAlumni
