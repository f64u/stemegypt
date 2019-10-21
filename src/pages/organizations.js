import React from "react"
import Layout from "../components/shared/layout"
import SiteMetadata from "../components/shared/site-metadata"
import OrganizationsEvents from "../components/organizations/organizations-events"

const Organizations = () => {
  return (
    <Layout>
      <SiteMetadata
        pathname="/organizations"
        pageTitle="School Organizations and Events"
      />

      <OrganizationsEvents />
    </Layout>
  )
}

export default Organizations
