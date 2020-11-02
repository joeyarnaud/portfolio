import React from "react"
import styled from "styled-components"

const BioSection = styled.section`
  width: 45rem;
  color: ${props => props.theme.colors.colorWhite};
  font-size: 1.8rem;
  margin: 2rem auto;
`

const BioSummary = styled.div``

const BioTitle = styled.h2`
  text-align: center;
  margin: 2rem 0;
`

const BioSubtitle = styled.h3`
  font-size: 2rem;
  margin: 1rem 0;
`

const BioSubtitle2 = styled.h4`
  font-size: 1.8rem;
  font-style: italic;
  margin: 1rem 0;
`

const BioSubtitle3 = styled.h3`
  font-size: 1.8rem;
  font-weight: boldest;
  margin: 1rem 0;
`

const BioList = styled.ul`
  margin: 1rem 2rem;
`

const BioListItem = styled.li`
  margin-bottom: 1rem;
`

const CareerSummary = styled.div``

export default function Bio() {
  return (
    <BioSection>
      <BioTitle>Biography </BioTitle>
      <BioSummary>
        I am a Web developer that learns quickly and enjoys being challenged. I
        have just under two years of experience developing React web apps for
        consumers and employees. During this time i performed sprints in a small
        team with a backend developer. I am educated on agile development and
        have a solid programming foundation of algorithms and data structures.
      </BioSummary>
      <BioTitle>Career Summary </BioTitle>
      <CareerSummary>
        <BioSubtitle>Frontend Developer At Offcampus</BioSubtitle>
        <BioSubtitle2>2018 - 2020</BioSubtitle2>
        <BioSubtitle3>Role: Front End Developer</BioSubtitle3>
        <BioList>
          <BioListItem>
            Turned wireframes into reusable react components
          </BioListItem>
          <BioListItem>Managed global state using redux</BioListItem>
          <BioListItem>
            Wrote unit and integration tests using Jest and Enzyme
          </BioListItem>
          <BioListItem>Deployed changes to the live website</BioListItem>
          <BioListItem>
            Styled responsive web pages using styled components
          </BioListItem>
          <BioListItem>Optimising performance on the client side</BioListItem>
          <BioListItem>Set up hosting and DNS of the client</BioListItem>
        </BioList>
      </CareerSummary>
    </BioSection>
  )
}
