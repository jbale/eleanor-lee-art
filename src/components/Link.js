import React from 'react';
import { Link as GastsbyLink } from "gatsby"
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.text.primary,
    textDecoration: 'none',
    textDecorationColor: theme.palette.text.primary,
    '&:hover': {
      textDecoration: 'underline'
    }
  }
}));

const Link = (props) => {
  const classes = useStyles();
  return <GastsbyLink className={classes.root} {...props}></GastsbyLink>
}

export default Link;
