import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: sticky;
  top: ${(props) => props.theme.headerHeight}px;
  padding: ${(props) => props.theme.spacing._24}px;
`

const SideBar = ({ data }) => {
  return (
    <Container id="side-nav">
      <nav>YOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</nav>
    </Container>
  )
}

export default SideBar
