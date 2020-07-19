import React from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import useIsInViewport from 'use-is-in-viewport';
import { Link } from 'gatsby';
import Img from 'gatsby-image';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    resize: 'horizontal',
    width: '100%',
    height: '100%',
    '& > div:first-child': {
      display: 'none',
      position: 'relative',
      overflow:'hidden',
      background: theme.palette.grey[100],
      [theme.breakpoints.up('md')]: {
        display: 'block',
        flex: 'auto'
      }
    },
    '& > div:nth-child(2)': {
      width: '100%',
      flex: 'none',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      [theme.breakpoints.up('md')]: {
        maxWidth: `${theme.breakpoints.width('md') - 300}px`,
      },
      [theme.breakpoints.up('lg')]: {
        maxWidth: `${theme.breakpoints.width('md')}px`,
      },
      [theme.breakpoints.up('xl')]: {
        maxWidth: `${theme.breakpoints.width('lg')}px`,
      }
    },
    '& > div:last-child': {
      display: 'none',
      position: 'relative',
      overflow:'hidden',
      background: theme.palette.grey[100],
      [theme.breakpoints.up('md')]: {
        display: 'block',
        flex: 'auto'
      }
    }
  },
  showcase: {
    width: '80%',
    margin: `${theme.spacing(10)}px auto`,
    [theme.breakpoints.up('md')]: {
      width: '60%',
    }
  },
  nav: {
    position: 'absolute',
    top: '50%',
    filter: 'grayscale(100%)',
    opacity: 0.5,
    transition: 'all 1s',
    width: '100%',
    '&.left': {
      left: 0,
      transform: 'translate(-60%, -50%)',
      '&:hover': {
        transform: 'translate(-20%, -50%)'
      }
    },
    '&.right': {
      right: 0,
      transform: 'translate(60%, -50%)',
      '&:hover': {
        transform: 'translate(20%, -50%)'
      }
    },
    '&:hover': {
      cursor: 'pointer',
      opacity: 1,
      filter: 'unset',
    }
  }
}));

const PaintingsCarousel = ({ prevImage, prevLink, currentImage, nextImage, nextLink }) => {
  const classes = useStyles();

  const [prevNavIsInViewport, prevShowcaseRef] = useIsInViewport({
    threshold: 90
  });

  const [showcaseIsInViewport, showcaseRef] = useIsInViewport({
    threshold: 50
  });

  const [nextNavIsInViewport, nextShowcaseRef] = useIsInViewport({
    threshold: 90
  });

  const prevNavAnimateClass = prevNavIsInViewport ? 'animate__animated animate__fadeIn' : 'animate__animated animate__fadeOut';
  const nextNavAnimateClass = nextNavIsInViewport ? 'animate__animated animate__fadeIn' : 'animate__animated animate__fadeOut';
  const showcaseAnimateClass = showcaseIsInViewport ? 'animate__animated animate__fadeIn' : 'animate__animated animate__fadeOut';

  const imageStyle = {
    objectFit: 'contain',
    objectPosition: '50% 50%',
  };

  return (
    <div className={`${classes.root}`}>
      <div ref={prevShowcaseRef} className={prevNavAnimateClass}>
        <Link className={`${classes.nav} left`} to={prevLink}>
          <Img fluid={prevImage} imgStyle={imageStyle} />
        </Link>
      </div>
      <div ref={showcaseRef} className={showcaseAnimateClass}>
        <Img className={classes.showcase} fluid={currentImage} imgStyle={imageStyle} />
      </div>
      <div ref={nextShowcaseRef} className={nextNavAnimateClass}>
        <Link className={`${classes.nav} right`} to={nextLink}>
          <Img fluid={nextImage} imgStyle={imageStyle} />
        </Link>
      </div>
    </div>
  );
}

PaintingsCarousel.propTypes = {
  prevImage: PropTypes.object.isRequired,
  prevLink: PropTypes.string.isRequired,
  currentImage: PropTypes.string.isRequired,
  nextImage: PropTypes.string.isRequired,
  nextLink: PropTypes.string.isRequired
}

export default PaintingsCarousel;
