import 'slick-carousel'
import 'node-vibrant/dist/vibrant.min.js'

let colorSettings = []
let changeColors



$(document).ready(function () {

  $('.hero-slider').on('init', function(event, slick){
    changeColors = function (slide, slick) {
      if (typeof colorSettings[slide] !== 'undefined') {
        $slideContainter.css("background-color", colorSettings[slide])
      } else {
        Vibrant.from($(slick.$slides[slide]).find('img').attr('src')).getPalette(function (err, palette) {
          colorSettings[slide] = `rgba(${palette.LightVibrant.rgb.join(',')},1)`
          $slideContainter.css("background-color", colorSettings[slide])
        })
      }
    }
    changeColors(0, slick)
  });

  let $slideContainter = $('.hero')
  let $slider = $('.hero-slider').slick({
    dots: true,
    infinite: true,
    prevArrow: "<div class='left'></div>",
    nextArrow: "<div class='right'></div>"
  })



  $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    changeColors(nextSlide, slick)
  })
})


