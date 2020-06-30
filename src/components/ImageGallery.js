import React from "react"
import Img from "gatsby-image/withIEPolyfill"
import ReactImageGallery from 'react-image-gallery';
import { IconButton, Box } from "@material-ui/core";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Fullscreen from '@material-ui/icons/Fullscreen';
import FullscreenExit from '@material-ui/icons/FullscreenExit';
import { makeStyles } from "@material-ui/styles";
import PropTypes from 'prop-types';
import useMouseActive from "../hooks/useMouseActive";
import { withDarkTheme } from "../theme";

const navBase = {
  position: 'absolute',
  zIndex: 4,
  transition: '0.5s'
}

const useStyles = makeStyles((theme) => ({
  root: {
    '& .image-gallery-slide-wrapper': {
      overflow: 'hidden'
    },
    '& .image-gallery-content.fullscreen': {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      '& .gatsby-image-wrapper': {
        height: '100vh',
        width: '100vw',
        margin: 'auto'
      },
      '& .image-gallery-thumbnails-wrapper.bottom': {
        position: 'absolute',
        bottom: '-120px',
        transition: '1s'
      }
    },
    '&.mouse-active': {
      '& .image-gallery-content.fullscreen': {
        '& .image-gallery-thumbnails-wrapper.bottom': {
          bottom: 0,
        }
      }
    }
  },
  leftNav: {
    ...navBase,
    left: theme.spacing(2),
    top: '50%',
    transform: 'translateY(-50%)',
    '&.hidden': {
      transform: 'translate(-100%, -50%)'
    }
  },
  rightNav: {
    ...navBase,
    right: theme.spacing(2),
    top: '50%',
    transform: 'translateY(-50%)',
    '&.hidden': {
      transform: 'translate(100%, -50%)'
    }
  },
  fullscreenNav: {
    ...navBase,
    right: theme.spacing(2),
    bottom: theme.spacing(2),
    '&.hidden': {
      transform: 'scale(0)'
    }
  },
  icon: {
    filter: 'drop-shadow(0 2px 2px #1a1a1a)'
  }
}));

const ImageGallery = ({images}) => {

  const mouseActive = useMouseActive();
  const classes = useStyles();
  const [isFullscreen, setIsFullscreen] = React.useState(false);

  const items = images.map(image => ({
    original: image.original,
    thumbnail: image.thumbnail,
    elGallery: image.gallery,
    elFullscreen: image.fullscreen,
  }))

  const renderLeftNav = (onClick, disabled) => {
    return (
      <div className={`${classes.leftNav} ${mouseActive ? '' : 'hidden'}`}>
        <IconButton aria-label="previous" disabled={disabled} onClick={onClick} size="medium">
          <ChevronLeftIcon className={classes.icon} fontSize="large" />
        </IconButton>
      </div>
    )
  }

  const renderRightNav = (onClick, disabled) => {
    return (
      <div className={`${classes.rightNav} ${mouseActive ? '' : 'hidden'}`}>
        <IconButton aria-label="next" disabled={disabled} onClick={onClick} size="medium">
          <ChevronRight className={classes.icon} fontSize="large" />
        </IconButton>
      </div>
    )
  }

  const renderFullscreenButton = (onClick, isFullscreen) => {
    return (
      <div className={`${classes.fullscreenNav} ${mouseActive ? '' : 'hidden'}`}>
        <IconButton aria-label="fullscreen" onClick={onClick} size="medium">
          { isFullscreen ? <FullscreenExit className={classes.icon} fontSize="large" /> : <Fullscreen className={classes.icon} fontSize="large" /> }
        </IconButton>
      </div>
    )
  }

  const renderImage = (item) => {
    return (
      <div>
        {
          isFullscreen ?
            <Img fluid={item.elFullscreen} objectFit="contain" /> :
            <Img fluid={item.elGallery} objectFit="contain" backgroundColor="#fafafa" />
        }
      </div>
    );
  }

  const onScreenChange = (fullscreen) => {
    setIsFullscreen(fullscreen)
  }

  return (
    <div className={`${classes.root} ${mouseActive ? 'mouse-active' : ''}`}>
      <ReactImageGallery
        items={items}
        showPlayButton={false}
        renderItem={renderImage}
        renderLeftNav={renderLeftNav}
        renderRightNav={renderRightNav}
        renderFullscreenButton={renderFullscreenButton}
        onScreenChange={onScreenChange}
        />
    </div>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      original: PropTypes.string,
      thumbnail: PropTypes.string,
      fullscreen: PropTypes.object,
      gallery: PropTypes.object
    })
  )
}

export default withDarkTheme(ImageGallery)
