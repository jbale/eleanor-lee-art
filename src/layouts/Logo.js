import React from 'react';
import { Link, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
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
        logo {
          localFile {
            image: childImageSharp {
              fixed(width: 75) {
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
    </Link>
  )
}

export default Logo;
