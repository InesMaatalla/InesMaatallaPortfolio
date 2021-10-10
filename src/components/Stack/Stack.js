import React from "react"
import { FcApproval} from "react-icons/fc"
import Typical from "react-typical"

import "./Stack.css"
import "animate.css"


const Stack = () => {
    return (
        <div className="stack-container">
            <p className="top-line animate__animated animate__pulse" >
                [Stacks]
            </p>
           
            <Typical className="desc-1"
                steps={['', 1000, 'Languages and Frameworks', 500]}
                wrapper="p"
            />
            <div className="content-wrapper">
                <div className="stack">
                    <FcApproval className="icon-1"/>
                    <h3>Languages</h3>
                    <p> Ruby on Rails, Java, PHP, C#, HTML, CSS, JavaScript</p>
                </div>
                <div className="stack">
                        <FcApproval className="icon-1"/>
                        <h3>Environments</h3>
                        <p>Intelli J, WebStorm, PHPStorm, Eclipse, Android Studio</p>
                    </div>
                <div className="stack">
                        <FcApproval className="icon-1"/>
                        <h3>Frameworks / Platforms</h3>
                        <p>React, Angular, JQuery, Symfony, Spring, Tomcat, JPA, Hibernate, Xamarin, <br/>
                        Ionic, ASP.net, Apache under Linux</p>
                    </div>
                <div className="stack">
                        <FcApproval className="icon-1"/>
                        <h3>CMS</h3>
                        <p>Wordpress</p>
                    </div>
                <div className="stack">
                        <FcApproval className="icon-1"/>
                        <h3>Methods</h3>
                        <p>Oracle CDM, Scrum, UML</p>
                    </div>
                <div className="stack">
                        <FcApproval className="icon-1"/>
                        <h3>DataBases</h3>
                        <p>MySQL, SQLServer, Oracle</p>
                    </div>
                <div className="stack">
                        <FcApproval className="icon-1"/>
                        <h3>OS</h3>
                        <p>Mac, Windows</p>
                </div>
                <div className="stack">
                        <FcApproval className="icon-1"/>
                        <h3>Modelisation</h3>
                        <p>UI / UX Design, Video Editing (GoPro)</p>
                </div>            
            </div>
        </div>
    )
}
export default Stack;