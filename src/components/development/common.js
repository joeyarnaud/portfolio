import styled from "styled-components"
import { FaGithub } from "react-icons/fa"
import { RiPagesLine } from "react-icons/ri"

export const WebsiteContainer = styled.section`
  padding: 4rem;
`

export const WebsiteTitle = styled.h2`
  font-size: 3rem;
  text-align: center;
`

export const WebsiteSubtitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 2rem;
`

export const WebsiteDescription = styled.p`
  font-size: 1.6rem;
  margin-top: 2rem;
  width: 60%;
  margin: 2rem auto;
`

export const WebsitePhotosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 2rem;
`

export const WideScreenContainer = styled.a`
  display: block;
  text-decoration: none;
  margin: 2rem 0;
  margin-right: 2rem;

  &:hover {
    cursor: pointer;
  }
`

export const NonLinkWidescreenContainer = styled.div`
  margin: 2rem 0;
  margin-right: 2rem;
`

export const WebsiteTechnicalInformation = styled.div`
  font-size: 1.6rem;
  color: ${props => props.theme.colors.colorWhite};
  margin: 2rem 0;
`

export const PhoneContainer = styled.a`
  display: block;
  text-decoration: none;
  margin: 2rem 0;
  margin-right: 1rem;

  &:hover {
    cursor: pointer;
  }
`

export const NoLinkPhoneContainer = styled.div`
  display: block;
  text-decoration: none;
  margin: 2rem 0;
  margin-right: 1rem;
`

export const ScreenTitle = styled.h3`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1rem;
`

export const Image = styled.img`
  height: 45rem;
  width: auto;
`

export const WebsiteInformationContainer = styled.div``

export const WebsiteLinks = styled.div``

export const WebsiteLink = styled.a`
  /* display: flex;
  flex-direction: column; */
  display: inline-block;
  text-decoration: none;
  text-align: center;
`

export const WebsiteLinkDescription = styled.p`
  font-size: 1.6rem;
`

export const GitHub = styled(FaGithub)`
  color: ${props => props.theme.colors.colorWhite};
  border-radius: 50%;
  font-size: 5rem;
`

export const Page = styled(RiPagesLine)`
  color: ${props => props.theme.colors.colorWhite};
  border-radius: 50%;
  font-size: 5rem;
`

export const Key = styled.div`
  display: inline-block;
  width: 20rem;
`
