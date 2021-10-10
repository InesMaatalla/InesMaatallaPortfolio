import React from 'react';
import { useInView } from "react-intersection-observer";
import ModalImage from "react-modal-image";

import "animate.css"


const Destination = ({ imageSrc, title, subtitle, button, hide, flipped }) => {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });
  
  const renderContent = () => {
    
    if (!flipped) {
      return (
        <div>
        <div className="destination_content">
        <div className="destination_image" >
        <ModalImage 
          small={imageSrc} 
          medium={imageSrc} 
          large={imageSrc} 
          hideZoom={true}
          hideDownload={true}
        />
        </div>
        <br />
        <h2 className="destination_title">{title}</h2>
        <p>{subtitle}</p>
        
        <button className="modal-toggle" onClick={hide} >
            See more
        </button>

        </div>
        </div>
        );
        
        
      } else {
        return (
          <div>
          <div className="destination_content">
          <h2 className="destination_title">{title}</h2>
          <p>{subtitle}</p>
          <div className="destination_image" >
          <ModalImage 
            small={imageSrc} 
            medium={imageSrc} 
            large={imageSrc} 
            hideZoom={true}
            hideDownload={true}
          />
          </div>
          </div>
          </div>
          
          );
        }
      };
      
      return (
        <div className={inView ? "slider destination_zoom" : "slider"} ref={ref}>
        {renderContent()}
        </div>
        );
      };
      
      export default Destination;