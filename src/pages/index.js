import * as React from "react"
import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <p>Homepage Content.</p>
    <p>
      <Link to="/about/">About Me</Link> <br />
    </p>
  </Layout>
)

export default IndexPage
