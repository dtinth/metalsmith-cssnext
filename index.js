
var cssnext = require('cssnext')
var path = require('path')
var assign = require('object-assign')

module.exports = function (options) {
  return function (files, metalsmith, done) {
    for (var file in files) {
      if (/\.css$/i.test(file)) {
        process(files[file], path.join(metalsmith.source(), file), options)
      }
    }
    done()
  }
}

function process (file, from, options) {
  options = Object.assign({ from: from }, options || { })
  file.contents = new Buffer(
    cssnext(file.contents.toString('utf8'), options),
    'utf8'
  )
}
