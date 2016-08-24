import './vendors/ie.js'
import './slideshow'
import './wow'

require.ensure([
], function (require) {
  // Now require it "sync"
  require('./lightbox')
}, 'lightbox')



