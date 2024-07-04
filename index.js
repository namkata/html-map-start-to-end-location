// Initialize the map and set its view to the center of Ho Chi Minh City
var map = L.map('map').setView([10.762622, 106.660172], 13); // lat, lon HCM

// Add the OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Function to add routing control
function addRoutingControl(map) {
    L.Routing.control({
        waypoints: [
            L.latLng(10.799539, 106.692217), // Phan Xich Long, Ho Chi Minh (lat, lon)
            L.latLng(10.762622, 106.660172)  // Bitexco, Ho Chi Minh (lat, lon)
        ],
        routeWhileDragging: true
    }).addTo(map);
}

// Add routing control to the map
addRoutingControl(map);
