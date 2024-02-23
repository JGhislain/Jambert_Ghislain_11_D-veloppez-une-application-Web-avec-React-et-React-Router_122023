//--------------------------------------------------------------------------------------//
//                                   Import de React                                    //
//--------------------------------------------------------------------------------------//

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const RatingLodges = ({ rating }) => {
  // Créer un tableau pour représenter les étoiles avec FontAwesome
  const stars = Array.from({ length: 5 }, (_, index) => (
    // La clé "key" aide React à identifier quels éléments ont changé, sont ajoutés, ou sont supprimés
    // "className" conditionnelle pour appliquer la classe 'active' si l'index de l'étoile est inférieur à la note "rating"
    // Cela permet de différencier visuellement les étoiles "actives" (partie de la note) des inactives
    <FontAwesomeIcon key={index} icon={faStar} className={`star ${index < rating ? 'active' : ''}`}/>
  ));

  return (
    <div className="rating-container">
      {stars} {/* Affichage des étoiles dans le conteneur */}
    </div>
  );
};

export default RatingLodges;
