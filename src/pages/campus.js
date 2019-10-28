import React from "react"

import campusImage from "../assets/images/landings/campus.jpg"

import Layout from "../components/shared/layout"
import SiteMetadata from "../components/shared/site-metadata"
import TabbedCampus from "../components/campus/tabbedCampus"
import LandingImage from "../components/shared/landingimage"

const Campus = () => {
  return (
    <Layout>
      <SiteMetadata pathname="/campus" pageTitle="Campus and Community" />

      <LandingImage
        imgSrc={campusImage}
        title="Campus and Community"
        subtitle="Our diverse campus and social scene"
      />

      <TabbedCampus />
    </Layout>
  )
}

export default Campus
