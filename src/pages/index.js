import * as React from "react"
import HeroSection from "../components/HeroSection/HeroSection"
import Form from "../components/Contact/Form"
import NavBar from "../components/NavBar/NavBar"
import Footer from "../components/Footer/Footer"

import "../components/Contact/Form.css"
import "../components/Portfolio/Portfolio.css"
import "../components/Image/Image.css"

const IndexPage = () => {
  return (
    <main>
    <NavBar/>
    <HeroSection/>

    <h1>[Keep in touch]</h1>
    <Form />
    <Footer/>
    </main>
  )
}

export default IndexPage
