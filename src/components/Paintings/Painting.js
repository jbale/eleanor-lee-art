import React from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {

  }
}));

const PaintingSummary = ({ painting }) => {
  const classes = useStyles();

  return (
      <div className={classes.root}>
        <h1>{painting.title}</h1>
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
