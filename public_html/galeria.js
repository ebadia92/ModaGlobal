/**
 * Engrandeix una imatge quan es fa clic sobre ella
 */
function engrandirImatge(img) {
    // Comprova si la imatge ja està engrandida
    if (img.classList.contains('imatge-gran')) {
        // Si està engrandida, la tornem a fer petita
        img.classList.remove('imatge-gran');
        img.classList.add('imatge-petita');
    } else {
        // Si està petita, l'engranim
        img.classList.remove('imatge-petita');
        img.classList.add('imatge-gran');
    }
}

/**
 * Inicialitza la galeria quan es carrega la pàgina
 */
function inicialitzarGaleria() {
    console.log('Galeria inicialitzada');
    
    // Obtenir totes les imatges de la galeria
    const imatges = document.querySelectorAll('.imatge-petita');
    
    // Afegir event listener a cada imatge
    imatges.forEach(function(img) {
        img.addEventListener('click', function() {
            engrandirImatge(this);
        });
    });
}

// Executar quan el DOM estigui carregat
document.addEventListener('DOMContentLoaded', inicialitzarGaleria);