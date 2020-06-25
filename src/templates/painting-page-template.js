import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { graphql, navigate } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/Seo'

import { Painting } from '../components/Paintings'


const useStyles = makeStyles((theme) => ({}));

const PaintingTemplate = ({ data, pageContext}) => {
  const classes = useStyles();
  const painting = data.strapiPaintings;

  return (
    <Layout>
      <SEO title={painting.title} />
      <Painting painting={painting} />
    </Layout>
  );
}

export const paintingPageTemplateQuery = graphql`
  query PaintingPageTemplate($slug: String!) {
    strapiPaintings(slug: { eq: $slug }) {
      slug
      created_at
      title
      media {
        localFile {
          childImageSharp {
            fluid(maxHeight: 600, quality: 100) {
              ...GatsbyImageSharpFluid
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
        }
      }
    }
  }
`

export default PaintingTemplate
