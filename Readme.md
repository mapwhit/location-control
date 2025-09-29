[![NPM version][npm-image]][npm-url]
[![Build Status][build-image]][build-url]
[![Dependency Status][deps-image]][deps-url]

# @mapwhit/location-control

Geo-location control that can be used with vector map renderer: a simplified version of the `GeoLocationControl` implemented in [mapbox-gl-js]

## Install

```sh
$ npm install --save @mapwhit/location-control
```

## Usage

```js
import locationControl = require('@mapwhit/location-control');

const mlc = locationControl();

 map.addControl(mlc);
 mlc.startTracking();
```

## License

MIT © [Damian Krzeminski](https://pirxpilot.me)

[npm-image]: https://img.shields.io/npm/v/@mapwhit/location-control
[npm-url]: https://npmjs.org/package/@mapwhit/location-control

[build-url]: https://github.com/mapwhit/location-control/actions/workflows/check.yaml
[build-image]: https://img.shields.io/github/actions/workflow/status/mapwhit/location-control/check.yaml?branch=main

[deps-image]: https://img.shields.io/librariesio/release/npm/@mapwhit/location-control
[deps-url]: https://libraries.io/npm/@mapwhit%2Flocation-control


[mapbox-gl-js]: https://github.com/mapbox/mapbox-gl-js
