import React from "react"

import { useStaticQuery, graphql } from "gatsby"

import alumniImage from "../../assets/images/landings/alumni.jpg"

import Layout from "../../components/shared/layout"
import SiteMetadata from "../../components/shared/site-metadata"
import Schools from "../../components/alumni/schools"
import LandingImage from "../../components/shared/landingimage"

const Alumni = () => {
  const {
    allFile: {
      nodes: [{ childrenSchoolsJson: data }],
    },
  } = useStaticQuery(graphql`
    {
      allFile(filter: { name: { eq: "schools" } }) {
        nodes {
          childrenSchoolsJson {
            school
            imageName
            names
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SiteMetadata pathname="/alumni" pageTitle="Alumni" />

      <LandingImage
        imgSrc={alumniImage}
        title="Alumni"
        subtitle="Our Alumni here and overseas"
      />
      <Schools schools={data} />
    </Layout>
  )
}

export default Alumni
