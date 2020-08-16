import React from 'react'
import styled, { css } from 'styled-components'

import Sidebar from './sideBar'

const Wrapper = styled.div(
  ({ theme }) => css`
    display: flex;
    margin-top: 70px;

    @media (max-width: 800px) {
      flex-direction: column;
    }

    article {
      max-width: 960px;
      min-height: 50vh;
      padding: 0px 1.5rem;
      margin: 0px auto 60px;
    }
  `,
)

const Content = styled.div(
  ({ theme }) => css`
    overflow: hidden;
    flex-grow: 1;
  `,
)

const Docs = ({ children }) => {
  return (
    <Wrapper>
      <Sidebar />
      <Content>
        <article>{children}</article>
      </Content>
    </Wrapper>
  )
}

export default Docs
