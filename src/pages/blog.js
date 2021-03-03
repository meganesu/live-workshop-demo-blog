import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Blog Page">
      <ul>
      {
        data.allFile.nodes.map(
          node => (
            <li>{node.name}</li>
          )
        )
      }
      </ul>
    </Layout>
  )
}

export const query = graphql`
query {
  allFile(filter: {dir: {regex: "/blog$/"}}) {
    nodes {
      name
    }
  }
}
`

export default BlogPage