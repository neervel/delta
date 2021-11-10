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

  $('#feedback').submit(function (e) {
    e.preventDefault();
  })

  const html = document.documentElement;
  const animation = document.getElementsByClassName('animation')[0]
  const canvas = document.getElementById("animation");
  const context = canvas.getContext("2d");

  const frameCount = 150;
  const currentFrame = index => (
    `./assets/img/animation/${index.toString().padStart(3, '0')}.png`
  )

  const preloadImages = () => {
    for (let i = 1; i < frameCount; i++) {
      const img = new Image();
        img.src = currentFrame(i);
    }
  };

  const img = new Image()
  img.src = currentFrame(1);
  canvas.width = 1250;
  canvas.height = 750;
  img.onload = function () {
    context.fillStyle = "#002430";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.drawImage(img, 0, 0);
  }

  const updateImage = index => {
    context.fillStyle = "#002430";
    context.fillRect(0, 0, canvas.width, canvas.height);
    img.src = currentFrame(index);
    context.drawImage(img, 0, 0);
  }

  window.addEventListener('scroll', () => {
    const scrollTop = html.scrollTop;
    const maxScrollTop = animation  .scrollHeight;
    const scrollFraction = scrollTop / maxScrollTop;
    const frameIndex = Math.min(
      frameCount - 1,
      Math.ceil(scrollFraction * frameCount)
    );

    requestAnimationFrame(() => updateImage(frameIndex + 1))
  });

  preloadImages()
})