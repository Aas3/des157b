(function(){

    'use strict';

    document.querySelector('.open').addEventListener('click', function(e){
        e.preventDefault();
        document.getElementById('overlay').className = 'showing';
    });

    // let pageLeft;
    // let counter = 1;
    // let prevCounter = 1;
    // const sections = document.querySelectorAll('section');

    // let sectionLeft = [];
    // let documentLeft;
    // const two = document.querySelector('#two');
    // const sectionWidth = document.querySelector('section').offsetWidth;

    // pageLeft = window.pageXOffset;

    // window.addEventListener('load',function(){
    //     sections.forEach(function(section){
    //         sectionLeft.push(Math.floor(section.getBoundingClientRect().left) + window.pageXOffset);
    //   });
    //   console.log(sectionLeft);
    // })


    // window.addEventListener('wheel',function(){
    //     // if the user is scrolling down the page...
    //     if (pageLeft > sectionLeft[counter]) {
    //         counter++;
    //         console.log(`scrolling right ${counter}`);
    //     }
    //     // if the user is down the page and scrolling up
    //     else if (counter > 1 && pageLeft < sectionLeft[counter - 1]) {
    //         counter--;
    //         console.log(`scrolling left ${counter}`);
    //     }
    //     // when the section changes...
    //     if (counter != prevCounter) {
    //         prevCounter = counter;
    //     }
    // })

    // end glenda added
     // end window scroll function
   


})();