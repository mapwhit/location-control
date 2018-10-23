'use strict';

const geolocation = require('html5-geolocation');
const kompas = require('kompas');

const SPEED_THRESHOLD = 4; // 4mps ~ 15km/h ~ 10mph

module.exports = locationControl;

/**
 * displays the location and orientation/heading of the device on the map
 */
function locationControl() {
  let map;
  let el;
  let geo = geolocation();
  let compass = kompas({ calculate: false });
  let position = {};
  let tracking = false;

  function createElement() {
    let div = document.createElement('div');
    div.className = 'mapboxgl-ctrl mapboxgl-user-location';
    div.innerHTML = '<div class="mapboxgl-user-location-arrow"></div><div class="mapboxgl-user-location-dot"></div>';
    return div;
  }

  function onAdd(_map) {
    map = _map;
    el = createElement();
    return el;
  }

  function onRemove() {
    cancelTracking();
    el = undefined;
    map = undefined;
  }

  function updatePosition({ coords: { latitude, longitude, heading, speed } }) {
    position = Object.assign(position, { ll: [ longitude, latitude ], speed, heading });
    display();
  }

  function updateCompassHeading(heading) {
    position.compassHeading = heading;
    display();
  }

  function display() {
    if (!position.ll) {
      // hide indicator
      el.style.display = 'none';
    } else {
      const arrow = el.childNodes[0];
      const { x, y } = map.project(position.ll);

      el.style.left = `${x}px`;
      el.style.top = `${y}px`;

      let bearing = position.speed > SPEED_THRESHOLD ? position.heading : position.compassHeading;
      if (typeof bearing === 'number') {
        let rotation = bearing - 45; // arrow already rotated 45 degrees
        arrow.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
        arrow.style.display = 'block';
      } else {
        arrow.style.display = 'none';
      }

      el.style.display = 'block';
    }
  }

  function startTracking() {
    if (tracking) {
      return;
    }
    tracking = true;
    geo.watch();
    compass.watch();
    geo.on('position', updatePosition);
    compass.on('heading', updateCompassHeading);
    map.on('move', display);
    display();
  }

  function cancelTracking() {
    if (!tracking) {
      return;
    }
    tracking = false;
    map.off('move', display);
    geo.off('position', updatePosition);
    compass.off('heading', updateCompassHeading);
    geo.clear();
    compass.clear();
  }

  function getCoordinates() {
    if (tracking) {
      return position.ll;
    }
  }

  return {
    getCoordinates,
    startTracking,
    cancelTracking,
    onAdd,
    onRemove
  };
}
