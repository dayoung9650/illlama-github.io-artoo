$(document).ready(function() {
    
    
    /* For the sticky navigation */
    $('.js--section-market').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px;'
    });
    
    /* Scroll on buttons */
    $('.js--scroll-to-plans').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000); 
    });
    $('.js--scroll-to-start').click(function() {
       $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });
    
    /* navigation scroll */
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
          && 
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
      });
    
    /*---------------------*/
    /* Animations on scroll*/
    /*---------------------*/
    
       $('.js--wp-5').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeInUp').css('opacity', '1.0');
    }, {
        offset: '60%'
    });
           $('.js--wp-5').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp').css('opacity', '1.0');
    }, {
        offset: '50%'
    });
           $('.js--wp-5').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeInUp').css('opacity', '1.0');
    }, {
        offset: '80%'
    });
           $('.js--wp-5').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated fadeInUp').css('opacity', '1.0');
    }, {
        offset: '70%'
    });
           $('.js--wp-5').waypoint(function(direction) {
        $('.js--wp-5').addClass('animated fadeInUp').css('opacity', '1.0');
    }, {
        offset: '90%'
    });
           $('.js--wp-5').waypoint(function(direction) {
        $('.js--wp-6').addClass('animated fadeInUp').css('opacity', '1.0');
    }, {
        offset: '80%'
    });
           $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-7').addClass('animated fadeInUp').css('opacity', '1.0');
    }, {
        offset: '10%'
    });
    
//    Critic animation iphone
    
    $('.js--wp-c-0').waypoint(function(direction) {
        $('.js--wp-c-1').addClass('animated fadeInUp').css('opacity', '1.0');
    }, {
        offset: '30%'
    });
    
    
    /*----------------------*/
    /*Remove wapoint effects*/
    /*----------------------*/
    
//    $('.js--wp-0').waypoint(function(direction) {
//        var nav = $('.js--wp-1');
//        
//        if(nav.hasClass('animated fadeInUp')){
//            console.log('hi');
//            $('.js--wp-1, .js--wp-2, .js--wp-3, .js--wp-4, .js--wp-5, .js--wp-6, .js--wp-7, .js--wp-c-1').removeClass('animated fadeInUp').css('opacity', '0');
//        }   
//    });
    
    /*-------------------------*/
    /*CRITIC img change effects*/
    /*-------------------------*/

    var array = new Array();
    array[1] = "resources/css/img/img_critic.png"
    array[2] = "resources/css/img/img_critic1.png"
    array[3] = "resources/css/img/img_critic2.png"
    array[4] = "resources/css/img/img_critic3.png"
    array[5] = "resources/css/img/img_critic4.png"
    array[6] = "resources/css/img/img_critic5.png"
    
    i = 1;
    function changeValue(){
    if (i <=5){
      i = i+1;
    }else{
      i = 1;
    }
    document.getElementById("js--wp-c-1").src = array[i];
    }
    var changeValueInterval = setInterval(function(){changeValue();},1500);//중앙에 사진을 1.5초 간격으로 바꿈//
    changeValueInterval
        
    
     /* Mobile navigation */ 
    $('.js--nav-icon').click(function() {
       var nav = $('.js--main-nav');
       var icon = $('.js--nav-icon ion-icon');
        
        nav.slideToggle(200);
         
        if (icon.hasClass('js--nav-icon-menu')){
            icon.attr('name', 'close');
            icon.removeClass('js--nav-icon-menu');
            icon.addClass('js--nav-icon-close');
        }else{
            icon.attr('name', 'menu');
            icon.removeClass('js--nav-icon-close');
            icon.addClass('js--nav-icon-menu');
/*엄청 오래걸린부분!!! 이렇게 하지 않으면 이모티콘이 사라져버린다! 특히 클레스 이름 바꿔줄때 attr을 쓰게되면 사라짐!!!!*/       
        }
        
    });
    
});