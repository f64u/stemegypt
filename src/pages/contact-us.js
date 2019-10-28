import React from "react"

import campusImage from "../assets/images/landings/campus.jpg"

import Layout from "../components/shared/layout"
import SiteMetadata from "../components/shared/site-metadata"
import ContactUsComponent from "../components/contact-us/contact"
import LandingImage from "../components/shared/landingimage"

const Campus = () => {
  return (
    <Layout>
      <SiteMetadata pathname="/contact-us" pageTitle="Contact Us" />

      <LandingImage imgSrc={campusImage} title="Contact Us" />

      <ContactUsComponent />
    </Layout>
  )
}

export default Campus
