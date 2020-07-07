import React from 'react';
import { Typography, useScrollTrigger } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Logo from './Logo';
import Link from '../components/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    top: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(8),
    },
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
    display: 'WORK',
    partiallyActive: true
  },
  {
    to: '/news',
    display: 'NEWS',
    partiallyActive: true
  }
];

const contact = {
  to: '/contact',
  display: 'CONTACT',
  partiallyActive: true
};

const Nav = () => {
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true
  });
  const animateClass = !trigger ? 'animate__animated animate__fadeInDownMedium' : 'animate__animated animate__fadeOutUpMedium';

  return (
    <nav className={`${classes.root}`} >
      <Logo />
      <ul>
        {menu.map((menuItem, index) => (
          <li key={menuItem.to} className={animateClass} style={{animationDelay: `${index * 100}ms`}}>
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
