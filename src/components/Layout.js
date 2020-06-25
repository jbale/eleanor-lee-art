/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

import Header from './Header'
import './layout.css'
import { Container, CssBaseline } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: blue
  },
  typography: {
    fontFamily: [
      'Quicksand',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(',')
  }
});

const useStyles = makeStyles({
  root: {
    position: 'relative',
    minHeight: '100vh'
  },
  content: {
    paddingBottom: '2.5rem'
  },
  hero: {
    position: 'relative',
    height: 'calc(100vh - 200px)',
    marginBottom: '5rem'
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '2.5rem',
    textAlign: 'center'
  }
});

const Layout = ({ hero, children }) => {
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
    <>
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Helmet>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className={classes.root}>
          <div className={classes.content}>
            <Header />
            {hero && (
              <div className={classes.hero}>
                {hero}
              </div>
            )}
            <Container maxWidth="lg" component="main">{children}</Container>
          </div>

          <footer className={classes.footer}>
            © {new Date().getFullYear()}, Eleanor Lee
          </footer>
        </div>

      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
