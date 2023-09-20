// swiper
var swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
      invert: false,
    },
    // autoHeight: true,
    pagination: {
      el: '.blog-slider__pagination',
      clickable: true,
    }
  });

// product slider
$(document).ready(function(){
  

  $('#itemslider').carousel({ interval: 2000 });
  
  $('.carousel-showmanymoveone .item').each(function(){
  var itemToClone = $(this);
  
  for (var i=1;i<6;i++) {
  itemToClone = itemToClone.next();
  
  if (!itemToClone.length) {
  itemToClone = $(this).siblings(':first');
  }
  
  itemToClone.children(':first-child').clone()
  .addClass("cloneditem-"+(i))
  .appendTo($(this));
  }
  });
  });



    
    
