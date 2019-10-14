import React from "react"

import { useStaticQuery, graphql } from "gatsby"

import Layout from "../../components/layout"
import SiteMetadata from "../../components/site-metadata"
import Schools from "../../components/alumni/schools"

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

      <Schools schools={data} />
    </Layout>
  )
}

export default Alumni
