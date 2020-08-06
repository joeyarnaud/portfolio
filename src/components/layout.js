import React from "react"
import { darken } from "polished"
import { createGlobalStyle, ThemeProvider } from "styled-components"

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;1,800&display=swap');

  * {
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 67%;
    font-family: 'Lato', sans-serif;
  }

  body {
    background-color: ${darken(0.1, "#fff")};
  }
`

export const theme = {
  colors: {
    colorWhite: "#fff",
    colorBlack: "#000",
    colorGrayDark: "#A8A8A8",
    colorPrimary: "#345980",
    colorLightGreen: "#7EFF7C",
  },
  fonts: {
    openSans: "'Open Sans', sans-serif",
  },
  breakpoints: {
    largestScreen: "1690px",
    largeScreen: "1280px",
    mediumScreen: "980px",
    smallScreen: "736px",
    phoneScreen: "480px",
  },
  zIndex: {
    loader: "9999",
    overlay: "9990",
    header: "1040",
    important: "10",
    aboveBase: "1",
  },
  borders: {
    borderRadiusLarge: "30px",
    borderRadiusMedium: "20px",
    borderRadiusSmall: "10px",
  },
  fontSizes: {
    fontSizeXL: "3rem",
    fontSizeLg: "2rem",
    prominent: "1.4rem",
    prominent2: "1.6rem",
  },
}

export default ({ children }) => (
  <React.Fragment>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </React.Fragment>
)
