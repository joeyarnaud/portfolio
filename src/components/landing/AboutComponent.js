import React from "react"
import styled from "styled-components"

const About = styled.section`
  /* background-color: ${props => props.theme.colors.colorPrimaryBackground}; */
  color: ${props => props.theme.colors.colorPrimary};
  padding: 3rem;
  height: 400px;
  overflow: hidden;
`

const Description = styled.div``

const DescriptionTitle = styled.h3``

const DescriptionText = styled.p``

export default function AboutComponent() {
  return (
    <About>
      <Description>
        <DescriptionTitle>Welcome, I'm Joseph Arnaud</DescriptionTitle>
        <DescriptionText>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
          perferendis placeat optio, inventore, similique quasi adipisci rem
          cupiditate repudiandae a, maxime nesciunt officia voluptatibus nemo
          hic accusantium ipsum consectetur aliquam?
        </DescriptionText>
      </Description>
    </About>
  )
}
