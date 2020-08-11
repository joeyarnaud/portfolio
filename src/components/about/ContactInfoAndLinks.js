import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import profileImage from "assets/profile.jpeg"
import { EmailLink } from "components/common/buttons/EmailLink"

const GitHub = styled(FaGithub)`
  color: ${props => props.theme.colors.colorWhite};
  border-radius: 50%;
  margin-right: 2rem;
  margin-bottom: -0.3rem;
`

const LinkedIn = styled(FaLinkedin)`
  color: ${props => props.theme.colors.colorWhite};
  border-radius: 50%;
  margin-right: 2rem;
  margin-bottom: -0.3rem;
`

const CIALContainer = styled.section`
  text-align: center;
  margin-top: 4rem;
`

const CIALTitle = styled.h1`
  font-size: 3.5rem;
  color: ${props => props.theme.colors.colorWhite};
  margin: 2rem 0;
`

const CIALImage = styled.img`
  width: 30rem;
  height: 30rem;
  border-radius: 50%;
`

const InfoContainer = styled.div`
  text-align: center;
  width: 45rem;
  margin: 0 auto 2rem auto;
`

const InfoTitle = styled.h2`
  font-size: 2.5rem;
  color: ${props => props.theme.colors.colorWhite};
  margin-bottom: 1.5rem;
`

const InfoList = styled.ul`
  margin: 0 2rem;
`

const InfoListItem = styled.li`
  display: flex;
  justify-content: space-between;
  font-size: 1.8rem;
  color: ${props => props.theme.colors.colorWhite};
  margin-bottom: 1rem;
`

const InfoListItemCategory = styled.span``

const InfoListLink = styled(Link)`
  color: ${props => props.theme.colors.colorWhite};
`

export default function CIAL() {
  return (
    <CIALContainer>
      <CIALImage src={profileImage} />
      <CIALTitle>Joseph Arnaud</CIALTitle>
      <InfoContainer>
        <InfoTitle>Information</InfoTitle>
        <InfoList>
          <InfoListItem>
            <InfoListItemCategory>Email: </InfoListItemCategory>
            <EmailLink href="mailto:joeyarnaud@gmail.com">
              joeyarnaud@gmail.com
            </EmailLink>
          </InfoListItem>
          <InfoListItem>
            <InfoListItemCategory>Mobile: </InfoListItemCategory>
            +614 0440 5050
          </InfoListItem>
          <InfoListItem>
            <InfoListItemCategory>Github: </InfoListItemCategory>
            <InfoListLink target="_blank" to="https://github.com/joeyarnaud">
              <GitHub />
              Joseph Arnaud
            </InfoListLink>
          </InfoListItem>
          <InfoListItem>
            <InfoListItemCategory>LinkedIn:</InfoListItemCategory>
            <InfoListLink
              target="_blank"
              to="https://www.linkedin.com/in/joseph-arnaud-ba2193141/"
            >
              <LinkedIn />
              Joseph Arnaud
            </InfoListLink>
          </InfoListItem>
        </InfoList>
      </InfoContainer>
    </CIALContainer>
  )
}
