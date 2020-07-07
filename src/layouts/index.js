/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'

import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

import './layout.css'
import { theme } from '../theme';
import { LayoutContextProviderComponent } from '../contexts/LayoutContext';
import Nav from './Nav';
import Footer from './Footer';

const Layout = ({ children }) => {

  return (
    <>
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Helmet>
      <ThemeProvider theme={theme}>
        <LayoutContextProviderComponent>
          <CssBaseline />
          <Nav />
          <main style={{ marginTop: theme.nav.height}}>
            {children}
          </main>
          <Footer />
        </LayoutContextProviderComponent>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
