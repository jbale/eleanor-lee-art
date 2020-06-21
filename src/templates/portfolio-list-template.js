import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { graphql, navigate} from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const PortfolioList = ({data}) => {
  
import Pagination from '@material-ui/lab/Pagination';
const useStyles = makeStyles((theme) => ({
  paginationContainer: {
    display: 'flex',
    justifyContent: 'center'
  }
}));

const PortfolioList = ({data, pageContext}) => {
  const classes = useStyles();
  const paintings = data.allStrapiPaintings.edges;

  return (
    <Layout>
      <SEO title="Portfolio" />
      <h1>Portfolio</h1>
      { pageContext.numPages > 1 && (
        <div className={classes.paginationContainer}>
          <Pagination
            count={pageContext.numPages} 
            page={pageContext.currentPage}
            onChange={(event, page) => page > 1 ? navigate(`/portfolio/${page}`) : navigate(`/portfolio`) }
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
