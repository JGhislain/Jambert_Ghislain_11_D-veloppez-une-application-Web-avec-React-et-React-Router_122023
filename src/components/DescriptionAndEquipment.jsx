//--------------------------------------------------------------------------------------//
//                                   Import de React                                    //
//--------------------------------------------------------------------------------------//

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

// Composant DescriptionAndEquipment affiche la description et les équipements d'un logement
const DescriptionAndEquipment = ({ description, equipments }) => {
  // Déclaration des états pour gérer l'affichage de la description et des équipements
  const [isDescOpen, setIsDescOpen] = useState(false); // État pour contrôler l'affichage de la description
  const [isEquipOpen, setIsEquipOpen] = useState(false); // État pour contrôler l'affichage des équipements

  return (
    <div className="desc-equip-component">
      {/* Section de la description avec un bouton pour l'afficher/cacher */}
      <div className={`description-component ${isDescOpen ? "open" : ""}`}>
        <button className='desc-button' onClick={() => setIsDescOpen(!isDescOpen)}>
            Description {isDescOpen ? <FontAwesomeIcon icon={faChevronDown} className='icon-chevron-details' /> : <FontAwesomeIcon icon={faChevronUp} className='icon-chevron-details' />}
        </button>
        {isDescOpen && <p className='contain-desc'>{description}</p>}
      </div>

      {/* Section des équipements avec un bouton pour l'afficher/cacher */}
      <div className={`equipment-component ${isEquipOpen ? "open" : ""}`}>
        <button className='equip-button' onClick={() => setIsEquipOpen(!isEquipOpen)}>
          Équipements {isEquipOpen ? <FontAwesomeIcon icon={faChevronDown} className='icon-chevron-details' /> : <FontAwesomeIcon icon={faChevronUp} className='icon-chevron-details' />}
        </button>
        {isEquipOpen && (
          <ul className='contain-equip'>
            {equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DescriptionAndEquipment;