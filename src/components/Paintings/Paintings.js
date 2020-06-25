import React from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import PaintingSummary from './PaintingSummary';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    listStyle: 'none',
    margin: 0,
    padding: 0
  },
  paintingItem: {
    flex: `0 0 100%`,
    marginBottom: `${theme.spacing(4)}px`,
    [theme.breakpoints.up('sm')]: {
      flex: `0 0 calc(50% - ${theme.spacing(2)}px)`,
    }
  }
}));

const Paintings = ({ paintings }) => {
  const classes = useStyles();

  return (
    <ul className={classes.root}>
      {
        paintings.map((painting) => (
          <li key={painting.slug} className={classes.paintingItem}>
            <PaintingSummary painting={painting} />
          </li>
        ))
      }
    </ul>
  );
}

Paintings.propTypes = {
  paintings: PropTypes.array.isRequired
}

export default Paintings;
