// 1. Einzelnen Marker setzen
const lat = 47.8128;
const lng = 13.0456;
const marker = L.marker([lat, lng]).addTo(map);
marker.bindPopup('<b>Salzburg Hauptbahnhof</b><br>Koordinate: 47.8128, 13.0456');

// 2. Mehrere Punkte aus einer Liste (Array) als Kreise einzeichnen
const standorte = [
  { ort: 'Wien', lat: 48.2082, lng: 16.3738, anzahl: 15 },
  { ort: 'Berlin', lat: 52.5200, lng: 13.4050, anzahl: 28 },
  { ort: 'München', lat: 48.1351, lng: 11.5820, anzahl: 12 }
];

standorte.forEach(p => {
  L.circleMarker([p.lat, p.lng], {
    radius: 7,
    color: '#c2410c',
    fillColor: '#ea580c',
    fillOpacity: 0.8
  }).addTo(map).bindPopup(`<b>${p.ort}</b><br>Ereignisse: ${p.anzahl}`);
});
