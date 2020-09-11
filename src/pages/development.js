import React from "react"
import styled from "styled-components"
import Layout from "components/layout"
import Introduction from "components/development/Introduction"
import MemoryBooks from "components/development/MemoryBooks"
import ProgressTracker from "components/development/ProgressTracker"
import Offcampus from "components/development/Offcampus"
import HabitTracker from "components/development/HabitTracker"

const DevelopmentContainer = styled.div``

export default function Development() {
  return (
    <Layout>
      <DevelopmentContainer>
        <Introduction />
        <MemoryBooks />
        <ProgressTracker />
        <Offcampus />
        <HabitTracker />
      </DevelopmentContainer>
    </Layout>
  )
}
