(function(){

    'use strict';

    AOS.init();




    document.addEventListener("DOMContentLoaded", function() {
        // Select the element(s) to apply the tilt effect
        const tiltElements = document.querySelectorAll(".tilt-element");
      
        // Initialize Tilt.js on each element
        tiltElements.forEach(function(element) {
          new Tilt(element);
        });
      });
      
})





// import MouseFollower from "mouse-follower";
// import gsap from "gsap";

// MouseFollower.registerGSAP(gsap);


// const cursor = new MouseFollower({
//     container: '.mf-container',
//     speed: 0.3
// });