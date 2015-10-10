var Kefir = require('kefir')

var get = function (url) {

  if (require('is-browser'))
    var request = require('browser-request')
  else 
    var request = require('request')

  return function () {
   request(url, function (err, _, body) { 
     if (err) { 
       emitter.error(err) 
     } else { 
       emitter.emit(body) 
     } 
   })
 }
}

module.exports = get
