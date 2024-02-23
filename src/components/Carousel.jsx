//--------------------------------------------------------------------------------------//
//                                   Import de React                                    //
//--------------------------------------------------------------------------------------//

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Carousel = ({ images }) => {
    // images est un tableau des URLs d'images pour un logement spécifique

    // Index de l'image courante dans le carrousel, initialisé à 0
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Vérifie s'il y a plus d'une image pour activer la navigation du carrousel
    const hasMultipleImages = images.length > 1;

    const goToPrevious = () => {
        // Change à l'image précédente ou à la dernière si on est à la première image
        const isFirstImage = currentImageIndex === 0;
        const newIndex = isFirstImage ? images.length - 1 : currentImageIndex - 1;
        setCurrentImageIndex(newIndex);
    };

    const goToNext = () => {
        // Change à l'image suivante ou revient à la première si on est à la dernière image
        const isLastImage = currentImageIndex === images.length - 1;
        const newIndex = isLastImage ? 0 : currentImageIndex + 1;
        setCurrentImageIndex(newIndex);
    };

    return (
        <div className="carousel">
            {/* Afficher le bouton précédent si plusieurs images */}
            {hasMultipleImages && <button onClick={goToPrevious} className='button-carousel left-carousel'>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>}
            {/* Afficher l'image courante */}
            <img src={images[currentImageIndex]} alt="Logement" className='img-carousel' />
            {/* Afficher le bouton suivant si plusieurs images */}
            {hasMultipleImages && <button onClick={goToNext} className='button-carousel right-carousel'>
                <FontAwesomeIcon icon={faChevronRight} />                    
            </button>}
            {/* Afficher l'index des images si plusieurs images */}
            {hasMultipleImages && (
                <div className="carousel-index">
                    {currentImageIndex + 1} / {images.length}
                </div>
            )}
        </div>
    );
};

export default Carousel;
