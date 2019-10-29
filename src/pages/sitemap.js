import React from "react"

import stem from "../assets/images/STEM.jpg"

import Layout from "../components/shared/layout"
import SiteMetadata from "../components/shared/site-metadata"
import LandingImage from "../components/shared/landingimage"
import Sitemap from "../components/sitemap/sitemap"

const Exchange = () => {
  return (
    <Layout>
      <SiteMetadata pathname="/sitemap" pageTitle="Sitemap" />

      <LandingImage imgSrc={stem} title="Sitemap" />

      <Sitemap />
    </Layout>
  )
}

export default Exchange
