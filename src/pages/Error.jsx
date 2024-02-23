//--------------------------------------------------------------------------------------//
//                                   Import de React                                    //
//--------------------------------------------------------------------------------------//
import React from 'react';
import { Link } from 'react-router-dom'; // Importation de Link depuis react-router-dom pour la navigation

// Définition du composant ErrorPage pour gérer l'affichage d'une erreur 404
const ErrorPage = () => {
  return (
  <div className='content-error'>
    <p className="text-error">404</p>
    <p className="desc-error">Oups! La page que vous demandez n'existe pas.</p>
    <Link className='home-link' to={'/'}>Retourner sur la page d'accueil</Link>
    </div>
  )
};

export default ErrorPage;