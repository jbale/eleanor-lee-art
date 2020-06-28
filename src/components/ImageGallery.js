import React from "react"
import Img from "gatsby-image/withIEPolyfill"
import ReactImageGallery from 'react-image-gallery';
import { Fab } from "@material-ui/core";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import { makeStyles } from "@material-ui/styles";
import PropTypes from 'prop-types';
import useMouseActive from "../hooks/useMouseActive";

const useStyles = makeStyles((theme) => ({
  root: {
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
    position: 'absolute',
    left: theme.spacing(2),
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 4
  },
  rightNav: {
    position: 'absolute',
    right: theme.spacing(2),
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 4
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
      <div className={classes.leftNav}>
        <Fab aria-label="previous" disabled={disabled} onClick={onClick} size="small">
          <ChevronLeftIcon />
        </Fab>
      </div>
    )
  }

  const renderRightNav = (onClick, disabled) => {
    return (
      <div className={classes.rightNav}>
        <Fab aria-label="next" disabled={disabled} onClick={onClick} size="small">
          <ChevronRight />
        </Fab>
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

export default ImageGallery
