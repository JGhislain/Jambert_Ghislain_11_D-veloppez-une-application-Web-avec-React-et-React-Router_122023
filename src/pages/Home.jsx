//--------------------------------------------------------------------------------------//
//                                   Import de React                                    //
//--------------------------------------------------------------------------------------//

// ---- Import des Hooks -----------------------------------------------------------------

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Pour la navigation
import Homeimg from '../assets/img/home-photo.png'
import lodgesData from '../json/lodges.json'; // Chemin d'accès au fichier JSON

const HomePage = () => {
  // State pour stocker les données des logements
  const [lodges, setLodges] = useState([]);

  // Charger les données au montage du composant
  useEffect(() => {
    // Simuler le chargement des données
    setLodges(lodgesData); // Import des données du fichier JSON
  }, []);

  return (
    <main>
      <section className='home-page'>
        <h1 className='home-title'>KASA</h1>
        <div className="home-banner">
          <h2 className="banner-title">Chez vous, partout et ailleurs</h2>
          <img src={Homeimg} alt="Bannière acceuil Kasa" className="banner-logo"/>
        </div>
        <div className="home-article">
            {/* Générer la liste des logements */}
            {lodges.map((lodge) => (
              <div className='lodge-case' key={lodge.id}>
                {/* Chaque logement est un lien vers sa page de détail */}
                <Link className='lodge-link' to={`/lodges/${lodge.id}`}>
                  {/* Image du logement */}
                  <img className='lodge-img' src={lodge.cover} alt={lodge.title} />
                  {/* Titre du logement */}
                  <h2 className='lodge-title'>{lodge.title}</h2>
                </Link>
              </div>
            ))}
        </div>
      </section>
    </main>
  );
};

export default HomePage;