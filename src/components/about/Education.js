import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const EducationSection = styled.section`
  color: ${props => props.theme.colors.colorWhite};
  width: 45rem;
  color: ${props => props.theme.colors.colorWhite};
  font-size: 1.8rem;
  margin: 2rem auto;
`

const Title = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin: 2rem 0;
`

const EducationSubtitle = styled.h3`
  font-size: 2rem;
  margin: 1rem 0;
`

const EducationInformation = styled.div`
  margin-bottom: 2rem;
`

const UdemyLink = styled(Link)`
  color: ${props => props.theme.colors.colorWhite};
`

export default function Education() {
  return (
    <EducationSection>
      <Title>Education</Title>
      <EducationInformation>
        <EducationSubtitle>Higher Education</EducationSubtitle>
        Attended the University of Melbourne 2015 - 2020 studying a Bachelor of
        Science majoring in Computer Science.
        <EducationSubtitle>High School</EducationSubtitle>
        Attended Box Hill Senior Secondary College 2012 - 2014
        <EducationSubtitle>Personal Learning</EducationSubtitle>
        Completed:{" "}
        <UdemyLink
          target="_blank"
          to="https://www.udemy.com/course/mern-stack-front-to-back/"
        >
          MERN Stack Front To Back
        </UdemyLink>{" "}
        <br />
        Completed:{" "}
        <UdemyLink
          target="_blank"
          to="https://www.udemy.com/course/nodejs-api-masterclass/"
        >
          Node.js, Express & MongoDB Dev to Deployment
        </UdemyLink>{" "}
        <br />
        Completed:{" "}
        <UdemyLink
          target="_blank"
          to="https://www.udemy.com/course/react-redux-tutorial/"
        >
          Advanced React and Redux
        </UdemyLink>{" "}
        <br />
        Completed:{" "}
        <UdemyLink
          target="_blank"
          to="https://www.udemy.com/course/understand-javascript/"
        >
          JavaScript: Understanding the Weird Parts
        </UdemyLink>{" "}
        <br />
      </EducationInformation>
    </EducationSection>
  )
}
