$('[data-fancybox]').fancybox({
  animationDuration : 900,
  animationEffect   : 'slide-in-out'
});



// Fancybox Configuration
$('[data-fancybox="gallery"]').fancybox({
  buttons: [
    "slideShow",
    "thumbs",
    "zoom",
    "fullScreen",
    "share",
    "close"
  ],
  loop: true,
  arrows: true,
  toolbar: "false",
  animationDuration: 900,
  animationEffect: 'fade',
  protect: true,
  transitionEffect: "zoom-in-out",
  transitionDuration: 1000,
  clickSlide: "false",
  animationEffect: "zoom-in-out"
});

// ymaps.ready(init);
// function init(){
//     var myMap = new ymaps.Map("map", {
//         center: [55.76, 37.64],
//         zoom: 5
//     });
// }