import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  header: {
    paddingTop: '1rem',
    paddingBottom: '1rem'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  siteTitle: {
    textAlign: 'center',
    fontWeight: 100,
    marginBottom: 0
  },
  siteSubtitle: {
    textAlign: 'center',
    fontWeight: 100,
    marginTop: 0
  },
  siteTitleLink: {
    textDecoration: 'none'
  },
  siteLogo: {
    width: '100px'
  },
  nav: {
    display: 'flex',
    margin: 0,
    padding: 0
  },
  navItem: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    paddingLeft: '1rem',
    paddingRight: '1rem'
  },
  navLink: {
    textDecoration: 'none',
    textDecorationColor: 'black',
    '&:hover': {
      textDecoration: 'underline'
    }
  }
});

const menu = [
  {
    to: '/',
    display: 'Home'
  },
  {
    to: '/news',
    display: 'News'
  },
  {
    to: '/portfolio',
    display: 'Portfolio'
  },
  {
    to: '/about',
    display: 'About'
  },
  {
    to: '/contact',
    display: 'Contact'
  }
]

const Header = ({ title, subtitle, logo }) => {

  const classes = useStyles();

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Link className={classes.siteTitleLink} to="/">
          <Img className={classes.siteLogo} fixed={logo} alt="logo" />
        </Link>
        <h1 className={classes.siteTitle}>
          <Link className={classes.siteTitleLink} to="/">
            <Box color="text.primary">{title}</Box>
          </Link>
        </h1>
        <h4 className={classes.siteSubtitle}>
          <Link className={classes.siteTitleLink} to="/">
            <Box color="text.primary">{subtitle}</Box>
          </Link>
        </h4>
        <nav>
          <ul className={classes.nav}>
            {menu.map((menuItem) => (
              <li key={menuItem.to} className={classes.navItem}>
                <Link to={menuItem.to} className={classes.navLink} activeStyle={{ textDecoration: 'underline' }}>
                  <Box color="text.primary">{menuItem.display}</Box>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  logo: PropTypes.object,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
