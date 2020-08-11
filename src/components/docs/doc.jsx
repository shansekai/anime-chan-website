import React from 'react'
import styled from 'styled-components'
import { graphql, StaticQuery } from 'gatsby'

import Sidebar from './sideBar'

const Wrapper = styled.div`
  margin-top: ${(props) => props.theme.headerHeight - 2}px;
`

const Docs = ({ children }) => {
  const data = StaticQuery(graphql`
    query queryDocs {
      mdx(fileAbsolutePath: { regex: "/documentation/" }) {
        tableOfContents(maxDepth: 3)
      }
    }
  `)
  return (
    <Wrapper>
      <Sidebar {...data} />
      <div className="content">
        <article>{children}</article>
      </div>
    </Wrapper>
  )
}

export default Docs
