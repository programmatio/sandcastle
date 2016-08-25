import './vendors/ie.js'
import 'picturefill'
import './slideshow'
import './wow'

require.ensure([
], function (require) {
  // Now require it "sync"
  require('./lightbox')
}, 'lightbox')



