import React from 'react'
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

const TextBlock = ({ overtext, title, body }) => {
  return (
    <>
      <Typography variant="overline" display="block" gutterBottom>
        {overtext}
      </Typography>
      <Typography variant="h3" gutterBottom>{title}</Typography>
      <Typography variant="body1">{body}</Typography>
    </>
  );
}

TextBlock.propTypes = {
  overtext: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
}

export default TextBlock
