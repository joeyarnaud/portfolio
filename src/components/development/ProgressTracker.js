import React from "react"
import styled from "styled-components"
import wide from "assets/progress-tracker/wide.png"
import phone from "assets/progress-tracker/phone.jpg"
import CurrentlyDown from "components/common/CurrentlyDown"
import {
  WebsiteContainer,
  WebsiteTitle,
  WebsiteSubtitle,
  WebsiteDescription,
  WebsitePhotosContainer,
  PhoneContainer,
  WideScreenContainer,
  WebsiteInformationContainer,
  WebsiteLinks,
  WebsiteLink,
  WebsiteLinkDescription,
  WebsiteTechnicalInformation,
  Image,
  ScreenTitle,
  GitHub,
  Page,
  Key,
} from "./common"

const ProgressTrackerContainer = styled(WebsiteContainer)`
  background-color: #343a40;
`

const ProgressTrackerTitle = styled(WebsiteTitle)`
  color: ${props => props.theme.colors.colorWhite};
`

const ProgressTrackerSubtitle = styled(WebsiteSubtitle)`
  color: ${props => props.theme.colors.colorWhite};
  margin: 2rem 0;
`

const ProgressTrackerDescription = styled(WebsiteDescription)`
  color: ${props => props.theme.colors.colorWhite};
  text-align: center;
`

const ProgressTrackerScreenTitle = styled(ScreenTitle)`
  color: ${props => props.theme.colors.colorWhite};
`

const ProgressTrackerInformationContainer = styled(
  WebsiteInformationContainer
)``

const ProgressTrackerLinks = styled(WebsiteLinks)``

const ProgressTrackerLink = styled(WebsiteLink)`
  color: ${props => props.theme.colors.colorWhite};
`

const ProgressTrackerTechnicalInformation = styled(
  WebsiteTechnicalInformation
)``

export default function ProgressTrackers() {
  return (
    <ProgressTrackerContainer>
      <ProgressTrackerTitle>Progress Tracker</ProgressTrackerTitle>
      <ProgressTrackerDescription>
        Progress Tracker is a project I've been working on to help people track
        the progress of their workouts along a few metrics, it is currently in
        early development. Here is a look at what it looks like currently.
      </ProgressTrackerDescription>
      <WebsitePhotosContainer>
        <CurrentlyDown>
          <WideScreenContainer
            target="_blank"
            href="https://pure-taiga-01859.herokuapp.com/"
          >
            <ProgressTrackerScreenTitle>
              Computer View
            </ProgressTrackerScreenTitle>
            <Image src={wide} />
          </WideScreenContainer>
        </CurrentlyDown>
        <CurrentlyDown>
          <PhoneContainer
            target="_blank"
            href="https://pure-taiga-01859.herokuapp.com/"
          >
            <ProgressTrackerScreenTitle>Phone View</ProgressTrackerScreenTitle>
            <Image src={phone} />
          </PhoneContainer>
        </CurrentlyDown>
      </WebsitePhotosContainer>
      <ProgressTrackerInformationContainer>
        <ProgressTrackerSubtitle>Links: </ProgressTrackerSubtitle>
        <ProgressTrackerLinks>
          <ProgressTrackerLink
            target="_blank"
            href="https://github.com/joeyarnaud/progress-tracker"
            style={{ marginRight: "2rem" }}
          >
            <GitHub />
            <WebsiteLinkDescription>Github (F)</WebsiteLinkDescription>
          </ProgressTrackerLink>
          <ProgressTrackerLink
            target="_blank"
            href="https://github.com/joeyarnaud/progress-tracker-backend"
            style={{ marginRight: "2rem" }}
          >
            <GitHub />
            <WebsiteLinkDescription>Github (B)</WebsiteLinkDescription>
          </ProgressTrackerLink>
          <ProgressTrackerLink
            target="_blank"
            href="https://pure-taiga-01859.herokuapp.com/"
          >
            <Page />
            <WebsiteLinkDescription>Page</WebsiteLinkDescription>
          </ProgressTrackerLink>
        </ProgressTrackerLinks>
        <ProgressTrackerTechnicalInformation>
          <ProgressTrackerSubtitle>Front End Details:</ProgressTrackerSubtitle>
          <div>
            <Key>Framework </Key> - React
          </div>
          <p>
            <Key>State Management</Key> - Redux
          </p>
          <p>
            <Key>Styling</Key> - Styled Components & React Bootstrap
          </p>
          <p>
            <Key>Deployment</Key> - Heroku
          </p>
          <ProgressTrackerSubtitle>Backend Details:</ProgressTrackerSubtitle>
          <div>
            <Key>Language/Runtime</Key> - Node.js
          </div>
          <p>
            <Key>Framework</Key> - Express
          </p>
          <p>
            <Key>Database</Key> - MongoDB
          </p>
          <p>
            <Key>Bundled With</Key> - Docker
          </p>
          <p>
            <Key>Deployment</Key> - Digital Ocean Droplet
          </p>
        </ProgressTrackerTechnicalInformation>
      </ProgressTrackerInformationContainer>
    </ProgressTrackerContainer>
  )
}
