import React from "react"
import Layout from "../components/layout"

import "../index.css"
import SiteMetadata from "../components/site-metadata"
import Landing from "../components/home/landing"
import TheName from "../components/home/thename"
import VisionSection from "../components/home/vision"

export default () => {
  return (
    <Layout>
      <SiteMetadata pathname="/" />
      <Landing />
      <TheName />
      <VisionSection />
    </Layout>
  )
}
