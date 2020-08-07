import React from "react"
import styled from "styled-components"
import tutorBooking from "assets/offcampus/tutor-booking.png"
import tutorSessions from "assets/offcampus/tutor-sessions.png"
import tutorChat from "assets/offcampus/tutor-chat.png"
import tutorView from "assets/offcampus/tutor-view.png"
import question from "assets/offcampus/question.png"
import questionSingle from "assets/offcampus/question-single.png"
import {
  WebsiteContainer,
  WebsiteTitle,
  WebsiteSubtitle,
  WebsiteDescription,
  WebsitePhotosContainer,
  NonLinkWidescreenContainer,
  WebsiteInformationContainer,
  WebsiteTechnicalInformation,
  Image,
  ScreenTitle,
  Key,
} from "./common"

const OffcampusContainer = styled(WebsiteContainer)`
  background-color: #f7f7f7;
`

const OffcampusTitle = styled(WebsiteTitle)`
  color: #0e174d;
`

const OffcampusSubtitle = styled(WebsiteSubtitle)`
  color: #0e174d;
  margin: 2rem 0;
`

const OffcampusDescription = styled(WebsiteDescription)`
  color: #0e174d;
  text-align: center;
`

const OffcampusScreenTitle = styled(ScreenTitle)`
  color: #0e174d;
`

const OffcampusInformationContainer = styled(WebsiteInformationContainer)``

const OffcampusTechnicalInformation = styled(WebsiteTechnicalInformation)`
  color: #0e174d;
`

export default function Offcampuss() {
  return (
    <OffcampusContainer>
      <OffcampusTitle>Offcampus</OffcampusTitle>
      <OffcampusDescription>
        Offcampus is a small start up that i developed the front end for. It was
        a massive project that included three portals one for students, one for
        tutors and one for admins. Funding issues mean that the website is no
        longer online, but perhaps it might be put up again at some point. At
        the point of making this website it was taken offline but it did have
        views for both mobile and desktop.
      </OffcampusDescription>
      <WebsitePhotosContainer>
        <NonLinkWidescreenContainer>
          <OffcampusScreenTitle>Tutor Booking</OffcampusScreenTitle>
          <Image
            style={{ clipPath: "inset(0px 0px 0px 5px)" }}
            src={tutorBooking}
          />
        </NonLinkWidescreenContainer>
        <NonLinkWidescreenContainer>
          <OffcampusScreenTitle>Tutor Sessions</OffcampusScreenTitle>
          <Image src={tutorSessions} />
        </NonLinkWidescreenContainer>
        <NonLinkWidescreenContainer>
          <OffcampusScreenTitle>Tutor Chat</OffcampusScreenTitle>
          <Image
            style={{ clipPath: "inset(0px 2px 0px 0px)" }}
            src={tutorChat}
          />
        </NonLinkWidescreenContainer>
        <NonLinkWidescreenContainer>
          <OffcampusScreenTitle>Tutor View</OffcampusScreenTitle>
          <Image
            style={{ clipPath: "inset(0px 2px 0px 0px)" }}
            src={tutorView}
          />
        </NonLinkWidescreenContainer>
        <NonLinkWidescreenContainer>
          <OffcampusScreenTitle>View Questions</OffcampusScreenTitle>
          <Image
            style={{ clipPath: "inset(0px 0px 2px 0px)" }}
            src={question}
          />
        </NonLinkWidescreenContainer>
        <NonLinkWidescreenContainer>
          <OffcampusScreenTitle>View Question</OffcampusScreenTitle>
          <Image
            style={{ clipPath: "inset(0px 0px 0px 3px)" }}
            src={questionSingle}
          />
        </NonLinkWidescreenContainer>
        {
          //   <PhoneContainer
          //   target="_blank"
          //   href="https://pure-taiga-01859.herokuapp.com/"
          // >
          //   <OffcampusScreenTitle>Phone View</OffcampusScreenTitle>
          //   <Image src={phone} />
          // </PhoneContainer>
        }
      </WebsitePhotosContainer>
      <OffcampusInformationContainer>
        <OffcampusTechnicalInformation>
          <OffcampusSubtitle>Front End Details:</OffcampusSubtitle>
          <div>
            <Key>Framework </Key> - React
          </div>
          <p>
            <Key>State Management</Key> - Redux
          </p>
          <p>
            <Key>Styling</Key> - Scss & Bootstrap
          </p>
          <p>
            <Key>Deployment</Key> - Heroku
          </p>
          <p>
            <Key>Testing</Key> - Jest/Enzyme
          </p>
        </OffcampusTechnicalInformation>
      </OffcampusInformationContainer>
    </OffcampusContainer>
  )
}
