import React from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import HoverImage from './../HoverImage'

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import useContainerWidth from '../../hooks/useContainerWidth';

const useStyles = makeStyles((theme) => ({
  gridList: {
    paddingBottom: '2rem'
  },
  title: {
    color: theme.palette.text.primary.dark,
  },
  titleBar: {
    background: `linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)`
  }
}));

const Paintings = ({ paintings }) => {
  const classes = useStyles();
  const [containerRef, containerWidth] = useContainerWidth();

  const cols = containerWidth > 580 ? 2 : 1;
  const cellHeight = containerWidth > 580 ? containerWidth/2 : containerWidth

  return (
    <div ref={containerRef}>
      <GridList className={classes.gridList} cellHeight={cellHeight} cols={cols} spacing={20}>
        {paintings.map(({ node: painting }) => (
          <GridListTile key={painting.id} cols={1} >
            <HoverImage detail={painting.detail.localFile.childImageSharp.fluid} overview={painting.overview.localFile.childImageSharp.fluid} />
            <GridListTileBar
              titlePosition="top"
              title={painting.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

Paintings.propTypes = {
  paintings: PropTypes.array.isRequired
}

export default Paintings;
