import React, { useEffect } from 'react'
import styled from 'styled-components'

import Prism from 'prismjs'

const response = `
{
  status: "ok"
  code: "200"
  quote: "Don’t give up, there’s no shame in falling down! The true shame is to not stand up again!"
}
`

const Container = styled.div`
  background: ${(props) => props.theme.colors.lightRed};
  text-align: center;
  padding: 5em 10px;
`

const CodeContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`
const CodeCard = styled.div`
  box-shadow: ${(props) => props.theme.shadow.codeBlock};
  background: #272822;
  border-radius: 0.3em;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 850px;
  margin: 10px 15px;
`

const CodeTitle = styled.h6`
  font-family: ${(props) => props.theme.fonts.secondary};
  color: ${(props) => props.theme.colors.codeFontTitle};
  font-size: 18px;
  width: 100%;
  text-align: center;
  margin: 0px;
  padding: 12px 0px;
  border-bottom: 1px solid #606060;
`

const Api = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: flex-start;
  padding: 10px 0px 10px 20px;
  border-bottom: 1px solid #606060;
  span {
    font-weight: 600;
    font-size: 14px;
    color: #d5d5d5;
  }
`

const HttpGet = styled.button`
  border: none;
  outline: none;
  font-family: ${(props) => props.theme.fonts.primary};
  background: ${(props) => props.theme.colors.httpGet};
  font-weight: 600;
  margin-right: 20px;
  color: #ffffff;
  border-radius: 4px;
  padding: 5px 10px;
`

const PreCode = styled.pre`
  width: 850px;
  margin: 0px !important;
  code {
    white-space: pre-wrap;
    font-size: 14px;
  }
`

const HeroTitle = styled.h1`
  color: ${(props) => props.theme.colors.strongBlack};
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: ${(props) => props.theme.fontSizes.heroTitle};
  font-weight: 900;
  margin-bottom: 1em;
`
const HeroContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const HeroContentItem = styled.div`
  font-family: ${(props) => props.theme.fonts.secondary};
  font-size: ${(props) => props.theme.fontSizes.heroItem};
  color: ${(props) => props.theme.colors.lightBlack};
  font-weight: 700;
  display: flex;
  align-items: center;
  margin: 0 15px;
  &::before {
    display: inline-block;
    content: '';
    background: ${(props) => props.theme.colors.lightGreen};
    margin-right: 4px;
    border-radius: 50%;
    height: 15px;
    width: 15px;
  }
`

const Home = () => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])
  return (
    <>
      <Container>
        <HeroTitle>The Anime chan API</HeroTitle>
        <HeroContent>
          <HeroContentItem>status: active</HeroContentItem>
          <HeroContentItem>quotes: 4020</HeroContentItem>
          <HeroContentItem>stars: 40</HeroContentItem>
          <HeroContentItem>api: rest</HeroContentItem>
        </HeroContent>
      </Container>
      <CodeContainer>
        <CodeCard>
          <CodeTitle>Get one random anime quote</CodeTitle>

          <Api>
            <HttpGet>GET</HttpGet>
            <pre>
              <span className="language-http">https://animechanapi.xyz/api/quotes/random</span>
            </pre>
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
