import React from "react"

import campusImage from "../assets/images/landings/campus.jpg"

import Layout from "../components/shared/layout"
import SiteMetadata from "../components/shared/site-metadata"
import CampusComponent from "../components/campus/subcampus"
import LandingImage from "../components/shared/landingimage"

const Campus = () => {
  return (
    <Layout>
      <SiteMetadata pathname="/campus" pageTitle="Campus" />

      <LandingImage
        imgSrc={campusImage}
        title="Campus"
        subtitle="Information about and images of the school campus"
      />

      <CampusComponent />
    </Layout>
  )
}

export default Campus
