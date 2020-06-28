import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { graphql, Link } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/Seo'

import { Painting } from '../components/Paintings'
import { Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  paintingNav: {
    display: 'flex',
    flexDirection: 'row-reverse',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  navLink: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    '& a': {
      color: theme.palette.text.primary,
      textDecoration: 'none',
      textDecorationColor: 'black',
      '&:hover': {
        textDecoration: 'underline'
      }
    },
    '& > span': {
      color: theme.palette.text.disabled,
      cursor: 'not-allowed'
    }
  }
}));

const PaintingTemplate = ({ data, pageContext}) => {
  const classes = useStyles();
  const painting = data.strapiPaintings;

  return (
    <Layout>
      <SEO title={painting.title} />
      <div className={classes.paintingNav}>
        <div className={classes.navLink}>
          {pageContext.next ? (
            <Link to={pageContext.next}><Typography variant="button">Next</Typography></Link>
          ) : (
            <Typography variant="button">Next</Typography>
          )}
        </div>
        <div>|</div>
        <div className={classes.navLink}>
          {pageContext.prev ? (
            <Link to={pageContext.prev}><Typography variant="button">Previous</Typography></Link>
          ) : (
            <Typography variant="button">Previous</Typography>
          )}
        </div>
      </div>
      <Painting painting={painting} />
    </Layout>
  );
}

export const paintingPageTemplateQuery = graphql`
  query PaintingPageTemplate($slug: String!) {
    strapiPaintings(slug: { eq: $slug }) {
      slug
      created_at
      title
      media {
        localFile {
          childImageSharp {
            thumbnail: fixed(width: 150) {
              ...GatsbyImageSharpFixed
            }
            fluid(maxWidth: 4096, quality: 100) {
              ...GatsbyImageSharpFluid
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
        }
      }
    }
  }
`

export default PaintingTemplate
