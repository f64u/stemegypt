import React from "react"

import eventsImage from "../assets/images/landings/events.jpg"

import Layout from "../components/shared/layout"
import SiteMetadata from "../components/shared/site-metadata"
import OrganizationsEvents from "../components/organizations/organizations-events"
import LandingImage from "../components/shared/landingimage"

const Organizations = () => {
  return (
    <Layout>
      <SiteMetadata
        pathname="/organizations"
        pageTitle="Student Organizations and Events"
      />

      <LandingImage
        imgSrc={eventsImage}
        title="Student Organizations and Events"
        subtitle="Student-run and -made organizations and events inside the school"
      />

      <OrganizationsEvents />
    </Layout>
  )
}

export default Organizations
