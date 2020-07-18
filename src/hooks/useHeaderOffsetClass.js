import React from 'react'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.nav.heightSm,
    [theme.breakpoints.up('md')]: {
      marginTop: theme.nav.height
    }
  }
}))

export default function useHeaderOffsetClass () {
  const classes = useStyles();
  return classes.root;
}
