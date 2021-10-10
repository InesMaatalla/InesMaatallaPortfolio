import * as React from "react"
import App from "../components/Destination/App"
import NavBar from "../components/NavBar/NavBar"
import Footer from "../components/Footer/Footer"

import "../components/Portfolio/Portfolio.css"

const Destinations = () => {
  return (
    <main>
    <NavBar/>
    <div className="destinations">
    <h1 className="animate__animated animate__zoomIn" >Destinations</h1>
    </div>
    <App/>
    <Footer/>
    </main>
  )
}

export default Destinations
