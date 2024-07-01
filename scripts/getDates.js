document.addEventListener('DOMContentLoaded', function () {

    let firstParagraph = document.querySelector('footer p:first-child');
    let currentYear = new Date().getFullYear();
    var yearElement = firstParagraph.querySelector('.year');
    yearElement.innerHTML = currentYear;

});

const api_url =  'https://api.weatherbit.io/v2.0/current?lat=35.7721&lon=-78.63861&key=XXX&units=I';
function getWeatherData() {
    fetch(api_url)
       .then(response => response.json())
       .then(data => {

       let temp = data.main.temp;

       if (temp>0) {
        temp = temp * 9/5 + 32;
    }
    return temp;
    });
}


function getWeather() {
    getWeatherData().then(temp => {
        document.querySelector('.temp').innerHTML = `Temperature: ${Math.round(temp) + '°F'}`;
    });
}

var visitCount = 0;

if (localStorage.getItem('visitCount')) {
    visitCount = parseInt(localStorage.getItem('visitCount')) + 1;
    localStorage.setItem('visitCount', visitCount);
    document.querySelector('.visit-count').innerHTML =`Number of Visit: ${visitCount}`; 
    } else {
    localStorage.setItem('visitCount', 1);
    document.querySelector('.visit-count').innerHTML = 1;
    
}

