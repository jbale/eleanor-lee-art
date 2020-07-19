/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(
    `{
        all: allStrapiPaintings(
          sort: {fields: [created_at], order: DESC},
          limit: 1000
        ) {
          edges {
            node {
              slug
              created_at
              title
              sold
            }
          }
        }
        avaliable: allStrapiPaintings(sort: {fields: [created_at], order: DESC}, limit: 1000, filter: {sold: {eq: false}}) {
          edges {
            node {
              slug
              created_at
              title
              sold
            }
          }
        }
    }`
  )

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Create portfolio-list pages
  const paintings = result.data.all.edges
  const paintingsPerPage = 20
  const numPages = Math.ceil(paintings.length / paintingsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/work` : `/work/${i + 1}`,
      component: path.resolve("./src/templates/portfolio-page-template.js"),
      context: {
        filter: {},
        activeFilter: 'all',
        limit: paintingsPerPage,
        skip: i * paintingsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  });

  const avaliablePaintings = result.data.all.edges
  const avaliablePaintingsPerPage = 20
  const avaliableNumPages = Math.ceil(avaliablePaintings.length / avaliablePaintingsPerPage);
  Array.from({ length: avaliableNumPages > 0 ? avaliableNumPages : 1}).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/work/avaliable` : `/work/avaliable/${i + 1}`,
      component: path.resolve("./src/templates/portfolio-page-template.js"),
      context: {
        filter: {
          sold: { eq: false }
        },
        activeFilter: 'avaliable',
        limit: paintingsPerPage,
        skip: i * paintingsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  });

  // Create pages for each painting.
  paintings.forEach(({ node }, index) => {
    const previousPaintingIndex = ((paintings.length - 1) + index) % paintings.length;
    const nextPaintingIndex = ((paintings.length + 1) + index) % paintings.length
    const prev = paintings[previousPaintingIndex];
    const next = paintings[nextPaintingIndex];

    createPage({
      path: `work/${node.slug}`,
      component: path.resolve(`src/templates/painting-page-template.js`),
      context: {
        current: node.slug,
        next: next.node.slug,
        prev: prev.node.slug
      },
    })
  })
}
