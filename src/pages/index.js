import React from "react"
import Layout from "../components/shared/layout"

import "../index.scss"
import SiteMetadata from "../components/shared/site-metadata"
import Landing from "../components/home/landing"
import TheName from "../components/home/thename"
import VisionSection from "../components/home/vision"
import MissionSection from "../components/home/mission"
import OverviewSection from "../components/home/overview"
import TargetedStudentsSection from "../components/home/target"

export default () => {
  return (
    <Layout>
      <SiteMetadata pathname="/" />
      <Landing />
      <TheName />
      <VisionSection />
      <MissionSection />
      <OverviewSection />
      <TargetedStudentsSection />
    </Layout>
  )
}
