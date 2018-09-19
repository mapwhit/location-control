[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Dependency Status][deps-image]][deps-url]
[![Dev Dependency Status][deps-dev-image]][deps-dev-url]

# map-location-control

Geo-location control that can be used with vector map renderer: a simplified version of the `GeoLocationControl` implemented in [mapbox-gl-js]

## Install

```sh
$ npm install --save map-location-control
```

## Usage

```js
var geoLocationControl = require('map-location-control');

var glc = geoLocationControl({
  maxWidth: 150,
  unit: 'imperial'
 });

 map.addControl(glc);
```

## License

MIT © [Damian Krzeminski](https://pirxpilot.me)

[npm-image]: https://img.shields.io/npm/v/map-location-control.svg
[npm-url]: https://npmjs.org/package/map-location-control

[travis-url]: https://travis-ci.org/furkot/map-location-control
[travis-image]: https://img.shields.io/travis/furkot/map-location-control.svg

[deps-image]: https://img.shields.io/david/furkot/map-location-control.svg
[deps-url]: https://david-dm.org/furkot/map-location-control

[deps-dev-image]: https://img.shields.io/david/dev/furkot/map-location-control.svg
[deps-dev-url]: https://david-dm.org/furkot/map-location-control?type=dev

[mapbox-gl-js]: https://github.com/mapbox/mapbox-gl-js
