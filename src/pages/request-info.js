import React from "react"

import campusImage from "../assets/images/landings/campus.jpg"

import Layout from "../components/shared/layout"
import SiteMetadata from "../components/shared/site-metadata"
import ContactUsComponent from "../components/contact-us/contact"
import LandingImage from "../components/shared/landingimage"

const Campus = () => {
  return (
    <Layout>
      <SiteMetadata pathname="/request-info" pageTitle="Request Information" />

      <LandingImage imgSrc={campusImage} title="Request Information" />

      <ContactUsComponent
        title="Request Information"
        subtitle="Inform us of any kind of further information you wish to see on this site"
        type="req"
      />
    </Layout>
  )
}

export default Campus
