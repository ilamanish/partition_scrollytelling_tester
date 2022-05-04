// JavaScript for enabling the map on load. Change the access token and the web page.

mapboxgl.accessToken = 'pk.eyJ1IjoiaWxhbWFuaXNoIiwiYSI6ImNsMXQ4eDliMzB6N3kzb3FxbzY3ZmN5bDYifQ.swLACYH2fKaTe93_6hQ5sg';

window.onload = function() {
  const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/ilamanish/cl2qgws4u005p14o1jmqoa4sl', // style URL
    center: [77.0688997, 20.5272803], // starting position [lng, lat]
    zoom: 4 // starting zoom
  });
};

// map.on('load', () => {
//   const layers = [
//     'Male',
//     'Female',
//     'Unknown'
//   ];
//   const colors = [
//     '#54278f',
//     '#d95f0e',
//     '#2ca25f'
//   ];

//   // create legend
//   const legend = document.getElementById('legend');

//   layers.forEach((layer, i) => {
//     const color = colors[i];
//     const item = document.createElement('div');
//     const key = document.createElement('span');
//     key.className = 'legend-key';
//     key.style.backgroundColor = color;

//     const value = document.createElement('span');
//     value.innerHTML = `${layer}`;
//     item.appendChild(key);
//     item.appendChild(value);
//     legend.appendChild(item);
//   });

  
// });



