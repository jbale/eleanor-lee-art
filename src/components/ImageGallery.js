import React from "react"
import Img from "gatsby-image"
import ReactImageGallery from 'react-image-gallery';
import { Fab } from "@material-ui/core";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
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

  const classes = useStyles();

  const items = images.map(image => ({
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
        <Fab  aria-label="next" disabled={disabled} onClick={onClick} size="small">
          <ChevronRight />
        </Fab>
      </div>
    )
  }

  const renderImage = (item) => {
    return (
      <div>
        <Img fluid={item.image.fluid} sizes={{ ...item.image.fluid, aspectRatio: 3 / 2 }} />
      </div>
    );
  }

  return (
    <>
      <ReactImageGallery
        items={items}
        showPlayButton={false}
        autoPlay={true}
        renderItem={renderImage}
        renderLeftNav={renderLeftNav}
        renderRightNav={renderRightNav}
        />
    </>
  );
}

export default ImageGallery
