import { Link, graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled, { css } from 'styled-components'
import Image from 'gatsby-image'

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

    img {
      border-radius: 50%;
    }

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
const Header = () => {
  const data = useStaticQuery(query)
  return (
    <Container>
      <Link to="/">
        <Image fixed={data.file.childImageSharp.fixed} />
      </Link>
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

export const query = graphql`
  query {
    file(relativePath: { eq: "animechan.png" }) {
      childImageSharp {
        fixed(height: 40) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
