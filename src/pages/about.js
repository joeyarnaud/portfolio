import React from "react"
import Layout from "components/layout"
import ContactInfoAndLinks from "components/about/ContactInfoAndLinks"
import Bio from "components/about/Bio"
import Education from "components/about/Education"
import Skills from "components/about/Skills"
import Achievements from "components/about/Achievements"

export default function About() {
  return (
    <Layout>
      <ContactInfoAndLinks />
      <Bio />
      <Education />
      <Skills />
      <Achievements />
    </Layout>
  )
}
