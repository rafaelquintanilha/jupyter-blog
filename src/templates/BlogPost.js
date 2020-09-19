import React from "react"
import { graphql, Link } from "gatsby"
import css from "./BlogPost.module.css"
import SEO from "../components/seo"

const BlogPost = ({
  data: {
    jupyterNotebook: {
      json: { metadata },
      html,
    },
  },
}) => {
  return (
    <div className={css["content"]}>
      <SEO title={metadata.title} />
      <h1>{metadata.title}</h1>
      <p>Written by {metadata.author}</p>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <hr />
      <Link to="/">Back</Link>
    </div>
  )
}

export default BlogPost

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    jupyterNotebook(fields: { slug: { eq: $slug } }) {
      json {
        metadata {
          title
          author
        }
      }
      html
    }
  }
`
