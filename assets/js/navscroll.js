$(window).scroll(function() {
  if($(this).scrollTop() > 50)  /*height in pixels when the navbar becomes non opaque*/ 
  {
      $('.navbar').addClass('shrink');
  } else {
      $('.navbar').removeClass('shrink');
  }
});