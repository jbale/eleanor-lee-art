import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '2.5rem',
    textAlign: 'center'
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      © {new Date().getFullYear()}, Eleanor Lee
    </footer>
  )
}
export default Footer
