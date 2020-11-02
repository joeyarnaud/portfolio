import React from "react"
import styled from "styled-components"

const Container = styled.div`
  position: relative;
`

const Overlay = styled.div`
  background-color: #343a40;
  opacity: 0.2;
  width: fit-content;
`

const OverlayText = styled.h3`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 30rem;
  transform: translate(-50%, -50%);
  font-size: 4rem;
  color: #fff;
  z-index: 100;
  opacity: 1;
  text-align: "center";
`

export default function CurrentlyDown({ children }) {
  return (
    <Container>
      <OverlayText>Currently Down</OverlayText>
      <Overlay>{children}</Overlay>
    </Container>
  )
}
