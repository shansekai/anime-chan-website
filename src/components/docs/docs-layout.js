import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../layout'
import Docs from './doc'
import { prismCSS } from '../../styles/global'

const MDXLayout = ({ children, pageContext: { frontmatter } }) => {
  const seo = {
    title: frontmatter.title,
    description: frontmatter.description,
    pathname: frontmatter.slug,
  }

  const Template = styled.div`
    ${prismCSS}
  `

  return (
    <Layout seo={{ ...seo }}>
      <Template>
        <Docs>{children}</Docs>
      </Template>
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
