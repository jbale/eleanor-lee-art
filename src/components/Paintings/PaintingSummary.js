import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles';

import HoverImage from '../HoverImage'
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& *': {
      color: theme.palette.getContrastText('#000')
    }
  },
  paintingImage: {
    position: 'relative',
    height: '400px',
    [theme.breakpoints.up('md')]: {
      height: '568px',
    }
  },
  paintingTitle: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    background: `linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)`,
    '& h2': {
      margin: '1rem'
    }
  }
}));

const PaintingSummary = ({ painting }) => {
  const classes = useStyles();

  return (
    <Link className={classes.root} to={`/portfolio/${painting.slug}`}>
      <div className={classes.paintingImage}>
        <HoverImage detail={painting.detail.localFile.childImageSharp.fluid} overview={painting.overview.localFile.childImageSharp.fluid} />
        <div className={classes.paintingTitle}>
          <Typography variant="h4" component="h2">{painting.title}</Typography>
        </div>
      </div>
    </Link>
  );
}

PaintingSummary.propTypes = {
  painting: PropTypes.shape({
    title: PropTypes.string.isRequired,
    detail: PropTypes.object.isRequired,
    overview: PropTypes.object.isRequired
  })
}

export default PaintingSummary;
