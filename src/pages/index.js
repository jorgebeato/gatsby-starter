import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"

export default ({ data }) => (
    <div>
        <h1>Welcome to {data.site.siteMetadata.title}</h1>
        <p>A site about: {data.site.siteMetadata.description}</p>
    </div>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
