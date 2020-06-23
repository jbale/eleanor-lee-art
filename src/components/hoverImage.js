import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Img from 'gatsby-image'
import useHover from './../hooks/useHover';
import Fade from '@material-ui/core/Fade';


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    position: 'relative'
  },
  imageContainer: {
    height: '100%',
    width: '100%',
    position: 'absolute'
  },
  image: {
    height: '100%'
  }
}));

const HoverImage = ({ detail, overview }) => {

  const [hovering, attrs] = useHover();
  const classes = useStyles();

  return (
    <div {...attrs} className={classes.root}>
      <Fade in={hovering} timeout={1000}>
        <div className={`${classes.imageContainer}`}><Img className={classes.image} fadeIn={true} fluid={overview} /></div>
      </Fade>

      <Fade in={!hovering} timeout={1000}>
        <div className={classes.imageContainer}><Img className={classes.image} fadeIn={true} fluid={detail} /></div>
      </Fade>
    </div>
  )
}

export default HoverImage
