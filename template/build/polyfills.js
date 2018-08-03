if (typeof Promise === 'undefined') {
  // Promise polyfill
  require('es6-promise').polyfill()
}

Object.assign = require('object-assign')
