import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SiteMetadata from "../components/site-metadata"
import TabbedRecords from "../components/records/tabbedRecords"

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

      <TabbedRecords competitions={data} />
    </Layout>
  )
}

export default Records
