//--------------------------------------------------------------------------------------//
//                                   Import de React                                    //
//--------------------------------------------------------------------------------------//

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

// Le composant ToggleTextAbout prend en props 'title' et 'content' pour afficher un titre et un contenu dépliable
const ToggleTextAbout = ({ title, content }) => {
  // Utilisation du hook useState pour gérer l'état ouvert/fermé du contenu dépliable
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="about-toggle-text">
      {/* Bouton qui, lorsqu'il est cliqué, inverse l'état de isOpen grâce à setIsOpen */}
      <button className='button-toggle-text' onClick={() => setIsOpen(!isOpen)}>
      {/* Affiche le titre et change l'icône en fonction de l'état isOpen */}
      {title}{isOpen ? <FontAwesomeIcon icon={faChevronDown} className='icon-chevron-details' /> : <FontAwesomeIcon icon={faChevronUp} className='icon-chevron-details' />}
      </button>
      {/* Affiche le contenu si isOpen est vrai */}
      {isOpen && <p className='content-toggle-text'>{content}</p>}
    </div>
  );
};

export default ToggleTextAbout;
