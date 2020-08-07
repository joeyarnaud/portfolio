import React from "react"
import styled, { keyframes } from "styled-components"
import { Link } from "gatsby"

const moveInLeft = keyframes`
  0% {
    transform: translateX(-50rem);
    opacity: 0.1
  }

  90% {
    transform: translateX(5rem);
  }

  100% {
    transform: translateX(0);
    opacity: 1;
  }
`

const moveInRight = keyframes`
  0% {
    transform: translateX(50rem);
    opacity: 0.1
  }

  90% {
    transform: translateX(-5rem);
  }

  100% {
    transform: translateX(0);
    opacity: 1;
  }
`

const Landing = styled.section`
  background: url("https://images.unsplash.com/photo-1465652044861-81e32c824058?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80")
    no-repeat;
  background-size: 100% 100vh;
  object-fit: cover;
  height: 100vh;
  width: 100%;
  position: relative;

  &:after {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${props => props.theme.colors.colorBlack};
    opacity: 0.4;
    height: 100vh;
    width: 100%;
    z-index: ${props => props.theme.zIndex.aboveBase};
  }
`

const Title = styled.h1`
  font-size: 8rem;
  color: ${props => props.theme.colors.colorWhite};
  animation: ${moveInLeft} 1s ease-out;
  font-family: ${props => props.theme.fonts.openSans};
  font-style: italic;
  font-weight: 800;
  z-index: ${props => props.theme.zIndex.important};
  opacity: 0.6;
`

// linear-gradient(
//   to bottom right,
//   ${props => lighten(0.1, props.theme.colors.colorPrimary)},
//   ${props => darken(0.1, props.theme.colors.colorPrimary)}
// );

const SubTitle = styled.h2`
  font-size: 2rem;
  color: ${props => props.theme.colors.colorWhite};
  animation: ${moveInRight} 1s ease-out;
  font-family: ${props => props.theme.fonts.openSans};
  padding: 2rem 0;
  opacity: 0.6;
`

const LandingContainer = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: ${props => props.theme.zIndex.important};
`

const EnterSiteButton = styled(Link)`
  font-size: 2rem;
  padding: 0.5rem 2rem;
  font-family: ${props => props.theme.fonts.openSans};
  background-color: ${props => props.theme.colors.colorWhite};
  color: ${props => props.theme.colors.colorLightGreen};
  border: 2px solid ${props => props.theme.colors.colorLightGreen};
  border-radius: 5px;
  opacity: 1;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    border: 2px solid ${props => props.theme.colors.colorLightGreen};
    background-color: ${props => props.theme.colors.colorLightGreen};
    color: ${props => props.theme.colors.colorWhite};
  }
`

export default function LandingComponent() {
  return (
    <Landing>
      <LandingContainer>
        <Title>Joseph Arnaud</Title>
        <SubTitle>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          porro vitae temporibus delectus accusamus perferendis, ipsam,
          obcaecati dicta adipisci necessitatibus consectetur quam totam autem
          quos! Dolor ducimus libero accusamus facere.
        </SubTitle>
        <EnterSiteButton to="/development">Enter Site</EnterSiteButton>
      </LandingContainer>
    </Landing>
  )
}
