//--------------------------------------------------------------------------------------//
//                                   Import de React                                    //
//--------------------------------------------------------------------------------------//

import React from 'react';
import Aboutimg from '../assets/img/about-photo.png'
import ToggleTextAbout from '../components/ToogleTextAbout'; // Importation du composant ToggleTextAbout qui permet d'afficher du texte qui peut être masqué/affiché

// Définition du composant fonctionnel AboutPage
const AboutPage = () => {
  return (
    <main>
      <h1 className='about-title'>À propos de Kasa</h1>
      <img src={Aboutimg} alt="Bannière à propos Kasa" className="banner-logo"/>
      <div className="main-about">

          <ToggleTextAbout 
            title="Fiabilité" 
            content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." />

          <ToggleTextAbout 
            title="Respect" 
            content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>

          <ToggleTextAbout 
            title="Service" 
            content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />

          <ToggleTextAbout 
            title="Sécurité" 
            content="La sécurité est la prorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
      </div>
    </main>
  );
};

export default AboutPage;