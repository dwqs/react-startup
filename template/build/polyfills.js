if (typeof Promise === 'undefined') {
  // Promise polyfill for webpack2+: https://stackoverflow.com/questions/38960490/how-can-i-polyfill-promise-with-webpack
  require('es6-promise').polyfill()
}

Object.assign = require('object-assign')