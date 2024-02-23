//--------------------------------------------------------------------------------------//
//                                   Import de React                                    //
//--------------------------------------------------------------------------------------//

import React from 'react';

// Composant TagsLodges pour afficher les tags d'un logement
const TagsLodges = ({ tags }) => {
  return (
    <div className="tags-container">
      {/* Map sur chaque tag pour créer un élément span pour chaque tag */}
      {tags.map((tag, index) => (
        <div key={index} className="border-tag">
          <span className="tag">{tag}</span>
        </div>
      ))}
    </div>
  );
};

export default TagsLodges;
