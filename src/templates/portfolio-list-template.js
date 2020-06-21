import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PortfolioList = ({data}) => {
  
  const paintings = data.allStrapiPaintings.edges;

  return (
    <Layout>
      <SEO title="Portfolio" />
      <h1>Portfolio</h1>
      {paintings.map(({ node }) => {
          return <div key={node.id}>{node.title}</div>
      })}
    </Layout>
  );
}


export const portfolioListQuery = graphql`
  query PaintingListQuery($skip: Int!, $limit: Int!) {
    allStrapiPaintings(sort: {fields: [created_at], order: DESC}, limit: $limit, skip: $skip) {
      edges {
        node {
          id
          created_at
          title
          media {
            localFile {
              childImageSharp {
                id
              }
            }
          }
        }
      }
    }
  }
`

export default PortfolioList
