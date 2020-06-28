import React from "react"
import Img from "gatsby-image"
import ReactImageGallery from 'react-image-gallery';
import { Fab } from "@material-ui/core";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import { makeStyles } from "@material-ui/styles";
import { LANDSCAPE_ASPECT_RATIO } from './../constants';
import useMouseActive from "../hooks/useMouseActive";

const useStyles = makeStyles((theme) => ({
  root: {
    '& .image-gallery-content.fullscreen': {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      '& .image-gallery-thumbnails-wrapper.bottom': {
        position: 'absolute',
        bottom: '-100px',
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

  const items = images.map(image => ({
    original: image.localFile.childImageSharp.fluid.src,
    thumbnail: image.localFile.childImageSharp.thumbnail.src,
    image: image.localFile.childImageSharp
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
        <Img fluid={item.image.fluid} sizes={{ ...item.image.fluid, aspectRatio: LANDSCAPE_ASPECT_RATIO }}  />
      </div>
    );
  }

  return (
    <div className={`${classes.root} ${mouseActive ? 'mouse-active' : ''}`}>
      <ReactImageGallery
        items={items}
        showPlayButton={false}
        renderItem={renderImage}
        renderLeftNav={renderLeftNav}
        renderRightNav={renderRightNav}
        />
    </div>
  );
}

export default ImageGallery
