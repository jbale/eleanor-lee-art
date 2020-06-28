import React from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import ImageGallery from '../ImageGallery';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    '& > div': {
      flex: `0 0 100%`,
      marginBottom: `${theme.spacing(4)}`,
      [theme.breakpoints.up('md')]: {
        marginBottom: 0,
        flex: `0 0 calc(50% - ${theme.spacing(5)})`,
      },
      '&:last-child': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: '90px',
        [theme.breakpoints.up('md')]: {
          paddingLeft: theme.spacing(20),
          paddingRight: theme.spacing(20),
        }
      }
    }
  }
}));

const PaintingSummary = ({ painting }) => {
  const classes = useStyles();

  const images = painting.media.map(m => ({
    original: m.localFile.childImageSharp.original.src,
    thumbnail: m.localFile.childImageSharp.thumbnail.src,
    fullscreen: m.localFile.childImageSharp.original,
    gallery: m.localFile.childImageSharp.square
  }));

  return (
      <div className={classes.root}>
        <div>
          <ImageGallery images={images} />
        </div>
        <div>
          <Typography variant="h4" component="h1">{painting.title}</Typography>
          <Typography variant="overline">120 x 160 CM</Typography>
          <br />
          <Typography variant="subtitle1">Original oil on canvas in white wood frame.</Typography>
          <br />
          <Typography variant="body1">Rock beach is just around the corner from the studio, you can travel the world but some of the most picturesque scenes are right on your doorstep. Painted in Cornwall </Typography>
        </div>
      </div>
  );
}

PaintingSummary.propTypes = {
  painting: PropTypes.shape({
    title: PropTypes.string.isRequired,
    media: PropTypes.array.isRequired
  })
}

export default PaintingSummary;
