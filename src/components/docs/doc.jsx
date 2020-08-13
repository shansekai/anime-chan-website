import React from 'react'
import styled from 'styled-components'

import Sidebar from './sideBar'

const Wrapper = styled.div`
  display: flex;
  margin-top: ${(props) => props.theme.headerHeight - 2}px;
`

const Docs = ({ children }) => {
  return (
    <Wrapper>
      <Sidebar />
      <div className="content">
        <article>{children}</article>
      </div>
    </Wrapper>
  )
}

export default Docs
