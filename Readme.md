[![NPM version][npm-image]][npm-url]
[![Build Status][build-image]][build-url]
[![Dependency Status][deps-image]][deps-url]

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

[npm-image]: https://img.shields.io/npm/v/map-location-control
[npm-url]: https://npmjs.org/package/map-location-control

[build-url]: https://github.com/furkot/map-location-control/actions/workflows/check.yaml
[build-image]: https://img.shields.io/github/actions/workflow/status/furkot/map-location-control/check.yaml?branch=main

[deps-image]: https://img.shields.io/librariesio/release/npm/map-location-control
[deps-url]: https://libraries.io/npm/map-location-control


[mapbox-gl-js]: https://github.com/mapbox/mapbox-gl-js
