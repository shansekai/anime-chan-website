import React, { useEffect } from 'react'
import styled, { css } from 'styled-components'
import ArrowForward from '../assets/arrow-forward-outline.svg'
import { Link } from 'gatsby'

import Prism from 'prismjs'

const response = `
{
  status: "ok"
  code: "200"
  quote: "Don’t give up, there’s no shame in falling down! The true shame is to not stand up again!"
}
`

const Container = styled.div(
  ({ theme }) => css`
    text-align: center;
    padding: 4em 10px;
  `,
)

const CodeContainer = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
)
const CodeCard = styled.div(
  ({ theme }) => css`
    box-shadow: ${theme.shadow.codeBlock};
    width: 100%;
    background: #272822;
    border-radius: 0.3em;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 850px;
    margin: 50px 10px 15px;
  `,
)

const CodeTitle = styled.h6(
  ({ theme }) => css`
    color: ${theme.colors.codeFontTitle};
    font-size: 18px;
    width: 100%;
    text-align: center;
    margin: 0px;
    padding: 12px 0px;
    border-bottom: 1px solid #606060;
  `,
)

const Api = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: flex-start;
    padding: 10px 20px;
    border-bottom: 1px solid #606060;
    span {
      word-break: break-all;
      font-weight: 600;
      font-size: 14px;
      color: #d5d5d5;
    }
  `,
)

const HttpGet = styled.button(
  ({ theme }) => css`
    border: none;
    outline: none;
    font-family: ${theme.fonts.primary};
    background: ${theme.colors.httpGet};
    font-weight: 600;
    margin-right: 20px;
    color: #ffffff;
    border-radius: 4px;
    padding: 5px 10px;
  `,
)

const PreCode = styled.pre`
  width: 100%;
  margin: 0px !important;
  word-break: break-all;
  white-space: break-spaces;
  padding-top: 0px !important;
  code {
    white-space: pre-wrap;
    font-size: 14px;
  }
`

const HeroTitle = styled.h1(
  ({ theme }) => css`
    color: ${theme.colors.strongBlack};
    font-weight: 900;
    margin-bottom: 1em;
  `,
)
const HeroSummary = styled.h5(
  ({ theme }) => css`
    font-size: 18px;
  `,
)

const DocsButton = styled.button(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    border: none;
    outline: none;
    background: ${theme.colors.strongBlack};
    color: ${theme.colors.lightGreen};
    border-radius: 5px;
    font-size: 16px;
    font-weight: 700;
    padding: 10px 40px;

    a {
      margin-right: 10px;
      text-decoration: none;
    }

    svg {
      fill: #8dee91;
    }
  `,
)

const Home = () => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])
  return (
    <>
      <Container>
        <HeroTitle>The Anime chan API</HeroTitle>
        <HeroSummary>Animechan is a rest api serving anime quotes.</HeroSummary>
      </Container>
      <CodeContainer>
        <DocsButton>
          <Link to="/documentation">Docs</Link>
          <ArrowForward height="20px" />
        </DocsButton>

        <CodeCard>
          <CodeTitle>Get one random anime quote</CodeTitle>

          <Api>
            <HttpGet>GET</HttpGet>
            <PreCode>
              <span className="language-http">https://animechanapi.xyz/api/quotes/random</span>
            </PreCode>
          </Api>
          <PreCode>
            <code className="language-javascript">{response}</code>
          </PreCode>
        </CodeCard>
      </CodeContainer>
    </>
  )
}

export default Home
