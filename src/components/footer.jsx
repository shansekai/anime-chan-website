import React from 'react'
import styled, { css } from 'styled-components'
import GithubIcon from '../assets/github-brands.svg'
import TwitterIcon from '../assets/twitter-brands.svg'
import HeartIcon from '../assets/hand-holding-heart.svg'
import CodeIcon from '../assets/code-outline.svg'

const Container = styled.footer(
  ({ theme }) => css`
    margin-top: 50px;
    font-family: ${theme.fonts.secondary};
    color: ${theme.colors.lightBlack};
  `,
)
const Social = styled.ul(
  ({ theme }) => css`
    display: flex;
    justify-content: center;
    list-style: none;
  `,
)
const SocialItem = styled.li(
  ({ theme }) => css`
    margin: 0 16px;

    svg {
      color: ${theme.colors.lightBlack};
      height: 15px;
    }
  `,
)

const CopyRight = styled.div(
  ({ theme }) => css`
    margin-top: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    span,
    a {
      font-weight: 700;
    }
    a {
      color: ${theme.colors.lightRed};
    }
  `,
)
const Footer = () => {
  return (
    <Container>
      <Social>
        <SocialItem>
          <GithubIcon />
        </SocialItem>
        <SocialItem>
          <TwitterIcon />
        </SocialItem>
        <SocialItem>
          <HeartIcon />
        </SocialItem>
      </Social>
      <CopyRight>
        <CodeIcon height="18px" />
        <span style={{ marginLeft: '5px' }}>
          {' '}
          by <a href="https://github.com/rockimsaikia">Rocktim Saikia</a> 2020
        </span>
      </CopyRight>
    </Container>
  )
}

export default Footer
