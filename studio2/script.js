(function () {

    'use strict';

    console.log('reading js');

    ////////////// OVERLAYS ///////////////



    let globalData;

    async function getData(){
        const mySleep = await fetch('data/mood2.json');
        const data = await mySleep.json();
        console.log(data);

        globalData = data;
        document.querySelector('#sleep').innerHTML = outputHTML1(data);
        document.querySelector('#picker').innerHTML = createSelectList(data);
    }
    function outputHTML1(data){
        let html = '<p>'
        return html;
    }

    function createSelectList(data){
        let html = '<option> ---</option>';

        const dataPoints = Object.keys(data);
        console.log(dataPoints);
        dataPoints.forEach(function(eachPoint){
            html += `<option value ="${eachPoint}">${data[eachPoint].day}</option>`;
        })
        return html;
    }

    let rotation = 0;
    document.querySelector('#picker').addEventListener('change', function(){
        const newValue = this.value;
        updateInterface(newValue, globalData);

        if (newValue === 'rotate-left') {
            rotation -= 90;
        } else if (newValue === 'rotate-right') {
            rotation += 90;
        }
        const clouds = document.querySelector('#clouds');
        clouds.style.transform = `rotate(\${rotation}deg)`;
    });


    // document.querySelector('#picker').addEventListener('click', function(e){
    //     e.preventDefault();

    // })

    function updateInterface(value, jsonData){

        let html = '<p>';
        html += `On ${jsonData[value].day} i got ${jsonData[value].reason} hours of sleep`;
        html +='</p>';
        document.querySelector('#result').innerHTML = html;


        const sheepImage = document.getElementById("sheep");
        if (jsonData[value].reason >= 8) {
        sheepImage.classList.add("rotate");
        } else {
        sheepImage.classList.remove("rotate");
        }
    }

    getData();

    // function imageRotate (){
    //     const image= ;
    //     document.querySelector('#result').addEventListener('click', function(e){
    //     e.preventDefault();
    //     })
    // }

    // document.querySelector('#picker').addEventListener('change', function(){
    //     const clouds = document.querySelector('#sheep');
    //     clouds.style.transform = 'rotate(90deg)';

    // });

    // let rotation = 0;

    // document.querySelector('#picker').addEventListener('change', function(){
    //     const newValue = this.value;
    //     if (newValue === 'rotate-left') {
    //         rotation -= 40;
    //     } else if (newValue === 'rotate-right') {
    //         rotation += 40;
    //     }
    //     const clouds = document.querySelector('#clouds');
    //     clouds.style.transform = `rotate(\${rotation}deg)`;
    // });


})();