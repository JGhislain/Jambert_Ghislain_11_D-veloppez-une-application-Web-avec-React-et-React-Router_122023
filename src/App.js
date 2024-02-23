//--------------------------------------------------------------------------------------//
//                                   Import de React                                    //
//--------------------------------------------------------------------------------------//

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importation des composants de page personnalisés
import Header from './components/Header'; 
import Footer from './components/Footer'; 
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import LogesPage from './pages/Loges';
import ErrorPage from './pages/Error';

// Importation du fichier CSS principal pour le style global
import './App.css';

// Définition du composant principal App
function App() {
  return (
    // Le Router englobe toute l'application pour permettre la navigation
    <Router>
      <div className="App">
        <Header /> {/* Affichage du composant Header en haut de chaque page */}
        <Routes> {/* Définition des routes de l'application */}
          <Route path="/" element={<HomePage />}/> {/* Route pour la page d'accueil */}
          <Route path="/lodges/:id" element={<LogesPage />}/> {/* Route pour la page loges.js */}
          <Route path="*" element={<ErrorPage />}/> {/* Route pour la page d'erreur 404 */}
          <Route path="/about" element={<AboutPage />}/> {/* Route pour la page À propos */}
        </Routes>
        {/* Affichage du composant Footer en bas de chaque page */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
