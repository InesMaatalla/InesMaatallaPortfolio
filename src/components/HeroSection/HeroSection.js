import React from "react"
import "./HeroSection.css"
import { Button } from "../Button/ButtonHero"
import { Link } from "gatsby"
import "animate.css"


function HeroSection() {
  return (
    <div className="hero-container">
      <h1 className="animate__animated animate__zoomIn">Sea the World</h1>
      <div className="hero-btns">
      <Link to='/Destinations' className='nav-links'>
      <Button className="animate__animated animate__slideInUp" fontBig big primary>
        Get Started
      </Button>
    </Link>
      
 
      </div>
    </div>
  );
}

export default HeroSection;