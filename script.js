
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


$(function(){
  //.accordion_oneの中の.accordion_headerがクリックされたら
  $('.accordion_one .accordion_header').click(function(){
    //クリックされた.accordion_oneの中の.accordion_headerに隣接する.accordion_innerが開いたり閉じたりする。
    $(this).next('.accordion_inner').slideToggle();
    $(this).toggleClass("open");
    //クリックされた.accordion_oneの中の.accordion_header以外の.accordion_oneの中の.accordion_headerに隣接する.accordion_oneの中の.accordion_innerを閉じる
    $('.accordion_one .accordion_header').not($(this)).next('.accordion_one .accordion_inner').slideUp();
    $('.accordion_one .accordion_header').not($(this)).removeClass("open");
  });
});
