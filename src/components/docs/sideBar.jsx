import React from 'react'
import styled, { css } from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'

const Container = styled.aside(
  ({ theme }) => css`
    display: block;
    nav {
      position: sticky;
      top: ${theme.headerHeight};
      padding: ${theme.spacing._24};
      min-width: 260px;
      overflow-y: auto;
    }
  `,
)

const SideBar = () => {
  const { mdx } = useStaticQuery(query)

  return (
    <Container>
      <nav>
        <ul>
          {mdx.tableOfContents.items.map((item) => (
            <li>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  )
}

const query = graphql`
  query DOCS_TOC {
    mdx(fileAbsolutePath: { regex: "/documentation/" }) {
      tableOfContents(maxDepth: 3)
    }
  }
`

export default SideBar
