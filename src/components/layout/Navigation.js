import React, { useState } from "react"
import styled from "styled-components"
import { GiHamburgerMenu } from "react-icons/gi"
import { RiComputerLine } from "react-icons/ri"
import { FaInfoCircle } from "react-icons/fa"
import { GrContact } from "react-icons/gr"
import Modal from "react-modal"
import { Link } from "gatsby"

const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
  content: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50rem",
    height: "50rem",
    border: "none",
    background: "rgba(255, 255, 255, 0.7)",
    borderRadius: "30px",
    animation: `modalOut 0.5s`,
    overflow: "hidden",
  },
}

const NavButton = styled.button`
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  border: none;
  color: #0e174d;
  font-size: 3rem;
  padding: 2rem;
  position: fixed;
  right: 4rem;
  top: 4rem;
  width: 5rem;
  height: 5rem;
  z-index: 1;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`

const ModalContainer = styled.div`
  z-index: 11;
`

const ModalCenter = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const ModalLink = styled(Link)`
  display: block;
  text-align: center;
  text-decoration: none;
  font-size: 2.5rem;
  padding: 1.5rem;
  color: #0e174d;
`

export default function Navigation() {
  const [isOpen, toggleOpen] = useState(false)
  return (
    <React.Fragment>
      {!isOpen && (
        <NavButton onClick={() => toggleOpen(true)}>
          <GiHamburgerMenu
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </NavButton>
      )}
      <Modal
        isOpen={isOpen}
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => toggleOpen(false)}
        closeTimeoutMS={500}
        style={customStyles}
      >
        <ModalContainer>
          <ModalCenter>
            <ModalLink to="/development">
              Development <RiComputerLine />{" "}
            </ModalLink>
            <ModalLink to="/">
              About <FaInfoCircle />
            </ModalLink>
            <ModalLink to="/contact">
              Contact <GrContact />
            </ModalLink>
          </ModalCenter>
        </ModalContainer>
      </Modal>
    </React.Fragment>
  )
}
