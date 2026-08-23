/*Dado el siguiente javascript, utiliza .filter() para mostrar por consola
los streamers que incluyan la palabra introducida en el input. De esta forma, si
introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.*/
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
const inputFilter = document.querySelector('[data-function="toFilterStreamers"]');

inputFilter.addEventListener('input', (event) => {
    
    const keyword = event.target.value.toLowerCase();

    const filteredStreamers = streamers.filter(streamer => {
        
        return streamer.name.toLowerCase().includes(keyword);
    });

    console.log("Coincidencias encontradas:", filteredStreamers);
});