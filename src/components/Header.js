import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';

import Logo from './Logo';
import Nav from './Nav';

const useStyles = makeStyles((theme) => ({
  header: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    marginBottom: theme.spacing(10)
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoContainer: {
    marginBottom: theme.spacing(4)
  }
}));

const Header = ({ title, subtitle, logo }) => {

  const classes = useStyles();

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <div className={classes.logoContainer}>
          <Logo  />
        </div>
        <Nav />
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
