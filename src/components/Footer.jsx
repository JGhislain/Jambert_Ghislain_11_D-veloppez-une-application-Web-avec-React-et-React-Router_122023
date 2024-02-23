//--------------------------------------------------------------------------------------//
//                                   Import de React                                    //
//--------------------------------------------------------------------------------------//

import React from 'react';
import Logofooter from '../assets/img/logo-footer.png'
import '../App.css';

// Définition du composant Footer
const Footer = () => {
  return (
    <footer className='footer'>
      <img src={Logofooter} alt="Logo Kasa" className="footer-logo"/>
      {/* Contenu du footer, comme des informations de contact, droits d'auteur, etc. */}
      <p className='copyright'>© 2023 Kasa. All rights reserved.</p>
    </footer>
  );
};

export default Footer;