import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled, { css } from 'styled-components'
import GithubIcon from '../assets/github-outline.svg'

const Container = styled.header(
  ({ theme }) => css`
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 2;
    background: ${theme.colors.bg};
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: ${theme.headerHeight};
    padding: 0 ${theme.spacing._15};
    margin: 0 auto;

    a {
      text-decoration: none;
    }
  `,
)

const RightNav = styled.ul`
  list-style: none;
  display: flex;
  width: 100%;
  justify-content: flex-end;
`

const RightNavItem = styled.li(
  ({ theme }) => css`
    color: ${theme.colors.lightBlack};
    font-family: ${theme.fonts.secondary};
    cursor: pointer;
    font-weight: 700;
    display: inline-block;
    margin: 0 10px;
    padding: 5px 10px;

    &:nth-child(3) {
      background: ${theme.colors.lightGreen};
      border-radius: 5px;
    }
  `,
)
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
