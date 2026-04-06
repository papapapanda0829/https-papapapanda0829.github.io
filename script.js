
$(function(){
  $('.slider').slick({
    slidesToShow: 1,
    centerMode:true,
    centerPadding:'250px',
    arrows:false,
    dots:true,
    autoplay:true,
    autoplaySpeed:3000,
  });
});


$(function(){
  $('.slider-menu').slick({
    slidesToShow: 3,
    centerMode:true,
    centerPadding:'0px',
    arrows:false,
    dots:true,
    autoplay:true,
    autoplaySpeed:3000,
  });
});


$(function(){
  $('.btn-trigger').on('click', function() {
    $(this).toggleClass('active');
    return false;
  });
});

(function($) {
  var $nav   = $('#navArea');
  var $btn   = $('.btn-trigger');
  var $mask  = $('#mask');
  var open   = 'open'; // class
  // menu open close
  $btn.on( 'click', function() {
    if ( ! $nav.hasClass( open ) ) {
      $nav.addClass( open );
    } else {
      $nav.removeClass( open );
    }
  });
  // mask close
  $mask.on('click', function() {
    $nav.removeClass( open );
  });
} )(jQuery);
