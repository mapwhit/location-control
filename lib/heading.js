const emitter = require('component-emitter');

module.exports = tracker;

const RAD_PER_DEG = Math.PI / 180;

function toRad(deg) {
  return deg * RAD_PER_DEG;
}

function toDeg(rad) {
  return rad / RAD_PER_DEG;
}

function compassHeading({ alpha, beta, gamma }) {
  if (typeof alpha !== 'number' || typeof beta !== 'number' || typeof gamma !== 'number') {
    return;
  }

  alpha = toRad(alpha);
  beta = toRad(beta);
  gamma = toRad(gamma);

  const sA = Math.sin(alpha);
  const sB = Math.sin(beta);
  const sG = Math.sin(gamma);

  const cA = Math.cos(alpha);
  const cG = Math.cos(gamma);

  // Calculate A, B, C rotation components
  const rA = -cA * sG - sA * sB * cG;
  const rB = -sA * sG + cA * sB * cG;

  // Calculate compass heading
  let heading = Math.atan( rA / rB );

  // Convert from half unit circle to whole unit circle
  if (rB < 0) {
    heading += Math.PI;
  } else if (rA < 0) {
    heading += 2 * Math.PI;
  }

  return toDeg(heading);
}

function tracker() {
  let watching = false;
  const DO_EVENT = 'ondeviceorientationabsolute' in window ?
    'deviceorientationabsolute' :
    'deviceorientation';

  const self = {
    watch,
    clear
  };

  function onDeviceOrientation(ev) {
    self.emit('heading', ev.compassHeading || ev.webkitCompassHeading || compassHeading(ev));
  }

  function watch() {
    if (!watching) {
      watching = true;
      window.addEventListener(DO_EVENT, onDeviceOrientation);
    }
    return self;
  }

  function clear() {
    if (watching) {
      window.removeEventListener(DO_EVENT, onDeviceOrientation);
      watching = false;
    }
    return self;
  }

  return emitter(self);
}
