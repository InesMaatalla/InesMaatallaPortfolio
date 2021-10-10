import React from "react";
import { Button } from "../Button/ButtonDestination"
import contact from "../../images/contact.svg"

export default function Form() {
  return (
   
        <div className="contact-container">
        
        <img src={contact} alt="contact" className="contact-photo" />
        <form name="contact" method="post" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label htmlFor="name">Name :</label> 
          <input type="text" id="name" name="name" required />
          </p>
        <p>
          <label htmlFor="email">Email :</label> 
          <input type="email" id="email" name="email" required />
        </p>
        <p>
          <label htmlFor="message">Message :</label>
          <textarea id="message" name="message" required></textarea>
        </p>
        <p>
          <Button type="submit" fontBig big primary>Submit</Button>
        </p>
      </form>
    
    </div>
    );
  }