import React from 'react';
import CardItem from './CardItem';
import Portfolio from "../../images/portfolio.png"
import Papelitos from "../../images/papelitos.png"
import Partybus from "../../images/partybus.png"
import MonsterRolodex from "../../images/monster-rolodex.png"
import CrownClothing from "../../images/crown-clothing.png"
import WebsiteEvent from "../../images/website-event.png"
import WebsiteAuction from "../../images/website-auction.png"
import "animate.css"
import "./Cards.css"



function Cards() {
  return (
    <div className='cards'>
      <h1 className="project animate__animated animate__pulse">[Projects]</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <CardItem
              src={WebsiteEvent}
              text='A website event with PHP, Symfony, JavaScript, MySQL, WampServer.'
              label='Website Event'
              path='https://github.com/InesMaatalla/Website-Event'
            />
          <CardItem
              src={WebsiteAuction}
              text='A website auction with Java, JavaScript, SQLServer, Tomcat.'
              label='Website Auction'
              path='https://github.com/InesMaatalla/Website-auction'
            />
            <CardItem
              src={CrownClothing}
              text='Builded an E-commerce app with React, Redux, Hooks, GraphQL, ContextAPI, Stripe and Firebase.'
              label='CRWN Clothing'
              path='https://king-ecommerce.herokuapp.com/'
            />
            </ul>  
            <ul className='cards__items'>
            <CardItem
            src={MonsterRolodex}
            text='Search monsters with React. Try it !'
            label='Monsters Rolodex'
            path='https://inesmaatalla.github.io/monster-rolodex/'
          />
            <CardItem
              src={Portfolio}
              text='Explore my portfolio, designed on Figma and coded with Gatsby.'
              label='Portfolio'
              path='https://www.inesmaatalla.com'
            />
            <CardItem
              src={Papelitos}
              text='A multiplayer app that will manage everybody’s papelitos: team delegation, score, timer and rounds. Using Ruby on Rails.'
              label='Papelitos'
              path='http://www.papelitos.fun/users/sign_in'
            />
            <CardItem
              src={Partybus}
              text='Coded a clone of Airbnb. Using Ruby on Rails and the worflow Heroku.'
              label='Partybus'
              path='https://airbnb-clone-partybus.herokuapp.com'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;