import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../layout'
import Docs from './doc'

const MDXLayout = ({ children, pageContext: { frontmatter } }) => {
  const seo = {
    title: frontmatter.title,
    description: frontmatter.description,
    pathname: frontmatter.slug,
  }

  return (
    <Layout seo={{ ...seo }}>
      <div>
        <Docs>{children}</Docs>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query queryDocs {
    mdx(fileAbsolutePath: { regex: "/documentation/" }) {
      tableOfContents(maxDepth: 3)
    }
  }
`

export default MDXLayout
