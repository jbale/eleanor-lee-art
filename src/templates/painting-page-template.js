import React from 'react'
import { graphql } from 'gatsby'
import { Painting } from '../components/Paintings'
import ScrollDownIcon from '../components/ScrollDownIcon';
import PaintingsCarousel from '../components/Paintings/PaintingsCarousel';


const PaintingTemplate = ({ data }) => {
  const painting = data.current;
  const prev = data.prev;
  const next = data.next;

  return (
    <>
      <section>
        <PaintingsCarousel
          prevLink={`/work/${prev.slug}`}
          prevImage={prev.showcase.localFile.childImageSharp.fluid}
          currentImage={painting.showcase.localFile.childImageSharp.fluid}
          nextLink={`/work/${next.slug}`}
          nextImage={next.showcase.localFile.childImageSharp.fluid}
        />
      </section>
      <section>
        <Painting painting={painting} />
      </section>
      <div style={{ position: 'absolute', bottom: '19px', left: '50%', transform: 'translate(-50%)' }}>
        <ScrollDownIcon />
      </div>
    </>
  );
}

export const paintingPageTemplateQuery = graphql`
  query PaintingPageTemplate($current: String!, $next: String!, $prev: String!) {
    current: strapiPaintings(slug: { eq: $current }) {
      slug
      created_at
      title
      width
      height
      medium
      description
      showcase {
        localFile {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
        }
      }
      media {
        localFile {
          childImageSharp {
            fluid(maxWidth: 4096, quality: 100) {
              ...GatsbyImageSharpFluid
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
        }
      }
    }
    prev: strapiPaintings(slug: { eq: $prev }) {
      slug
      showcase {
        localFile {
          childImageSharp {
            fluid(maxWidth: 600, quality: 100) {
              ...GatsbyImageSharpFluid
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
        }
      }
    }
    next: strapiPaintings(slug: { eq: $next }) {
      slug
      showcase {
        localFile {
          childImageSharp {
            fluid(maxWidth: 600, quality: 100) {
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
