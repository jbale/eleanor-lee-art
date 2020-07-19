import React from 'react'
import { makeStyles, Typography } from '@material-ui/core';
import Img from 'gatsby-image';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '75px auto',
    gridTemplateRows: 'auto 50px',
    paddingRight: '75px',
    '& > div:first-child': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      '& > div:not(:nth-child(2))': {
        flex: 1,
        position: 'relative',
        borderLeft: `1px solid ${theme.palette.grey[400]}`
      },
      '& > div:first-child > div': {
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translate(calc(-50% - 1px))',
        width: 0,
        height: 0,
        borderLeft: '5px solid transparent',
        borderRight: '5px solid transparent',
        borderBottom: `5px solid ${theme.palette.grey[400]}`
      },
      '& > div:last-child > div': {
        position: 'absolute',
        bottom: 0,
        left: '50%',
        transform: 'translate(calc(-50% - 1px))',
        width: 0,
        height: 0,
        borderLeft: '5px solid transparent',
        borderRight: '5px solid transparent',
        borderTop: `5px solid ${theme.palette.grey[400]}`
      }
    },
    '& > div:last-child': {
      gridColumnStart: 2,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '& > div:not(:nth-child(2))': {
        flex: 1,
        borderTop: `1px solid ${theme.palette.grey[400]}`,
        position: 'relative'
      },
      '& > div:first-child > div': {
        position: 'absolute',
        left: 0,
        top: '50%',
        transform: 'translateY(calc(-50% - 1px))',
        width: 0,
        height: 0,
        borderTop: '5px solid transparent',
        borderBottom: '5px solid transparent',
        borderRight: `5px solid ${theme.palette.grey[400]}`
      },
      '& > div:last-child > div': {
        position: 'absolute',
        top: 0,
        right: 0,
        transform: 'translateY(calc(-50% - 1px))',
        width: 0,
        height: 0,
        borderTop: '5px solid transparent',
        borderBottom: '5px solid transparent',
        borderLeft: `5px solid ${theme.palette.grey[400]}`
      }
    }
  }
}));

const DimentionsImage = ({image, x, y}) => {

  console.log(image);
  const classes = useStyles();

  return (
    <div className={classes.root} style={{maxWidth: image.maxWidth, width: '100%'}}>
      <div>
        <div>
          <div></div>
        </div>
        <div style={{paddingTop: '10px', paddingBottom: '10px'}}>
          <Typography variant="caption">{x} CM</Typography>
        </div>
        <div>
          <div></div>
        </div>
      </div>
      <div>
        <Img fluid={image} style={{height: '100%', width: '100%'}} />
      </div>
      <div>
        <div>
          <div></div>
        </div>
        <div style={{paddingLeft: '10px', paddingRight: '10px'}}>
          <Typography variant="caption">{y} CM</Typography>
        </div>
        <div>
          <div></div>
        </div>
      </div>
    </div>
  )
}
export default DimentionsImage
