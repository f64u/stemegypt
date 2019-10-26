import React from "react"

import campusImage from "../assets/images/landings/campus.jpg"

import Layout from "../components/shared/layout"
import SiteMetadata from "../components/shared/site-metadata"
import TabbedCampus from "../components/campus/tabbedCampus"
import LandingImage from "../components/shared/landingimage"

const Campus = () => {
  return (
    <Layout>
      <SiteMetadata pathname="/campus" pageTitle="Campus" />

      <LandingImage
        imgSrc={campusImage}
        title="Campus and School Community"
        subtitle="Information about and images of the school campus and community"
      />

      <TabbedCampus />
    </Layout>
  )
}

export default Campus
