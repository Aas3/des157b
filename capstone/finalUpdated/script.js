(function(){

    'use strict';


    AOS.init(); 

    
    document.querySelector('.open').addEventListener('click', function(e){
        e.preventDefault();
        document.getElementById('overlay').className = 'showing';
    });

    // document.getElementById('myAudio').loop = true;

    document.querySelector(".popHover").addEventListener('mouseenter', function (e){
        e.preventDefault();
        document.getElementById('pop').className = 'showing';
    })
    

    // css text lib//
    // Wrap every letter in a span
var textWrapper = document.querySelector('.ml13');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml13 .letter',
    translateY: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 300 + 30 * i
  }).add({
    targets: '.ml13 .letter',
    translateY: [0,-100],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1200,
    delay: (el, i) => 100 + 30 * i
  });



})();