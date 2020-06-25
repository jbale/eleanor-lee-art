import React from 'react';
import { Link, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textDecoration: 'none',

    '& *': {
      color: theme.palette.getContrastText('#fff')
    }
  }
}));

const Logo = () => {
  const classes = useStyles();

  const data = useStaticQuery(graphql`
    query SiteHeaderQuery {
      strapiHeader {
        title
        subtitle
        logo {
          localFile {
            image: childImageSharp {
              fixed(width: 100) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Link to="/" className={classes.root}>
      <Img fixed={data.strapiHeader.logo.localFile.image.fixed} loading="eager" alt="logo" />
      <Typography component="span" variant="h3">{data.strapiHeader.title}</Typography>
      <Typography component="span" variant="h6">{data.strapiHeader.subtitle}</Typography>
    </Link>
  )
}

export default Logo;
