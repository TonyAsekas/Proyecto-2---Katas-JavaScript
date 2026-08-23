// Elementos del HTML que voy a necesitar
const selectElement = document.getElementById('character-list');
const imageElement = document.querySelector('.character-image');

const API_URL = 'https://thronesapi.com/api/v2/Characters';

// Función principal asíncrona para pedir los datos a la API
async function getGameOfThronesCharacters() {
    try {
        const response = await fetch(API_URL);
        const characters = await response.json();
        
        fillSelectOptions(characters);
        
    } catch (error) {
        console.error('Error al obtener los datos:', error);
    }
}

// Función para rellenar el select con los personajes
function fillSelectOptions(charactersArray) {
    // Añado un primer elemento vacío por defecto
    const defaultOption = document.createElement('option');
    defaultOption.textContent = "Selecciona un personaje...";
    defaultOption.value = "";
    selectElement.appendChild(defaultOption);

    // Itero sobre el array de personajes y creo una opción para cada uno
    charactersArray.forEach(character => {
        const option = document.createElement('option');
        
        option.textContent = character.fullName; 
        option.value = character.imageUrl; 
        
        selectElement.appendChild(option);
    });
}

// Event listener al <select> para actualizar la imagen
selectElement.addEventListener('change', (event) => {
    const selectedImageUrl = event.target.value;

    if (selectedImageUrl) {
        imageElement.src = selectedImageUrl;
        imageElement.alt = `Imagen del personaje ${event.target.options[event.target.selectedIndex].text}`; 
    } else {
        // Si vuelve a la opción por defecto, ocultamos la imagen
        imageElement.src = "";
        imageElement.alt = "";
    }
});

// Arrancamos la aplicación
getGameOfThronesCharacters();