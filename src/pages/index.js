import React from 'react'
import { graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import { Container, Typography, makeStyles } from "@material-ui/core"

import SEO from '../components/Seo'
import TextBlock from '../components/TextBlock'
import ScrollDownIcon from '../components/ScrollDownIcon'
import Img from 'gatsby-image';
import useIsInViewport from 'use-is-in-viewport';

const useStyles = makeStyles((theme) => ({
  root: {},
  header: {
    textAlign: 'center',
    marginBottom: `${theme.spacing(15)}px`,
    '& h1': {
      fontWeight: theme.typography.fontWeightMedium
    },
    '& h2': {
      fontWeight: theme.typography.fontWeightLight,
      fontSize: theme.typography.h4.fontSize
    }
  },
  showcase:{
    margin: 'auto',
    boxShadow: theme.shadows[10]
  },
  aboutMeSection: {
    position: 'relative',
    marginTop: '-25vh',
    zIndex: -1,
    '&.animate__fadeIn': {
      animationDelay: '0.2s'
    }
  },
  aboutMe: {
    textAlign: 'center'
  }
}));

const IndexPage = ({ data }) => {
  const classes = useStyles();
  const {title, subtitle, showcase, about, featureImage} = data.strapiHome;

  const [headerIsInViewport, headerRef] = useIsInViewport({
    threshold: 50,
    modTop: '-200px'
  });

  const [showcaseIsInViewport, showcaseRef] = useIsInViewport({
    threshold: 100,
    modTop: '-50px',
    modBottom: '100%'
  });

  const [aboutIsInViewport, aboutRef] = useIsInViewport({
    threshold: 20,
    modTop: '-40%'
  });

  const [aboutTextIsInViewport, aboutTextRef] = useIsInViewport({
    threshold: 80
  });

  const [featureImageIsInViewport, featureImageRef] = useIsInViewport({
    threshold: 50
  });

  const headerAnimateClass = headerIsInViewport ? 'animate__animated animate__fadeIn' : 'animate__animated animate__fadeOut';
  const imgAnimateClass = showcaseIsInViewport ? 'animate__animated animate__fadeIn' : 'animate__animated animate__fadeOut';
  const aboutAnimateClass = aboutIsInViewport ? 'animate__animated animate__fadeIn' : 'animate__animated animate__fadeOut';
  const aboutTextAnimateClass = aboutTextIsInViewport ? 'animate__animated animate__fadeIn' : 'animate__animated animate__fadeOut';
  const featureImageAnimateClass = featureImageIsInViewport ? 'animate__animated animate__fadeIn' : 'animate__animated animate__fadeOut';

  return (
    <>
      <Container maxWidth="lg" component="section" className={classes.root}>
        <SEO title="Home" />
        <header className={`${classes.header} ${headerAnimateClass}`} ref={headerRef}>
          <Typography variant="h1">{title.toUpperCase()}</Typography>
          <Typography variant="h2">{subtitle.toUpperCase()}</Typography>
        </header>
        <div ref={showcaseRef}>
          <Img className={`${classes.showcase} ${imgAnimateClass}`} fluid={showcase.localFile.childImageSharp.fluid}  />
        </div>
        <div style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}>
          <ScrollDownIcon />
        </div>
      </Container>
      <section className={`${classes.aboutMeSection} ${aboutAnimateClass}`} ref={aboutRef}>
        <BackgroundImage  Tag="div" fluid={data.cornwallImage.childImageSharp.fluid} style={{
          minHeight: '100vh',
          backgroundPosition: 'top right',
          backgroundSize: 'auto 100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Container maxWidth="md" component="div" className={`${classes.aboutMe} ${aboutTextAnimateClass}`} ref={aboutTextRef}>
            <TextBlock overtext={about.overtext} title={about.title} body={about.body}></TextBlock>
          </Container>
        </BackgroundImage>
      </section>
      <section className={featureImageAnimateClass} ref={featureImageRef}>
        <BackgroundImage Tag="div" fluid={featureImage.localFile.childImageSharp.fluid} style={{ minHeight: '75vh' }}></BackgroundImage>
      </section>

    </>
  );
}

export default IndexPage

export const pageQuery = graphql`
  query HomeQuery {
    strapiHome {
      title
      subtitle
      about {
        overtext
        title
        body
      }
      featureImage {
        localFile {
          childImageSharp {
            fluid(maxWidth: 3000, quality: 100) {
              ...GatsbyImageSharpFluid
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
        }
      }
      showcase {
        localFile {
          childImageSharp {
            fluid(maxWidth: 700, quality: 100) {
              ...GatsbyImageSharpFluid
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
        }
      }
    }
    cornwallImage: file(relativePath: { eq: "cornwall.png" }) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
