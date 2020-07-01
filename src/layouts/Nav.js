import React from 'react';
import { Link } from 'gatsby';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
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
    color: theme.palette.getContrastText('#fff'),
    textDecoration: 'none',
    textDecorationColor: 'black',
    '&:hover': {
      textDecoration: 'underline'
    }
  }
}));

const menu = [
  {
    to: '/',
    display: 'Home',
    partiallyActive: false
  },
  {
    to: '/news',
    display: 'News',
    partiallyActive: true
  },
  {
    to: '/portfolio',
    display: 'Portfolio',
    partiallyActive: true
  },
  {
    to: '/about',
    display: 'About',
    partiallyActive: true
  },
  {
    to: '/contact',
    display: 'Contact',
    partiallyActive: true
  }
]

const Nav = () => {
  const classes = useStyles();

  return (
    <nav>
      <ul className={classes.root}>
        {menu.map((menuItem) => (
          <li key={menuItem.to} className={classes.navItem}>
            <Link to={menuItem.to} className={classes.navLink} activeStyle={{ textDecoration: 'underline' }} partiallyActive={menuItem.partiallyActive}>
              <Typography variant="button">
                {menuItem.display}
              </Typography>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav;
