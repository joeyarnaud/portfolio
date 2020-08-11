import React from "react"
import styled from "styled-components"
import development from "assets/development.jpeg"

const IntroductionSection = styled.section`
  position: relative;
  background: url(${development});
  text-align: center;
  height: 40vh;
`

const IntroductionTitle = styled.h1`
  color: #4a4e4d;
  font-size: 4rem;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 2rem;
`

const IntroductionText = styled.p`
  font-size: 2rem;
  color: #4a4e4d;
  margin: 4rem auto;
  padding: 4rem;
  width: 70%;
  background-color: rgba(255, 255, 255, 0.5);
`

const IntroductionImage = styled.img`
  opacity: 0.6;
  height: 70vh;
  width: 70vw;
  position: absolute;
  top: 10vh;
  left: 10vw;
`

export default function Introduction() {
  return (
    <IntroductionSection>
      <IntroductionTitle>Development</IntroductionTitle>
      <IntroductionText>
        Below are some projects I've worked on either at University, at work for
        the company Offcampus or personal projects
      </IntroductionText>
    </IntroductionSection>
  )
}
