import '../../../node_modules/slick-lightbox/dist/slick-lightbox.js'
import '../../../node_modules/slick-lightbox/dist/slick-lightbox.css'

$('.gallery').slickLightbox({
  background: 'rgba(255,255,255,0.95)',
  src: 'src',
  itemSelector: '.tile img',
  slick: {
    dots: true,
    arrows: false,
    customPaging: function (slider, i) {
      let pixelRatio = (function () {
        return (window.devicePixelRatio > 1) ? '@2x' : ''
      })()

      let thumbnailOrder = $(slider.$slides[i])
        .find('img')[0]
        .src
        .split('/')
        .slice(-1)[0]
        .split('-')
        .slice(-1)[0]
        .split('.')
        .slice(0)[0]

      return `<div class="thumbnail">
                    <img src='./images/@1x/lightbox-thumb-${thumbnailOrder}.jpg'
                        srcset='./images/@2x/lightbox-thumb-${thumbnailOrder}@2x.jpg 2x'/>
                </div>`
    }
  }
}).on({
'show.slickLightbox': function () {}})
$('.featured').slickLightbox({
  background: 'rgba(255,255,255,0.95)'

})

var $gallery = $('.single-item')
var slideCount = null

$gallery.on('init', function (event, slick) {
  slideCount = slick.slideCount
  setSlideCount()
  setCurrentSlideNumber(slick.currentSlide)
})

$gallery.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
  setCurrentSlideNumber(nextSlide)
})

function setSlideCount () {
  var $el = $('.slick-lightbox').find('.total')
  $el.text(slideCount)
}

function setCurrentSlideNumber (currentSlide) {
  var $el = $('.slick-lightbox').find('.current')
  $el.text(currentSlide + 1)
}
