import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => (
  <Layout>
    <Seo title="About Me" />
    <p>About content here</p>
    <Link to="/">Home</Link>
  </Layout>
)

export default AboutPage
