//selecciono la etiqueta img del HTML
const imageElement = document.querySelector('.random-image');

async function getRandomPokemon() {
    try {
        //generamos un número aleatorio entre 1 y 151
        // Math.random() da un decimal entre 0 y 1. 
        // Multiplicamos por 151, redondeamos hacia abajo (floor) y sumamos 1.
        const randomId = Math.floor(Math.random() * 151) + 1;
        
        //construyo la URL de la API usando el número aleatorio
        const apiUrl = `https://pokeapi.co/api/v2/pokemon/${randomId}`;

        //petición a la API
        const response = await fetch(apiUrl);
        const data = await response.json();

        //Busco la imagen
        const imageUrl = data.sprites.other['official-artwork'].front_default;

        //asigno la imagen y el texto alternativo
        imageElement.src = imageUrl;
        imageElement.alt = `Imagen del Pokémon ${data.name}`;

    } catch (error) {
        //por si da error
        console.error('Error al obtener el Pokémon:', error);
        imageElement.alt = 'Error al cargar el Pokémon';
    }
}

getRandomPokemon();