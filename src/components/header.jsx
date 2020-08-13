import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import GithubIcon from '../assets/github-outline.svg'

const Container = styled.header`
  background: ${(props) => props.theme.colors.lightRed};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${(props) => props.theme.headerHeight};
  padding: 0 ${(props) => props.theme.spacing._15};
  margin: 0 auto;
`

const RightNav = styled.ul`
  list-style: none;
  display: flex;
  width: 100%;
  justify-content: flex-end;
`

const RightNavItem = styled.li`
  color: ${(props) => props.theme.colors.lightBlack};
  font-family: ${(props) => props.theme.fonts.secondary};
  cursor: pointer;
  font-weight: 700;
  display: inline-block;
  margin: 0 10px;
  padding: 5px 10px;

  &:nth-child(3) {
    background: ${(props) => props.theme.colors.lightGreen};
    border-radius: 5px;
  }
`
const Header = ({ siteTitle }) => {
  return (
    <Container>
      <div>
        <Link to="/">
          <GithubIcon height="28px" />
        </Link>
      </div>
      <RightNav>
        <RightNavItem>
          <Link to="/documentation/">Docs</Link>
        </RightNavItem>
        <RightNavItem>
          <Link to="/about">About</Link>
        </RightNavItem>
        <RightNavItem to="/support">
          <Link>Support</Link>
        </RightNavItem>
      </RightNav>
    </Container>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
