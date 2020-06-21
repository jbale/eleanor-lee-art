/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')

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
                        id
                        created_at
                        title
                        media {
                            localFile {
                                childImageSharp {
                                    id
                                }
                            }
                        }
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
    const posts = result.data.allStrapiPaintings.edges
    const postsPerPage = 6
    const numPages = Math.ceil(posts.length / postsPerPage)
    Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
            path: i === 0 ? `/portfolio` : `/portfolio/${i + 1}`,
            component: path.resolve("./src/templates/portfolio-list-template.js"),
            context: {
                limit: postsPerPage,
                skip: i * postsPerPage,
                numPages,
                currentPage: i + 1,
            },
        })
    })
}