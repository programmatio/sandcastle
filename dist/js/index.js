import './vendors/ie.js'
import './slideshow'

require.ensure([
], function (require) {
  // Now require it "sync"
  require('./lightbox')
}, 'lightbox')



