import React from "react"

import communityImage from "../assets/images/landings/community.jpg"

import Layout from "../components/shared/layout"
import SubCommunity from "../components/community/community"
import SiteMetadata from "../components/shared/site-metadata"
import LandingImage from "../components/shared/landingimage"

const Community = () => {
  return (
    <Layout>
      <SiteMetadata pathname="/community" pageTitle="School Community" />

      <LandingImage
        imgSrc={communityImage}
        title="School Community"
        subtitle="Information regarding the community at the school"
      />
      <SubCommunity />
    </Layout>
  )
}

export default Community
