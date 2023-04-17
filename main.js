//die Latitude und Longitude des Stops werden in Varibalen geschrieben
let stop_lat = -43.5;
let stop_long = 170.22;
let zoom_factor = 5
let title = 'Der Franz-Joseph Gletscher'

const STOPS = [
    {
        title: "Christchurch",
        user: "manohog",
        lat: -43.531111,
        lng: 172.636667,
        wikipedia: "https://de.wikipedia.org/wiki/Christchurch"
    }, {
        title: "Lake Tekapo",
        user: "chris0810",
        lat: -43.883333,
        lng: 170.516667,
        wikipedia: "https://de.wikipedia.org/wiki/Lake_Tekapo",
    }, {
        title: "Moeraki Boulders",
        user: "Mirjamkirschner",
        lat: -45.345275,
        lng: 170.826061,
        wikipedia: "https://en.wikipedia.org/wiki/Moeraki_Boulders"
    }, {
        title: "Milford Sound",
        user: "julianple",
        lat: -44.616667,
        lng: 167.866667,
        wikipedia: "https://de.wikipedia.org/wiki/Milford_Sound/Piopiotahi"
    }, {
        title: "Wanaka",
        user: "sebastianv99",
        lat: -44.71,
        lng: 169.16,
        wikipedia: "https://de.wikipedia.org/wiki/Wanaka"
    }, {
        title: "Der Fox Gletscher",
        user: "grueneli",
        lat: -43.53,
        lng: 170.15,
        wikipedia: "https://de.wikipedia.org/wiki/Fox-Gletscher"
    }, {
        title: "Der Franz-Joseph Gletscher",
        user: "ttfg22",
        lat: -43.5,
        lng: 170.22,
        wikipedia: "https://de.wikipedia.org/wiki/Franz-Josef-Gletscher"
    }, {
        title: "Abel Tasman Nationalpark",
        user: "fabianwild",
        lat: -40.833333,
        lng: 172.9,
        wikipedia: "https://de.wikipedia.org/wiki/Abel-Tasman-Nationalpark"
    }, {
        title: "Picton",
        user: "LauraMap",
        lat: -41.293056,
        lng: 174.001944,
        wikipedia: "https://en.wikipedia.org/wiki/Picton,_New_Zealand"
    }, {
        title: "Die Hauptstadt von Neuseeland Wellington",
        user: "damerow",
        lat: -41.2875,
        lng: 174.7761,
        wikipedia: "https://de.wikipedia.org/wiki/Wellington",
    }, {
        title: "Tongariro-Nationalpark",
        user: "webmapping",
        lat: -39.2,
        lng: 175.583333,
        wikipedia: "https://de.wikipedia.org/wiki/Tongariro-Nationalpark"
    }, {
        title: "Rotorua",
        user: "juba1508",
        lat: "-38.136944",
        lng: "176.250833",
        wikipedia: "https://de.wikipedia.org/wiki/Rotorua"
    }, {
        title: "Auckland",
        user: "madeleinehll",
        lat: -36.833333,
        lng: 174.8,
        wikipedia: "https://de.wikipedia.org/wiki/Auckland"
    }];

console.log(STOPS);



//die map Variable wird festgelegt 
let map = L.map('map').setView([stop_lat, stop_long], zoom_factor); // Hier wird auf die Leaflet Map verwiesen; 13 steht für den z-Wert um den hinaus gezoomt wird-->

//define watercolour layer
let watercolour = L.tileLayer.provider('Stamen.Watercolor').addTo(map);
//define open street map layer
let osm = L.tileLayer.provider('OpenStreetMap.Mapnik').addTo(map)
//define airport layer 
let airports = L.tileLayer.provider('OPNVKarte').addTo(map)
//define terrain layer 
let terrain = L.tileLayer.provider('Stamen.Terrain').addTo(map);

//control the layer selection 
L.control.layers({
    "Openstreetmap": osm,
    "Watercolor": watercolour,
    "Airports": airports,
    "Terrain": terrain
}).addTo(map)

L.control.scale({
    imperial: false,
    position: "bottomleft"
})
    .addTo(map);

L.marker([stop_lat, stop_long]).addTo(map) //der Marker wird gesetzt
    .bindPopup(title) //das Pop Up wird erzeugt
    .openPopup();   //das Pop Up wird direkt geöffnet

for (let stop of STOPS) {
    //Marker erzeugen für den Stop 
    let marker = L.marker([stop.lat, stop.lng], {
        opacity: 1
    })//Erstellung des Makers 
        .addTo(map) //der Marker wird zur Karte hinzugefügt
        .bindPopup(`<h3>${stop.title}</h3>
        <a href="${stop.wikipedia}">Wikipedia</a>
        `); //das Pop Up wird erzeugt
    if (stop.user == 'ttfg22') {//wenn der User ttfg22 ist, wird das jeweilige Pop-Up geöffnet
        marker.openPopup();
    }
}