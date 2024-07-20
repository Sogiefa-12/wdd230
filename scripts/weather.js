

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

let city ='Abuja,Nigeria';
let apiKey = 'c4420ce86b47a02637420f83b4358983';




const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

async function apiFetch() {
try {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        console.table(data);
        return data;
    }
    else {
        throw Error(await response.text());
    }
}catch (error) {
    console.log(error);
}
}

apiFetch();

function displayResults() {
apiFetch().then((data) => {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    weatherIcon.src = 'https://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png';
    captionDesc.innerHTML = data.weather[0].description;
});
}