(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 



  if (jQuery(window).width() <= 767) {
    $('.reviwe_slider').addClass('rvs')
  }
  
  $('.rvs').owlCarousel({
    stagePadding: 0,
    loop: true,
    responsiveClass: true,
    dots: true,
    nav: false,
    autoHeight: true,
    items: 1
});


  // page Animation
  // AOS.init({
  //   mirror: true,
  //   duration: 1500,
  //   initClassName: 'aos-init',
  //   once: true,
  // });

  // data-aos="fade-up" 
  // data-aos-delay="300" 

 
  


// Mouse scroll 
  const slider = document.querySelector('.items');
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
  });
  slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
  });
  slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
  console.log(walk);
  });

})(jQuery);
