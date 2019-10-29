import React from "react"

import stem from "../assets/images/STEM.jpg"

import Layout from "../components/shared/layout"
import LandingImage from "../components/shared/landingimage"
import SiteMetadata from "../components/shared/site-metadata"
import About from "../components/about/about"

const MainAbout = () => {
  return (
    <Layout>
      <SiteMetadata pathname="/about" pageTitle="About" />

      <LandingImage
        imgSrc={stem}
        title="About"
        subtitle="An overview about the school"
      />

      <About />
    </Layout>
  )
}

export default MainAbout
