//--------------------------------------------------------------------------------------//
//                                   Import de React                                    //
//--------------------------------------------------------------------------------------//

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import lodgesData from '../json/lodges.json'; 
import DescriptionAndEquipment from '../components/DescriptionAndEquipment';
import RatingLodges from '../components/RatingLodges';
import TagsLodges from '../components/TagsLodges';
import Carousel from '../components/Carousel';
import ErrorPage from './Error';

// Composant LodgeDetails pour afficher les détails d'un logement spécifique
const LodgeDetails = () => {
  const { id } = useParams(); // Récupère l'ID du logement depuis l'URL grâce au hook useParams
  const [lodge, setLodge] = useState(null); // État local pour stocker les informations du logement actuel

  // Effet pour charger les données du logement correspondant à l'ID de l'URL
  useEffect(() => {
    const foundLodge = lodgesData.find((l) => l.id === id); // Recherche du logement dans les données JSON
    setLodge(foundLodge); // Mise à jour de l'état avec les données trouvées
  }, [id]);

  // Gestion de l'affichage en attendant le chargement des données
  if (!lodge) return <ErrorPage/>; // Si aucun logement n'est trouvé, affiche la page d'erreur

  // Préparation des images pour le Carousel
  const allImages = Array.isArray(lodge.pictures) ? lodge.pictures : [];

  return (
    <main>
      <Carousel images={allImages} /> {/* Carousel pour afficher les images du logement */}
      <div className="all-description"> {/* Conteneur pour la description du logement et autres informations */}
        <div className="lodge-description"> {/* Informations principales et photo du vendeur */}
          <div className="title-lodge-local">
            <h1 className='lodge-name'>{lodge.title}</h1>
            <p className='lodge-local'>Localisation : {lodge.location}</p>
          </div>
          <div className='lessor-details'>
            <p className='lessor-name'>{lodge.host.name}</p> {/* Nom du vendeur */}
            <img className='lessor-photo' src={lodge.host.picture} alt={lodge.host.name} /> {/* Image du vendeur */}
          </div>
        </div>
        <div className="rating-tags">{/* Tags et évaluation du logement */}
          <TagsLodges tags={lodge.tags} />
          <RatingLodges rating={parseInt(lodge.rating)} />
        </div>
        <DescriptionAndEquipment description={lodge.description} equipments={lodge.equipments}/> {/* Composant pour afficher la description et les équipements */}
      </div>
    </main>
  );
};

export default LodgeDetails;
