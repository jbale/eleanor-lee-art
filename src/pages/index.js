import React from 'react'
import { graphql } from 'gatsby'

import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/custom-animations/scale-out-animation.css';
import 'react-awesome-slider/dist/styles.css';

import { Container } from "@material-ui/core"


import SEO from '../components/Seo'

const AutoplaySlider = withAutoplay(AwesomeSlider);

const IndexPage = ({ data }) => {

  const hero = (
    <AutoplaySlider
      animation="scaleOutAnimation"
      fillParent={true}
      play={true}
      cancelOnInteraction={false}
      interval={6000}>
      {data.strapiHome.slider.map((image) => (
        <div key={image.id} data-src={image.localFile.publicURL}></div>
      ))}
    </AutoplaySlider>
  );

  return (
    <Container maxWidth="lg" component="section">
      <SEO title="Home" />
      <h1>Hello</h1>
    </Container>
  );
}

export default IndexPage

export const pageQuery = graphql`
  query HomeQuery {
    strapiHome {
      slider {
        id
        localFile {
          publicURL
        }
      }
    }
  }
`;
