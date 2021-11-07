$(function () {
  new WOW().init()

  const closeVideo = $('.video-close')
  const openVideo = $('#openVideo')
  const videoPopup = $('.video')

  openVideo.click(() => {
    videoPopup.fadeIn()
  })
  closeVideo.click(() => {
    videoPopup.fadeOut()
    $('video')[0].pause()
  })
  videoPopup.click(() => {
    if ($(event.target).hasClass('video-block')) {
      videoPopup.fadeOut()
      $('video')[0].pause()
    }
  })

  $('.slick-slider').slick({
    infinite: false,
    dots: true,
    nextArrow: '.next',
    prevArrow: '.prev',
    fade: true,
    speed: 500,
    appendDots: '.slider-pagination',
    customPaging: function (slick, index) {
      return '<a>' + (index + 1) + '</a>';
    }
  })
})