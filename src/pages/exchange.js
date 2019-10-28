import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import exchangeImage from "../assets/images/landings/exchange.jpg"

import Layout from "../components/shared/layout"
import SiteMetadata from "../components/shared/site-metadata"
import TabbedExchange from "../components/exchange/tabbedExchange"
import LandingImage from "../components/shared/landingimage"

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
      <SiteMetadata pathname="/exchange" pageTitle="Exchange Program" />

      <LandingImage
        imgSrc={exchangeImage}
        title="Exchange Programs"
        subtitle="Exchange and summer programs our students took part in"
      />
      <TabbedExchange exchanges={data} />
    </Layout>
  )
}

export default Exchange
