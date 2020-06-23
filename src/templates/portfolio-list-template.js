import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { graphql, navigate } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/Seo'
import { Paintings } from '../components/Paintings'

import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  gridList: {
    paddingBottom: '2rem'
  },
  title: {
    color: theme.palette.text.primary.dark,
  },
  titleBar: {
    background: `linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)`
  },
  paginationContainer: {
    display: 'flex',
    justifyContent: 'center'
  }
}));

const PortfolioList = ({ data, pageContext }) => {
  const classes = useStyles();
  const paintings = data.allStrapiPaintings.edges.map(({ node }) => node);

  return (
    <Layout>
      <SEO title="Portfolio" />
      <h1>Portfolio</h1>
      <Paintings paintings={paintings} />
      {pageContext.numPages > 1 && (
        <div className={classes.paginationContainer}>
          <Pagination
            count={pageContext.numPages}
            page={pageContext.currentPage}
            onChange={(event, page) => page > 1 ? navigate(`/portfolio/${page}`) : navigate(`/portfolio`)}
            color="primary" />
        </div>
      )}
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
                fluid(maxHeight: 600, quality: 100) {
                  ...GatsbyImageSharpFluid
                  ...GatsbyImageSharpFluidLimitPresentationSize
                }
              }
            }
          }
          overview {
            localFile {
              childImageSharp {
                fluid(maxHeight: 600, quality: 100) {
                  ...GatsbyImageSharpFluid
                  ...GatsbyImageSharpFluidLimitPresentationSize
                }
              }
            }
          }
          detail {
            localFile {
              childImageSharp {
                fluid(maxHeight: 600, quality: 100) {
                  ...GatsbyImageSharpFluid
                  ...GatsbyImageSharpFluidLimitPresentationSize
                }
              }
            }
          }
        }
      }
    }
  }
`

export default PortfolioList
