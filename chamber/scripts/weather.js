const city = 'Abuja,Nigeria';
const apiKey = 'c4420ce86b47a02637420f83b4358983';
const weatherEndpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

fetch(weatherEndpoint)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    const { main, weather, list } = data;
    const currentTemp = main.temp;
    const fahrenheitTemp = (currentTemp * (9/5)) + 32;
    const currentWeather = weather[0].description;

    document.querySelector('#current-temp').innerText = `Current temperature: ${fahrenheitTemp}°F`;
    document.querySelector('#current-weather').innerText = `Current weather: ${currentWeather}`;

    if (list) {
      const threeDayForecast = list.slice(0, 3);

      threeDayForecast.forEach((forecast) => {
        const li = document.createElement('li');
        const fahrenheitTemp = (forecast.main.temp * (9/5)) + 32;
        li.innerText = `Forecast: ${forecast.dt_txt} - ${fahrenheitTemp}°F`;
        document.querySelector('#three-day-forecast').appendChild(li);
      });
    }

    document.querySelector('#weather-icon').src = `http://openweathermap.org/img/w/${weather[0].icon}.png`;
    document.querySelector('figcaption').innerText = `${weather[0].description}`;
  })
  .catch(error => console.error('Error:', error));
