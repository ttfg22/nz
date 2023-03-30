//die Latitude und Longitude des Stops werden in Varibalen geschrieben
let stop_lat = -43.5;
let stop_long = 170.22;
let zoom_factor = 13
let title = 'Der Franz-Joseph Gletscher'

const STOPS = ['Fox Gletscher','Der Franz-Joseph Gletscher','Abel Tasman Nationalpark'];
console.log(STOPS);
console.log(STOPS[0]);
console.log(STOPS[1]);
console.log(STOPS[2]);
console.log(STOPS.length)


//die map Variable wird festgelegt 
let map = L.map('map').setView([stop_lat, stop_long], zoom_factor); // Hier wird auf die Leaflet Map verwiesen; 13 steht für den z-Wert um den hinaus gezoomt wird-->

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map); //hier wird die Hintergrundkarte eingestellt

L.marker([stop_lat, stop_long]).addTo(map) //der Marker wird gesetzt
    .bindPopup(title) //das Pop Up wird erzeugt
    .openPopup();   //das Pop Up wird direkt geöffnet