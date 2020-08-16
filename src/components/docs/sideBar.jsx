import React from 'react'
import styled, { css } from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'

const Container = styled.aside(
  ({ theme }) => css`
    display: block;
    @media (max-width: 800px) {
      display: none;
    }
    nav {
      position: sticky;
      top: 80px;
      padding: ${theme.spacing._24};
      min-width: 260px;
      overflow-y: auto;

      li {
      }

      a {
        display: block;
        font-size: 17px;
        font-weight: 500;
        margin-bottom: 10px;
        background: #ff9e9e;
        padding: 10px;
        border-radius: 2px;
        color: #171717;
        text-decoration: none !important;
      }
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

              {item.items.map((item) => (
                <a href={item.url}>{item.title}</a>
              ))}
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
