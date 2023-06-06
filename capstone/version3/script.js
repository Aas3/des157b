(function(){

    'use strict';

    document.querySelector('.open').addEventListener('click', function(e){
        e.preventDefault();
        document.getElementById('overlay').className = 'showing';
    });

    // document.getElementById('myAudio').loop = true;

    document.querySelector(".popHover").addEventListener('mouseenter', function (e){
        e.preventDefault();
        document.getElementById('pop').className = 'showing';
    })
    

    // let mySound = new Audio('media/forestWithSound (1).mp4')
    // mySound.play()

    // const audio = new Audio("media/forestWithSound (1).mp4");
    // audio.play(); 
})();