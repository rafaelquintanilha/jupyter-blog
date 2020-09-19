import React from "react"
import SEO from "../components/seo"
import { useStaticQuery, graphql, Link } from "gatsby"
import css from "./index.module.css"

const IndexPage = () => {
  const {
    allJupyterNotebook: { nodes },
  } = useStaticQuery(graphql`
    query IndexQuery {
      allJupyterNotebook {
        nodes {
          fields {
            slug
          }
          json {
            metadata {
              title
              author
            }
          }
        }
      }
    }
  `)

  return (
    <div className={css["container"]}>
      <SEO title="Home" />
      <div className={css["content"]}>
        <h1>Jupyter Notebook Posts</h1>
        <p>All posts are generated automatically from Jupyter Notebooks.</p>
        <div>
          {nodes.map(node => (
            <Link key={node.fields.slug} to={`/${node.fields.slug}/`}>
              <h2>{node.json.metadata.title}</h2>
            </Link>
          ))}
        </div>
      </div>
      <footer>
        Created by{" "}
        <a href="https://rafaelquintanilha.com">Rafael Quintanilha</a> —{" "}
        <a href="https://github.com/rafaelquintanilha/jupyter-blog">Source</a>
      </footer>
    </div>
  )
}

export default IndexPage
