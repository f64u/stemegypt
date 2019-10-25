import React from "react"

import academicsImage from "../assets/images/landings/academics.jpg"

import Layout from "../components/shared/layout"
import SiteMetadata from "../components/shared/site-metadata"
import TabbedAcademics from "../components/academics/tabbedAcademics"
import LandingImage from "../components/shared/landingimage"

const Academics = () => {
  return (
    <Layout>
      <SiteMetadata pathname="/academics" pageTitle="Academics" />

      <LandingImage
        imgSrc={academicsImage}
        title="Academics"
        subtitle="Information regarding the academic and grading systems"
      />
      <TabbedAcademics />
    </Layout>
  )
}

export default Academics
