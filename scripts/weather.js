

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');





const url = '://api.openweathermap.org/data/2.5/weather?lat={49.748491452381174}&lon={6.6398304889691095}&units=imperial&appid={c4420ce86b47a02637420f83b4358983}';

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

apiFetch();

function displayResults() {
apiFetch().then((data) => {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    weatherIcon.src = 'https://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png';
    captionDesc.innerHTML = data.weather[0].description;
});
}