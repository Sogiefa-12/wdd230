const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');


let api = 'd63c323e88ed73184e471fcf7dedf282';

const url = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={d63c323e88ed73184e471fcf7dedf282}';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            return data;
        }
        else {
            throw Error(await response.text());
        }
    }catch (error) {
        console.log(error);
    }
}

apiFetch().then(data => {
    currentTemp.innerHTML = data.main.temp;
    weatherIcon.src = 'https://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png';
    captionDesc.innerHTML = data.weather[0].description;
    displayResults();
});

function displayResults() {
    apiFetch().then((data) => {
        currentTemp.innerHTML = data.main.temp;
        weatherIcon.src = 'https://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png';
        captionDesc.innerHTML = data.weather[0].description;
    });
}