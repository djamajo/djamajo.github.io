$(document).ready(function() {

    //animation au clic
          $('.navbar-toggler').click(function() {
        if ($('body').hasClass('push-right')) {
                  $('.sidenav').animate({left: '-250px'}, 400,function(){$('body').removeClass('push-right')});
              } else {
        $('.sidenav').animate({left: '0px'}, 400,function(){$('body').addClass('push-right')});
              }
          });
      });