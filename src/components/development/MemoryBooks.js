import React from "react"
import styled from "styled-components"
import wide from "assets/memory-books/memory-wide.png"
import phone from "assets/memory-books/memory-phone.jpg"
import { BlankLink } from "components/common/buttons/blank"
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

const MemoryBookContainer = styled(WebsiteContainer)`
  background-color: #846e59;
`

const MemoryBookTitle = styled(WebsiteTitle)`
  color: ${props => props.theme.colors.colorWhite};
`

const MemoryBookSubtitle = styled(WebsiteSubtitle)`
  color: ${props => props.theme.colors.colorWhite};
`

const MemoryBookDescription = styled(WebsiteDescription)`
  color: ${props => props.theme.colors.colorWhite};
  text-align: center;
`

const MemoryBookScreenTitle = styled(ScreenTitle)`
  color: ${props => props.theme.colors.colorWhite};
`

const MemoryBookInformationContainer = styled(WebsiteInformationContainer)``

const MemoryBookLinks = styled(WebsiteLinks)``

const MemoryBookLink = styled(WebsiteLink)`
  color: ${props => props.theme.colors.colorWhite};
`

const MemoryBookTechnicalInformation = styled(WebsiteTechnicalInformation)``

export default function MemoryBooks() {
  return (
    <MemoryBookContainer>
      <MemoryBookTitle>Memory Books</MemoryBookTitle>
      <MemoryBookDescription>
        Memory Books is a website I made in a group at university. The project
        was to create a website to document family artefacts and it had a heavy
        focus on the development process. We were encouraged to use Agile
        techniques and document the process. I was responsible for the front-end
        of the website and worked closely with the developers on the backend.
      </MemoryBookDescription>
      <WebsitePhotosContainer>
        <WideScreenContainer
          target="_blank"
          href="https://quiet-river-61063.herokuapp.com/"
        >
          <MemoryBookScreenTitle>Computer View</MemoryBookScreenTitle>
          <Image src={wide} />
        </WideScreenContainer>
        <PhoneContainer
          target="_blank"
          href="https://quiet-river-61063.herokuapp.com/"
        >
          <MemoryBookScreenTitle>Phone View</MemoryBookScreenTitle>
          <Image src={phone} />
        </PhoneContainer>
      </WebsitePhotosContainer>
      <MemoryBookInformationContainer>
        <MemoryBookSubtitle>Links: </MemoryBookSubtitle>
        <MemoryBookLinks>
          <MemoryBookLink
            target="_blank"
            href="https://github.com/synergetic-blockchain-solutions"
            style={{ marginRight: "2rem" }}
          >
            <GitHub />
            <WebsiteLinkDescription>Github</WebsiteLinkDescription>
          </MemoryBookLink>
          <MemoryBookLink
            target="_blank"
            href="https://quiet-river-61063.herokuapp.com/"
          >
            <Page />
            <WebsiteLinkDescription>Page</WebsiteLinkDescription>
          </MemoryBookLink>
        </MemoryBookLinks>
        <MemoryBookTechnicalInformation>
          <MemoryBookSubtitle>Front End Details:</MemoryBookSubtitle>
          <div>
            <Key>Framework </Key> - React
          </div>
          <p>
            <Key>State Management</Key> - Redux
          </p>
          <p>
            <Key>Styling</Key> - Styled Components
          </p>
          <p>
            <Key>Deployment</Key> - Heroku
          </p>
          <p>
            <Key>Testing</Key> - Jest/Enzyme
          </p>
        </MemoryBookTechnicalInformation>
      </MemoryBookInformationContainer>
    </MemoryBookContainer>
  )
}
