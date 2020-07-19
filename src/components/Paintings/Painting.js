import React from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';
import Img from 'gatsby-image';
import TextBlock from '../TextBlock';
import DimentionsImage from '../DimentionsImage';
import useIsInViewport from 'use-is-in-viewport';

const useStyles = makeStyles((theme) => ({
  aboutSection: {
    marginTop: theme.spacing(20),
    marginBottom: theme.spacing(20),
    textAlign: 'center'
  },
  closeUpsGrid: {
    gridTemplateColumns: 'repeat(auto-fill, minmax(50%, 1fr))',
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: 'repeat(auto-fill, minmax(25%, 1fr))',
    }
  },
  specSection: {
    height: '100vh',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

const Painting = ({ painting }) => {
  const classes = useStyles();

  const [aboutSectionIsInViewport, aboutSectionRef] = useIsInViewport({
    threshold: 60
  });

  const [closeUpsIsInViewport, closeUpsRef] = useIsInViewport({
    modTop: '100%',
    threshold: 60
  });

  const [detailsIsInViewport, detailsRef] = useIsInViewport({
    threshold: 50
  });

  const aboutAnimateClass = aboutSectionIsInViewport ? 'animate__animated animate__fadeIn' : 'animate__animated animate__fadeOut';
  const closeUpAnimateClass = closeUpsIsInViewport ? 'animate__animated animate__fadeIn' : 'animate__animated animate__fadeOut';
  const detailsAnimateClass = detailsIsInViewport ? 'animate__animated animate__fadeIn' : 'animate__animated animate__fadeOut';

  return (
    <>
      <Container maxWidth="sm" component="div" className={`${classes.aboutSection} ${aboutAnimateClass}`} ref={aboutSectionRef}>
        <TextBlock subtitle={painting.medium} title={painting.title} body={painting.description}></TextBlock>
      </Container>
      <div className={`${classes.closeUpsGrid} square-grid`} ref={closeUpsRef}>
        {
          painting.media.map((media, index) => (
            <div key={media.localFile.childImageSharp.fluid.src} className={closeUpAnimateClass} style={{ animationDuration: '2s',  animationDelay: `${index*0.1}s`}}>
              <Img fluid={media.localFile.childImageSharp.fluid} style={{height: '100%', width: '100%'}} />
            </div>
          ))
        }
      </div>
      <Container maxWidth="lg" component="div" className={`${classes.specSection} ${detailsAnimateClass}`} ref={detailsRef}>
        <Typography></Typography>
        <DimentionsImage image={painting.showcase.localFile.childImageSharp.fluid} x={painting.width} y={painting.height} />
      </Container>
    </>
  )
}

Painting.propTypes = {
  painting: PropTypes.shape({
    title: PropTypes.string.isRequired,
    media: PropTypes.array.isRequired
  })
}

export default Painting;
