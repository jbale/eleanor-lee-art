import React from 'react'
import { makeStyles, useScrollTrigger } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    width: '26px',
    height: '42px',
    border: `2px solid ${theme.palette.text.primary}`,
    borderRadius: '24px',
    '& > div:first-child': {
      content: '',
      position: 'absolute',
      top: '5px',
      left: '50%',
      marginLeft: '-2px',
      backgroundColor: theme.palette.text.primary,
      borderRadius:' 100%',
      width: '4px',
      height: '4px',
      opacity: 1,
      transform: 'translateY(0px) scaleY(1) scaleX(1) translateZ(0px)',
      animation: 'scroll 1.5s -1s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite'
    }
  }
}));

const ScrollDownIcon = () => {
  const classes = useStyles();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  const animateClass = !trigger ? 'animate__animated animate__fadeInDown' : 'animate__animated animate__fadeOutUp';

  return (
    <div className={`${classes.root} ${animateClass}`}>
      <div></div>
    </div>
  )

};

export default ScrollDownIcon;
