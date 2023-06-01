(function(){

    'use strict';

        // AOS.init();


////////////// OVERLAYS ///////////////

    // fade in as you scroll down
    // document.addEventListener('scroll', function(e){
    //     e.preventDefault();
    //     document.getElementById('#poppies').className = 'showing';
    // });

    // document.addEventListener('scroll', function() {
    //     console.log('scroll event triggered');
    //     var section = document.getElementById('slide');
    //     section.className = 'showing';
    // });

    // window.addEventListener('load', function(){
        
    //     const sections = document.querySelectorAll('section');
    //     let sectionLeft = [];
    //     let documentLeft;
    //     let counter = 0;
    //     const two = document.querySelector('#two');
    //     const sectionWidth = document.querySelector('section').offsetWidth;


    //     sections.forEach(function(section){
    //           sectionLeft.push(Math.floor(section.getBoundingClientRect().left) + window.pageXOffset);
    //     });
  
    //     window.addEventListener('scroll', function(){
    //     documentLeft = window.pageXOffset;
    
    //     if (documentLeft > sectionLeft[counter]){
         
    //             counter++;
    //             console.log(`scrolling right ${counter}`);
               
      
    //         } else if (counter > 1 && documentLeft < sectionLeft[counter-1]){
           
    //             counter--;
    //             console.log(`scrolling left ${counter}`)
    //         }
  
    //         switch(counter){
    //           case 1: sectionTwo(); break;
    //           case 2: sectionThree(); break;
    //           case 3: sectionFour(); break;
    //           default:break;
    //         }

    //         function sectionTwo(){
    //            if (window.scrollX < sectionWidth){
    //               two.className = 'fadeout';
    //             } else {
    //               two.className = 'fadein'
    //             }
    //         }
    //     })

    // });


    let pageLeft;
    let counter = 1;
    let prevCounter = 1;
    const sections = document.querySelectorAll('section');

    let sectionLeft = [];
    let documentLeft;
    const two = document.querySelector('#two');
    const sectionWidth = document.querySelector('section').offsetWidth;

    pageLeft = window.pageXOffset;

    window.addEventListener('load',function(){
        sections.forEach(function(section){
            sectionLeft.push(Math.floor(section.getBoundingClientRect().left) + window.pageXOffset);
      });
      console.log(sectionLeft);
    })


    window.addEventListener('wheel',function(){
        // if the user is scrolling down the page...
        if (pageLeft > sectionLeft[counter]) {
            counter++;
            console.log(`scrolling right ${counter}`);
        }
        // if the user is down the page and scrolling up
        else if (counter > 1 && pageLeft < sectionLeft[counter - 1]) {
            counter--;
            console.log(`scrolling left ${counter}`);
        }
        // when the section changes...
        if (counter != prevCounter) {
            prevCounter = counter;
        }
    })

    // end glenda added
     // end window scroll function
   
})();