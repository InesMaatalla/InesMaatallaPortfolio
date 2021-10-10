import * as React from "react"
import AboutMe from "../components/About/AboutMe"
import NavBar from "../components/NavBar/NavBar"
import Footer from "../components/Footer/Footer"
import Stack from "../components/Stack/Stack"
import Cards from "../components/Cards/Cards"


import "../components/Portfolio/Portfolio.css"
import "../components/About/Aboutme.css"

const About = () => {
  return (
    <main>
    <NavBar/>
    <AboutMe/>
    <Stack/>
    <Cards />
    <Footer/>
    </main>
  )
}

export default About
