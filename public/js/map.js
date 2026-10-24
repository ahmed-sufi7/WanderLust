const mapElement = document.getElementById("map");
const mapToken = mapElement.dataset.mapToken;
const coordinates = JSON.parse(mapElement.dataset.coordinates);
const listingTitle = mapElement.dataset.title;

const map = new mapboxgl.Map({
  accessToken: mapToken,
  container: "map", // container ID
  style: "mapbox://styles/mapbox/streets-v12",
  center: coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
  zoom: 9, // starting zoom
});

const marker = new mapboxgl.Marker({ color: "red" })
  .setLngLat(coordinates)
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }).setHTML(
      `<h4>${listingTitle}</h4><p>Exact location will be provided after booking`,
    ),
  )
  .addTo(map);
