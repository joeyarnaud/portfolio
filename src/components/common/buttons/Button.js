import React from "react"
import styled from "styled-components"

const Btn = styled.button`
  padding: 0.5rem 2rem;
  font-family: ${props => props.theme.fonts.openSans};

  &:hover {
    cursor: pointer;
  }
`

export default function Button(props) {
  return <Btn>{props.children}</Btn>
}
