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


})();