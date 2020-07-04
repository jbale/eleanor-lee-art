import React from 'react'
import { graphql } from 'gatsby'

import { Container, Typography, makeStyles } from "@material-ui/core"

import SEO from '../components/Seo'
import Img from 'gatsby-image';

const useStyles = makeStyles((theme) => ({
  root: {
    height: `calc(100vh - ${theme.nav.height})`,
    overflow: 'hidden'
  },
  header: {
    textAlign: 'center',
    marginBottom: theme.spacing(15),
    '& h1': {
      fontWeight: theme.typography.fontWeightMedium
    },
    '& h2': {
      fontWeight: theme.typography.fontWeightLight,
      fontSize: theme.typography.h4.fontSize
    }
  },
  showcase:{
    margin: 'auto',
    boxShadow: theme.shadows[10]
  }
}));

const IndexPage = ({ data }) => {
  const classes = useStyles();
  const {title, subtitle, showcase} = data.strapiHome;

  return (
    <Container maxWidth="lg" component="section" className={classes.root}>
      <SEO title="Home" />
      <header className={classes.header}>
        <Typography variant="h1">{title.toUpperCase()}</Typography>
        <Typography variant="h2">{subtitle.toUpperCase()}</Typography>
      </header>
      <Img className={classes.showcase} fluid={showcase.localFile.childImageSharp.fluid} />
    </Container>
  );
}

export default IndexPage

export const pageQuery = graphql`
  query HomeQuery {
    strapiHome {
      title
      subtitle
      showcase {
        localFile {
          childImageSharp {
            fluid(maxWidth: 700, quality: 100) {
              ...GatsbyImageSharpFluid
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
        }
      }
    }
  }
`;
