import React from "react"
import styled from "styled-components"
import Layout, { css } from "components/layout"
import profileImage from "assets/profile.jpeg"

const AboutPage = styled.div`
  display: grid;
  grid-template-areas: "contact picture" "biography skills";
`

const AboutPageSection = styled.section`
  position: relative;
  padding: 2rem;
  background-color: ${props =>
    props.bgGreen
      ? props.theme.colors.colorLightGreen
      : props.theme.colors.colorWhite};
  color: ${props =>
    props.bgGreen
      ? props.theme.colors.colorWhite
      : props.theme.colors.colorLightGreen};
`

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`

const Contact = styled(AboutPageSection)`
  grid-area: contact;
`

const Picture = styled(AboutPageSection)`
  grid-area: picture;
  text-align: center;
`

const Biography = styled(AboutPageSection)`
  grid-area: biography;
`

const Skills = styled(AboutPageSection)`
  grid-area: skills;
`

const SkillsContainer = styled.div`
  display: flex;
`

const SkillSection = styled.div``

const Profile = styled.img`
  height: 20rem;
  width: 20rem;
  border-radius: 50%;
`
const Information = styled.p`
  font-size: 1.6rem;
`

const ListTitle = styled.h5`
  font-size: 2rem;
`

const List = styled.ul`
  font-size: 1.6rem;
`

const ListItem = styled.li`
  list-style: none;
`

export default function About() {
  return (
    <Layout>
      <AboutPage>
        <Contact bgGreen>
          <SectionTitle>Contact Information</SectionTitle>
        </Contact>
        <Picture>
          <Profile src={profileImage} alt="joseph arnaud" />
          <SectionTitle>Joseph Arnaud</SectionTitle>
        </Picture>
        <Biography>
          <SectionTitle>Biography</SectionTitle>
          <Information>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id nisi
            dolores aliquam deleniti qui commodi pariatur nostrum officia
            consectetur? Ipsum excepturi enim maiores provident, ipsa ea natus
            doloribus nemo obcaecati.
          </Information>
        </Biography>
        <Skills bgGreen>
          <SectionTitle>Development Skills</SectionTitle>
          <SkillsContainer>
            <SkillSection>
              <ListTitle>Web Development</ListTitle>
              <List>
                <ListItem>JavaScript</ListItem>
                <ListItem>HTML</ListItem>
                <ListItem>CSS</ListItem>
                <ListItem>BootStrap</ListItem>
                <ListItem>Node.js</ListItem>
                <ListItem>React.js</ListItem>
                <ListItem>PHP</ListItem>
                <ListItem>Laravel</ListItem>
              </List>
            </SkillSection>
            <SkillSection>
              <ListTitle>Software Development</ListTitle>
              <List>
                <ListItem>Java - (Android Development)</ListItem>
                <ListItem>React Native - (Cross Platform Development)</ListItem>
              </List>
            </SkillSection>
          </SkillsContainer>
        </Skills>
      </AboutPage>
    </Layout>
  )
}
