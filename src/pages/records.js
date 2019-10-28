import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import recordsImage from "../assets/images/landings/records.jpg"

import Layout from "../components/shared/layout"
import SiteMetadata from "../components/shared/site-metadata"
import TabbedRecords from "../components/records/tabbedRecords"
import LandingImage from "../components/shared/landingimage"

const Records = () => {
  const {
    allFile: {
      nodes: [{ childrenRecordsJson: data }],
    },
  } = useStaticQuery(
    graphql`
      {
        allFile(filter: { name: { eq: "records" } }) {
          nodes {
            childrenRecordsJson {
              name
              years {
                comment
                nOfP
                names {
                  award
                  names
                }
                team
                year
              }
            }
          }
        }
      }
    `
  )

  return (
    <Layout>
      <SiteMetadata pathname="/records" pageTitle="Competition Records" />

      <LandingImage
        imgSrc={recordsImage}
        title="Competition Records"
        subtitle="Our honors and records"
      />
      <TabbedRecords competitions={data} />
    </Layout>
  )
}

export default Records
