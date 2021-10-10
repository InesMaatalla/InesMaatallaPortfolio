import React from "react";
import useModal from "./useModal";
import Modal from "./modal";

import Destination from "./Destination"

import "./Destination.css"
import "./DestinationModal.css"
import "./App.css"


import oleron from "../../images/oleron.jpeg";
import bicycleRiding from "../../images/bicycleRiding.jpeg";
import bretagne from "../../images/bretagne.jpeg";
import noirmoutier from "../../images/noirmoutier.jpeg";
import westernCanada from "../../images/westernCanada.jpeg";
import algonquin from "../../images/algonquin.jpeg";
import peninsula from "../../images/peninsula.jpeg";
import fjord from "../../images/fjord.jpeg";


export default function App() {
  const { isShowing: isOleronShowed, toggle: toggleOleron } = useModal();
  const { isShowing: isBicycleRidingShowed, toggle: toggleBicycleRiding } = useModal();
  const { isShowing: isBretagneShowed, toggle: toggleBretagne } = useModal();
  const { isShowing: isNoirmoutierShowed, toggle: toggleNoirmoutier} = useModal();
  const { isShowing: isWesternCanadaShowed, toggle: toggleWesternCanada } = useModal();
  const { isShowing: isAlgonquinShowed, toggle: toggleAlgonquin } = useModal();
  const { isShowing: isPeninsulaShowed, toggle: togglePeninsula  } = useModal();
  const { isShowing: isFjordShowed, toggle: toggleFjord } = useModal();
  
  return (
    
    <div className="App">
    <h1 className="image-destination">[Videos]</h1>
    <Destination
    imageSrc={oleron}
    title={"L'île d'Oléron - Ford Boyard"}
    subtitle={"I am creating the life of my dreams."}
    hide={toggleOleron}
    />
    
    <Modal
    isShowing={isOleronShowed}
    hide={toggleOleron}
    >
    <div className="wc-container">
    <h1>L'île d'Oléron - Ford Boyard</h1>
    <div className="video-body">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/L0-ygdfmj98" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>               
    </div>
    <div className="wc-body">
    
    <p>Here is the itinerary:</p>
    <ul className="list">
    <ul>- L'île d'Oléron</ul>
    <ul>- Ford Boyard</ul>
    </ul>
    </div>
    </div>
    </Modal>
    
    <Destination
    imageSrc={bicycleRiding}
    title={"Bicycle Riding"}
    subtitle={"I'm happy anywhere I can see the ocean."}
    hide={toggleBicycleRiding}
    />

    <Modal
    isShowing={isBicycleRidingShowed}
    hide={toggleBicycleRiding}
    >
    <div className="wc-container">
    <h1>Bicycle Riding</h1>
    <div className="video-body">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/HDz8Dl5bml4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
    <div className="wc-body">
    
    <p>Here is the itinerary:</p>
    <ul className="list">
    <ul>- Saint Jean de Monts</ul>
    <ul>- Saint Hilaire de Riez</ul>
    <ul>- Saint Gilles Croix de Vie</ul>
    </ul>
    </div>
    </div>
    </Modal>
    
    <Destination
    imageSrc={bretagne}
    title={"Bretagne - Normandie"}
    subtitle={"I don't know where I'm going but I'm on my way."}
    hide={toggleBretagne}
    />
   
    <Modal
    isShowing={isBretagneShowed}
    hide={toggleBretagne}
    >
    <div className="wc-container">
    <h1>Bretagne - Normandie</h1>
    <div className="video-body">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/0VVYmAWS71Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
    <div className="wc-body">
    
    <p>Here is the itinerary:</p>
    <ul className="list">
    <ul>- Perros Guirec</ul>
    <ul>- Saint Malo</ul>
    <ul>- Mont Saint Michel</ul>
    </ul>
    </div>
    </div>
    </Modal>
    
    <Destination
    imageSrc={noirmoutier}
    title={"L'île de Noirmoutier"}
    subtitle={"Ocean air, salty hair, sandy toes, anything goes."}
    hide={toggleNoirmoutier }
    />
    
    <Modal
    isShowing={isNoirmoutierShowed}
    hide={toggleNoirmoutier }
    >
    <div className="wc-container">
    <h1>L'île de Noirmoutier</h1>
    <div className="video-body">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/TtTBi7iiYbY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>    </div>
    <div className="wc-body">
    
    <p>Here is the itinerary:</p>
    <ul className="list">
    <ul>- L'île de Noirmoutier</ul>
    </ul>
    </div>
    </div>
    </Modal>
    <Destination
    imageSrc={westernCanada}
    title={"Western Canada"}
    subtitle={"Drove 13 500 km to discover gorgeous places. It’s a long ride but it’s worth it."}
    hide={toggleWesternCanada }
    />
   
    <Modal
    isShowing={isWesternCanadaShowed}
    hide={toggleWesternCanada }
    >
    <div className="wc-container">
    <h1>WESTERN CANADA</h1>
    <div className="video-body">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/1h1vmPuOv-s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>          </div>
    <div className="wc-body">
    
    <p>Here is the itinerary:</p>
    <ul className="list">
    <ul>- Montréal, QC</ul>
    <ul>- Mont-Riding National Park, MB</ul>
    <ul>- Prince Albert National Park, SK</ul>
    <ul>- Calgary, AB</ul>
    <ul>- Banff, AB</ul>
    <ul>- Jasper, AB</ul>
    <ul>- Whistler, BC</ul>
    <ul>- Vancouver, BC</ul>
    </ul>
    </div>
    </div>
    </Modal>
    
    <Destination
    imageSrc={algonquin}
    title={"Algonquin & Bon Echo Park"}
    subtitle={"Leave the road, take the trails."}
    hide={toggleAlgonquin }
    />
    
    <Modal
    isShowing={isAlgonquinShowed}
    hide={toggleAlgonquin }
    >
    <div className="wc-container">
    <h1>Algonquin & Bon Echo Park</h1>
    <div className="video-body">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/ALjURBuY6Bw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>          </div>
    <div className="wc-body">
    
    <p>Here is the itinerary:</p>
    <ul className="list">
    <ul>- Algonquin Park</ul>
    <ul>- Bon Echo Park</ul>
    </ul>
    </div>
    </div>
    </Modal>
    
    <Destination
    imageSrc={peninsula}
    title={"Bruce Peninsula Park"}
    subtitle={"Meet me where the sky touches the sea."}
    hide={togglePeninsula }
    />
    
    <Modal
    isShowing={isPeninsulaShowed}
    hide={togglePeninsula }
    >
    <div className="wc-container">
    <h1>Bruce Peninsula Park</h1>
    <div className="video-body">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/3knvPVoLYdA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>          </div>
    <div className="wc-body">
    
    <p>Here is the itinerary:</p>
    <ul className="list">
    <ul>- Bruce Peninsula PArk</ul>
    <ul>- Flowerpot Island</ul>
    </ul>
    </div>
    </div>
    </Modal>
    
    <Destination
    imageSrc={fjord}
    title={"Fjord Saguenay"}
    subtitle={"Exploring Canadian life."}
    hide={toggleFjord}
    />
   
    <Modal
    isShowing={isFjordShowed }
    hide={toggleFjord}
    >
    <div className="wc-container">
    <h1>Fjord Saguenay</h1>
    <div className="video-body">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/jbMuQNMGzsI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>      </div>
    <div className="wc-body">
    
    <p>Here is the itinerary:</p>
    <ul className="list">
    <ul>- Fjord Saguenay</ul>
    </ul>
    </div>
    </div>
    </Modal>
    </div> 
    );
  }
  