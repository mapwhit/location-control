import assert from 'node:assert/strict';
import { beforeEach, describe, it } from 'node:test';

import mlc from '../lib/map-location-control.js';

function dummyMap(document) {
  function noop() {}

  function project([lon, lat]) {
    const x = Math.floor(lon * 5);
    const y = Math.floor(lat * 3);
    return [x, y];
  }

  function getContainer() {
    return document.querySelector('#map-container');
  }

  return {
    on: noop,
    off: noop,
    project,
    getContainer
  };
}

describe('map-location-control', () => {
  beforeEach(function () {
    document.body.innerHTML = '<div id="map-container"></div>';
    this.map = dummyMap(document);
  });

  it('must add and remove location control', function () {
    const location = mlc();
    const el = location.onAdd(this.map);

    assert(el);
    assert.equal(el.className, 'mapboxgl-ctrl mapboxgl-user-location');

    location.onRemove();

    assert(!document.querySelector('mapboxgl-ctrl'));
  });
});
