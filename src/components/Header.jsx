//--------------------------------------------------------------------------------------//
//                                   Import de React                                    //
//--------------------------------------------------------------------------------------//

import React from 'react';
import { NavLink } from 'react-router-dom'; // Importation de NavLink pour la gestion des liens
import Logotitle from '../assets/img/title.png'
import '../App.css';

// Définition du composant Header
const Header = () => {
  return (
    <header className="header">
      <img src={Logotitle} alt="Logo Kasa" className="header-logo"/>
      <nav className="navbar">
        {/* Utilisation de NavLink pour le lien vers la page d'accueil */}
        {/* La classe active-nav-link est appliquée au lien actif grâce à isActive */}
        <p className='nav-text'>
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-link link-home active-nav-link" : "nav-link"}>Accueil</NavLink>
        </p>
        <p href='/about' className='nav-text'>
          <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link link-about active-nav-link" : "nav-link"}>À Propos</NavLink>
        </p>
      </nav>
    </header>
  );
};

export default Header;
