import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { graphql, navigate } from 'gatsby'
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

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
  },
  filter: {
    paddingLeft: `${theme.spacing(4)}px`
  }
}));

const PortfolioPageTemplate = ({ data, pageContext }) => {
  const classes = useStyles();
  const paintings = data.allStrapiPaintings.edges.map(({ node }) => node);

  const handleFilter = (event, newFilter) => {
    newFilter === 'all' ? navigate(`/work`) : navigate(`/work/${newFilter}`)
  };

  const navigateToPage = (page) => {
    const baseUrl = pageContext.activeFilter === 'all' ? 'work' : `work/${pageContext.activeFilter}`;
    page > 1 ? navigate(`${baseUrl}/${page}`) : navigate(baseUrl)
  }

  return (
    <div style={{padding: '1rem'}}>
      <SEO title="Portfolio" />
      <ToggleButtonGroup value={pageContext.activeFilter} exclusive onChange={handleFilter} className={classes.filter}>
        <ToggleButton value="all">
          All
        </ToggleButton>
        <ToggleButton value="avaliable">
          Avaliable
        </ToggleButton>
      </ToggleButtonGroup>
      <Paintings paintings={paintings} />
      {pageContext.numPages > 1 && (
        <div className={classes.paginationContainer}>
          <Pagination
            count={pageContext.numPages}
            page={pageContext.currentPage}
            onChange={(event, page) => navigateToPage(page)}
            color="primary" />
        </div>
      )}
    </div>
  );
}

export const portfolioListQuery = graphql`
  query PaintingListQuery($skip: Int!, $limit: Int!, $filter: StrapiPaintingsFilterInput) {
    allStrapiPaintings(sort: {fields: [created_at], order: DESC}, limit: $limit, skip: $skip, filter: $filter)  {
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
