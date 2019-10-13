import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SiteMetadata from "../components/site-metadata"
import TabbedExchange from "../components/exchange/tabbedExchange"

const Exchange = () => {
  const {
    allFile: {
      nodes: [{ childrenExchangeJson: data }],
    },
  } = useStaticQuery(
    graphql`
      {
        allFile(filter: { name: { eq: "exchange" } }) {
          nodes {
            childrenExchangeJson {
              name
              years {
                names
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
      <SiteMetadata
        pathname="/exchange"
        pageTitle="Exchange Program Participation"
      />

      <TabbedExchange exchanges={data} />
    </Layout>
  )
}

export default Exchange
