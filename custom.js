// JavaScript for enabling the map on load. Change the access token and the web page.

mapboxgl.accessToken =
  "pk.eyJ1IjoiaWxhbWFuaXNoIiwiYSI6ImNsMXQ4eDliMzB6N3kzb3FxbzY3ZmN5bDYifQ.swLACYH2fKaTe93_6hQ5sg";

window.onload = function () {
  const map = new mapboxgl.Map({
    container: "map", // container ID
    style: "mapbox://styles/joostburgers/cl1w8a046000q14rrrewcwdem", // style URL
    center: [77.0688997, 20.5272803], // starting position [lng, lat]
    zoom: 4, // starting zoom
  });
};
