(function(){

    'use strict';

        // AOS.init();


////////////// OVERLAYS ///////////////

    // fade in as you scroll down
    document.addEventListener('scroll', function(e){
        e.preventDefault();
        document.getElementById('#poppies').className = 'showing';
    });

    // document.addEventListener('scroll', function() {
    //     console.log('scroll event triggered');
    //     var section = document.getElementById('slide');
    //     section.className = 'showing';
    // });

    // document.addEventListener('scroll', function() {
    //     var section = document.getElementById('two');
    //     section.className = 'showing';
    // });
    


    // ScrollReveal().reveal('.headline');

    // Initialize ScrollReveal
    // ScrollReveal().reveal('.fade-in', {
    //     duration: 1000,     // Duration of the animation in milliseconds
    //     distance: '50px',   // Distance the element moves in pixels
    //     easing: 'ease-out', // Easing function for the animation
    //   });

    // window.addEventListener('scroll', function() {
    //     const parallaxElements = document.querySelectorAll('.parallax-element');
    //     parallaxElements.forEach(element => {
    //       const speed = parseFloat(element.getAttribute('data-speed'));
    //       const yPos = -window.pageYOffset * speed;
    //       element.style.transform = `translateY(${yPos}px)`;
    //     });
    // }

    
   
    

   
})();