import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles';

import HoverImage from '../HoverImage'
import { Typography, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    textDecoration: 'none',
    '& *': {
      color: theme.palette.text.primary,
    }
  },
  paintingImage: {
    borderRadius: '4px',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    overflow: 'hidden'
  },
  paintingTitle: {
    padding: theme.spacing(1),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
}));

const PaintingSummary = ({ painting }) => {
  const classes = useStyles();

  return (
    <Link className={classes.root} to={`/work/${painting.slug}`}>
      <div className={classes.paintingImage}>
        <HoverImage detail={painting.detail.localFile.childImageSharp.fluid} overview={painting.overview.localFile.childImageSharp.fluid} />
        <div className={classes.paintingTitle} >
          <Typography variant="subtitle2">{painting.title}</Typography>
          <Typography variant="caption">{painting.width} x {painting.height} CM</Typography>
        </div>
      </div>
    </Link>
  );
}

PaintingSummary.propTypes = {
  painting: PropTypes.shape({
    title: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    detail: PropTypes.object.isRequired,
    overview: PropTypes.object.isRequired
  })
}

export default PaintingSummary;
