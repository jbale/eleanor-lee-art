/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'

import { ThemeProvider } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core/styles';

import Header from './Header'
import './layout.css'
import { Container, CssBaseline } from '@material-ui/core';
import { theme } from '../theme';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    minHeight: '100vh'
  },
  content: {
    paddingBottom: '5rem'
  },
  hero: {
    position: 'relative',
    height: 'calc(100vh - 240px)',
    marginBottom: '5rem'
  },
  footer: {
    height: '2.5rem',
    textAlign: 'center'
  }
});

const Layout = ({ hero, children }) => {
  const classes = useStyles();

  return (
    <>
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Helmet>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <main>
          {hero && (
            <section className={classes.hero}>
              {hero}
            </section>
          )}
          <Container maxWidth="lg" component="section">{children}</Container>
        </main>
        <footer className={classes.footer}>
          © {new Date().getFullYear()}, Eleanor Lee
        </footer>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
