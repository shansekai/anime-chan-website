import React from 'react'
import { graphql } from 'gatsby'
import styled, { css } from 'styled-components'

import Layout from '../components/layout'
import Docs from '../components/docs'
import { prismCSS } from '../styles/global'

const MDXLayout = ({ children, pageContext: { frontmatter } }) => {
  const seo = {
    title: frontmatter.title,
    description: frontmatter.description,
    pathname: frontmatter.slug,
  }

  const Template = styled.div`
    a {
      color: #4d49de;
      text-decoration: underline;
    }
    ${prismCSS}
  `

  const AboutWrapper = styled.article(
    ({ theme }) => css`
      display: block;
      width: 960px;
      margin: 120px auto 0px auto;
    `,
  )

  const isDocs = frontmatter.slug === '/documentation'

  return (
    <Layout seo={{ ...seo }}>
      <Template>{isDocs ? <Docs>{children}</Docs> : <AboutWrapper>{children}</AboutWrapper>}</Template>
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
