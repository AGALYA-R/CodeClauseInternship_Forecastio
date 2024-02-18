function getWeather() {
    const apiKey = '0c174622ad4517e8aabd28471a51df97'; // Replace with your OpenWeatherMap API key
    const city = document.getElementById('cityInput').value;

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `
                <h2>Weather in ${data.name}</h2>
                <p>Temperature: ${data.main.temp} °C</p>
                <p>Description: ${data.weather[0].description}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = '<p>Failed to fetch weather data. Please try again.</p>';
        });
}
