import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Logo from './Logo';
import Link from '../components/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(8),
    '& ul': {
      display: 'flex',
      '& li': {
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4)
      }
    }
  }
}));

const menu = [
  {
    to: '/',
    display: 'INTRO',
    partiallyActive: false
  },
  {
    to: '/work',
    display: 'Work',
    partiallyActive: true
  },
  {
    to: '/news',
    display: 'News',
    partiallyActive: true
  }
];

const contact = {
  to: '/contact',
  display: 'Contact',
  partiallyActive: true
};

const Nav = () => {
  const classes = useStyles();

  return (
    <nav className={classes.root}>
      <Logo />
      <ul>
        {menu.map((menuItem) => (
          <li key={menuItem.to}>
            <Link to={menuItem.to} activeStyle={{ textDecoration: 'underline' }} partiallyActive={menuItem.partiallyActive}>
              <Typography variant="button">
                {menuItem.display}
              </Typography>
            </Link>
          </li>
        ))}
      </ul>
      <Link to={contact.to} activeStyle={{ textDecoration: 'underline' }} partiallyActive={contact.partiallyActive}>
        <Typography variant="button">
          {contact.display}
        </Typography>
      </Link>
    </nav>
  )
}

export default Nav;
