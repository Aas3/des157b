(function(){

    'use strict';

        // AOS.init();

    // Wrap every letter in a span
    // var textWrapper = document.querySelector('.ml12');
    // textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    // anime.timeline({loop: true})
    // .add({
    //     targets: '.ml12 .letter',
    //     translateX: [40,0],
    //     translateZ: 0,
    //     opacity: [0,1],
    //     easing: "easeOutExpo",
    //     duration: 1200,
    //     delay: (el, i) => 500 + 30 * i
    // }).add({
    //     targets: '.ml12 .letter',
    //     translateX: [0,-30],
    //     opacity: [1,0],
    //     easing: "easeInExpo",
    //     duration: 1100,
    //     delay: (el, i) => 100 + 30 * i
    // });


    // Wrap every letter in a span
// var textWrapper = document.querySelector('.ml3');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// anime.timeline({loop: true})
//   .add({
//     targets: '.ml3 .letter',
//     opacity: [0,1],
//     easing: "easeInOutQuad",
//     duration: 2250,
//     delay: (el, i) => 150 * (i+1)
//   }).add({
//     targets: '.ml3',
//     opacity: 0,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 1000
//   });





////////// Section 2 sliding images ///////////
let sliderContent;
let sliderWidth;
let slideTwo = document.querySelector('#slide-two');
const clonedSlider = slideTwo.innerHTML;

function animateSlider() {
    sliderContent = document.querySelector('.a');
    sliderWidth = sliderContent.offsetWidth;
    const cloned = sliderContent.cloneNode(true);
    cloned.className = "b";
    document.querySelector('#slider').appendChild(cloned);
    document.querySelector('#slider').style.left = `-${sliderWidth}px`;
    repeatAnimation();
}

animateSlider();
function repeatAnimation() {
    slideTwo.addEventListener("transitionend", function () {
        console.log('going around again!');
        slideTwo.innerHTML = clonedSlider;
        slideTwo = document.querySelector('#slide-two');
        animateSlider();
    });
}

})();