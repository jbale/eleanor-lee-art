import React from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import PaintingSummary from './PaintingSummary';

const useStyles = makeStyles((theme) => ({
  paintingItem: {
    padding: `${theme.spacing(4)}px`
  }
}));

const Paintings = ({ paintings }) => {
  const classes = useStyles();

  return (
    <div className="square-grid">
      {
        paintings.map((painting) => (
          <div className={classes.paintingItem} key={painting.slug}>
            <PaintingSummary painting={painting} />
          </div>
        ))
      }
    </div>
  );
}

Paintings.propTypes = {
  paintings: PropTypes.array.isRequired
}

export default Paintings;
