document.addEventListener('DOMContentLoaded', function () {

    let firstParagraph = document.querySelector('footer p:first-child');
    let currentYear = new Date().getFullYear();
    var yearElement = firstParagraph.querySelector('.year');
    yearElement.innerHTML = currentYear;

});

const api_url = 'https://api.openweathermap.org/data/2.5/weather?q=Abuja&appid=YOUR_API_KEY';

function getWeatherData() {
    fetch(api_url)
       .then(response => response.json())
       .then(data => {

       let temp = data.main.temp;
       if (temp>0) {
        temp = temp * 9/5
         + 32;
    }
    })

document.querySelector('.temp').innerHTML = temp;
}
document.querySelector('.temp').innerHTML = temp;