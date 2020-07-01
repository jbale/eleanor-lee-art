import React from "react"

import SEO from "../components/Seo"
import { Container } from "@material-ui/core"

const NotFoundPage = () => (
  <Container maxWidth="lg" component="section">
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Container>
)

export default NotFoundPage
