import React from "react"
import styled from "styled-components"
import create from "assets/days-since/create.jpg"
import custom from "assets/days-since/custom.jpg"
import dashboard from "assets/days-since/dashboard.jpg"
import effects from "assets/days-since/effects.jpg"
import habits from "assets/days-since/your-habits.jpg"
import {
  WebsiteContainer,
  WebsiteTitle,
  WebsiteSubtitle,
  WebsiteDescription,
  WebsitePhotosContainer,
  NoLinkPhoneContainer,
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

const HabitGitHub = styled(GitHub)`
  color: ${props => props.theme.colors.colorBlack};
`

const HabitTrackerContainer = styled(WebsiteContainer)`
  background-color: #fff;
`

const HabitTrackerTitle = styled(WebsiteTitle)`
  color: ${props => props.theme.colors.colorBlack};
`

const HabitTrackerubtitle = styled(WebsiteSubtitle)`
  color: ${props => props.theme.colors.colorBlack};
`

const HabitTrackerDescription = styled(WebsiteDescription)`
  color: ${props => props.theme.colors.colorBlack};
  text-align: center;
`

const HabitTrackerScreenTitle = styled(ScreenTitle)`
  color: ${props => props.theme.colors.colorBlack};
`

const HabitTrackerInformationContainer = styled(WebsiteInformationContainer)`
  color: ${props => props.theme.colors.colorBlack};
`

const HabitTrackerLinks = styled(WebsiteLinks)``

const HabitTrackerLink = styled(WebsiteLink)`
  color: ${props => props.theme.colors.colorBlack};
`

const HabitTrackerTechnicalInformation = styled(WebsiteTechnicalInformation)`
  color: ${props => props.theme.colors.colorBlack};
`

export default function HabitTracker() {
  return (
    <HabitTrackerContainer>
      <HabitTrackerTitle>Habit Tracker</HabitTrackerTitle>
      <HabitTrackerDescription>
        Habit Tracker is a React Native application I made bootstrapped with
        expo. Currently I'm getting friends and family to do some usability
        testing on it. I will then adjust the flow of the application and have
        someone look at designing it for better UX.
      </HabitTrackerDescription>
      <WebsitePhotosContainer>
        <NoLinkPhoneContainer>
          <HabitTrackerScreenTitle>Dashboard</HabitTrackerScreenTitle>
          <Image src={dashboard} />
        </NoLinkPhoneContainer>
        <NoLinkPhoneContainer>
          <HabitTrackerScreenTitle>Habits</HabitTrackerScreenTitle>
          <Image src={habits} />
        </NoLinkPhoneContainer>
        <NoLinkPhoneContainer>
          <HabitTrackerScreenTitle>Create</HabitTrackerScreenTitle>
          <Image src={create} />
        </NoLinkPhoneContainer>
        <NoLinkPhoneContainer>
          <HabitTrackerScreenTitle>
            Custom Habit Creation
          </HabitTrackerScreenTitle>
          <Image src={custom} />
        </NoLinkPhoneContainer>
        <NoLinkPhoneContainer>
          <HabitTrackerScreenTitle>Effects</HabitTrackerScreenTitle>
          <Image src={effects} />
        </NoLinkPhoneContainer>
      </WebsitePhotosContainer>
      <HabitTrackerInformationContainer>
        <HabitTrackerubtitle>Links: </HabitTrackerubtitle>
        <HabitTrackerLinks>
          <HabitTrackerLink
            target="_blank"
            href="https://github.com/joeyarnaud/bad-habit-tracker"
            style={{ marginRight: "2rem" }}
          >
            <HabitGitHub />
            <WebsiteLinkDescription>Github</WebsiteLinkDescription>
          </HabitTrackerLink>
        </HabitTrackerLinks>
        <HabitTrackerTechnicalInformation>
          <HabitTrackerubtitle>Front End Details:</HabitTrackerubtitle>
          <div>
            <Key>Framework </Key> - React Native
          </div>
        </HabitTrackerTechnicalInformation>
      </HabitTrackerInformationContainer>
    </HabitTrackerContainer>
  )
}
