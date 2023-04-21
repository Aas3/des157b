(function () {

    'use strict';


    // fade on scroll//

    let pageTop;
    let counter = 1;
    let prevCounter = 1;
    const sections = document.querySelectorAll('section');
    const sectionTops=[];
    

    window.addEventListener('load',function(){
        sections.forEach(function(section){
            sectionTops.push(Math.floor(section.getBoundingClientRect().top) + window.pageYOffset);
      });
      console.log(sectionTops);
    })


    window.addEventListener('scroll', function () {
		pageTop = window.pageYOffset;

		// if the user is scrolling down the page...
		if (pageTop > sectionTops[counter]) {
			counter++;
			console.log(`scrolling down ${counter}`);
		}
		// if the user is down the page and scrolling up
		else if (counter > 1 && pageTop < sectionTops[counter - 1]) {
			counter--;
			console.log(`scrolling up ${counter}`);
		}
		// when the section changes...
		if (counter != prevCounter) {
			prevCounter = counter;
		}


        if (counter==2){
            two.classList.add('fadeIn');
        }
})();