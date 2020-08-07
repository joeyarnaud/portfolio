import React from "react"
import styled from "styled-components"
import development from "assets/development.jpeg"

const IntroductionSection = styled.section`
  position: relative;
  background: url(${development});
  text-align: center;
  height: 100vh;
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
      <IntroductionImage src={development} />
      <IntroductionText>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
        officia perspiciatis unde commodi ratione iusto. Iusto ut, quod quaerat,
        non, tempora ipsa obcaecati corrupti laboriosam modi at assumenda sed
        deserunt?
      </IntroductionText>
    </IntroductionSection>
  )
}
