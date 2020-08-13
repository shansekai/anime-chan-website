import React from 'react'
import styled, { css } from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'

const Container = styled.div(
  ({ theme }) => css`
    position: sticky;
    top: ${theme.headerHeight};
    padding: ${theme.spacing._24};
    min-width: 260px;
    height: calc(100vh - 60px);
    overflow-y: auto;
    padding: 1.5rem;
  `,
)

const SideBar = () => {
  const { mdx } = useStaticQuery(query)

  return (
    <Container id="side-nav">
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
