import React from "react"
import styled from "styled-components"

const SkillsSection = styled.section`
  width: 45rem;
  color: ${props => props.theme.colors.colorWhite};
  font-size: 1.8rem;
  margin: 2rem auto;
`

const SkillsList = styled.ul`
  margin: 1rem 2rem;
`

const SkillsListItem = styled.li``

const Title = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin: 2rem 0;
`

const SkillsSubtitle = styled.h3`
  font-size: 2rem;
  margin: 1rem 0;
`

export default function Skills() {
  return (
    <SkillsSection>
      <Title>Skills</Title>
      <SkillsSubtitle>Programming Languages</SkillsSubtitle>
      <SkillsList>
        <SkillsListItem>JavaScript, HTML, CSS</SkillsListItem>
        <SkillsListItem>Java</SkillsListItem>
        <SkillsListItem>C/C++</SkillsListItem>
        <SkillsListItem>Python</SkillsListItem>
        <SkillsListItem>Haskell</SkillsListItem>
        <SkillsListItem>PHP</SkillsListItem>
        <SkillsListItem>SQL</SkillsListItem>
      </SkillsList>
      <SkillsSubtitle>Frameworks, Runtimes & Libraries</SkillsSubtitle>
      <SkillsList>
        <SkillsListItem>React.js, Redux</SkillsListItem>
        <SkillsListItem>Sass, Bootstrap</SkillsListItem>
        <SkillsListItem>React Native</SkillsListItem>
        <SkillsListItem>Android (Java)</SkillsListItem>
        <SkillsListItem>Node.js</SkillsListItem>
        <SkillsListItem>Flask</SkillsListItem>
      </SkillsList>
    </SkillsSection>
  )
}
