import wow from 'wowjs/dist/wow.js'

$(document).ready(function () {
  new wow.WOW().init({
    offset: 300, // distance to the element when triggering the animation (default is 0)
    mobile: true, // trigger animations on mobile devices (default is true)
    live: true // act on asynchronously loaded content (default is true)
  })
})
