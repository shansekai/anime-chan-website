import React from "react"
import styled, { css } from "styled-components"

const Container = styled.div`
  background: ${props => props.theme.colors.lightRed};
  text-align: center;
  padding: 5em 10px;
`

const HeroTitle = styled.h1`
  color: ${props => props.theme.colors.strongBlack};
  font-family: ${props => props.theme.fonts.primary};
  font-size: ${props => props.theme.fontSizes.heroTitle};
  font-weight: 900;
  margin-bottom: 1.5em;
`
const HeroContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const HeroContentItem = styled.div`
  font-family: ${props => props.theme.fonts.secondary};
  font-size: ${props => props.theme.fontSizes.heroItem};
  color: ${props => props.theme.colors.lightBlack};
  font-weight: 700;
  display: flex;
  align-items: center;
  margin: 0 15px;
  &::before {
    display: inline-block;
    content: "";
    background: ${props => props.theme.colors.lightGreen};
    margin-right: 4px;
    border-radius: 50%;
    height: 15px;
    width: 15px;
  }
`

const Home = () => {
  return (
    <Container>
      <HeroTitle>The Anime chan API</HeroTitle>
      <HeroContent>
        <HeroContentItem>status: active</HeroContentItem>
        <HeroContentItem>quotes: 4020</HeroContentItem>
        <HeroContentItem>stars: 40</HeroContentItem>
        <HeroContentItem>api: rest</HeroContentItem>
      </HeroContent>
    </Container>
  )
}

export default Home
