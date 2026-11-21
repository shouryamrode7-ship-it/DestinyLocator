mapboxgl.accessToken = mapToken;

const coordinates =
  listing?.geometry?.coordinates?.length === 2
    ? listing.geometry.coordinates
    : [78.4867, 17.3850]; // [lng, lat] fallback

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v12",
  center: coordinates,
  zoom: 9,
});

const marker1 = new mapboxgl.Marker({ color: "red" })
  .setLngLat(coordinates)
  .setPopup(
    new mapboxgl.Popup({ offset: 25, className: "my-class" })
      .setHTML(`<h5>${listing.title}</h5><p>${listing.location}, ${listing.country}</p>`)
      .setMaxWidth("300px")
  )
  .addTo(map);