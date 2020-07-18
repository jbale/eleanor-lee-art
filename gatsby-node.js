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
        allStrapiPaintings(
          sort: {fields: [created_at], order: DESC},
          limit: 1000
        ) {
          edges {
            node {
              slug
              created_at
              title
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
  const paintings = result.data.allStrapiPaintings.edges
  const paintingsPerPage = 6
  const numPages = Math.ceil(paintings.length / paintingsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/work` : `/work/${i + 1}`,
      component: path.resolve("./src/templates/portfolio-page-template.js"),
      context: {
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
