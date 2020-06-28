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
      [theme.breakpoints.up('sm')]: {
        flex: `0 0 calc(50% - ${theme.spacing(2)})`,
      },
      '&:last-child': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }
    }
  }
}));

const PaintingSummary = ({ painting }) => {
  const classes = useStyles();

  return (
      <div className={classes.root}>
        <div>
          <ImageGallery images={painting.media} />
        </div>
        <div>
          <Typography variant="h1">{painting.title}</Typography>
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
