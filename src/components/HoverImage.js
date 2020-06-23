import React from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Img from 'gatsby-image'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    position: 'relative',
    '& > div': {
      transition: 'opacity 1000ms ease-in-out',
    },
    '&:hover > div:first-child': {
      opacity: 1
    },
    '&:hover > div:last-child': {
      opacity: 0
    }
  },
  imageContainer: {
    height: '100%',
    width: '100%',
    position: 'absolute'
  },
  image: {
    height: '100%',
    width: '100%'
  }
}));

const HoverImage = ({ detail, overview }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.imageContainer}><Img className={classes.image} fadeIn={true} fluid={overview} /></div>
      <div className={classes.imageContainer}><Img className={classes.image} fadeIn={true} fluid={detail} /></div>
    </div>
  )
}

HoverImage.propTypes = {
  detail: PropTypes.object.isRequired,
  overview: PropTypes.object.isRequired
}

export default HoverImage
