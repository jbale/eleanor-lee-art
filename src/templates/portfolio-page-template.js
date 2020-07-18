import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { graphql, navigate } from 'gatsby'

import SEO from '../components/Seo'
import { Paintings } from '../components/Paintings'

import Pagination from '@material-ui/lab/Pagination';
import { Container } from '@material-ui/core';

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

const PortfolioPageTemplate = ({ data, pageContext }) => {
  const classes = useStyles();
  const paintings = data.allStrapiPaintings.edges.map(({ node }) => node);

  return (
    <div style={{padding: '1rem'}}>
      <SEO title="Portfolio" />
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
    </div>
  );
}

export const portfolioListQuery = graphql`
  query PaintingListQuery($skip: Int!, $limit: Int!) {
    allStrapiPaintings(sort: {fields: [created_at], order: DESC}, limit: $limit, skip: $skip) {
      edges {
        node {
          slug
          created_at
          title
          width
          height
          title
          overview {
            localFile {
              childImageSharp {
                fluid(maxHeight: 1000, quality: 100) {
                  ...GatsbyImageSharpFluid
                  ...GatsbyImageSharpFluidLimitPresentationSize
                }
              }
            }
          }
          detail {
            localFile {
              childImageSharp {
                fluid(maxHeight: 1000, quality: 100) {
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

export default PortfolioPageTemplate;
