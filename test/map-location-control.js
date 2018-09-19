var should = require('should');
var mlc = require('../');

function dummyMap(document) {
  function noop() {}

  function project([ lon, lat ]) {
    const x = Math.floor( lon * 5 );
    const y = Math.floor( lat * 3 );
    return [ x, y ];
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

describe('map-location-control', function () {
  beforeEach(function () {
    document.body.innerHTML = '<div id="map-container"></div>';
    this.map = dummyMap(document);
  });

  it('must add and remove location control', function () {
    var location = mlc();
    var el = location.onAdd(this.map);

    should.exist(el);
    el.className.should.be.eql('mapboxgl-ctrl mapboxgl-user-location');

    location.onRemove();

    should.not.exist(document.querySelector('mapboxgl-ctrl'));
  });


});
