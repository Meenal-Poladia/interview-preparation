const input = document.querySelector('.search input');
const searchButton = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');
const weather = document.querySelector('.weather');
const errorMessage = document.querySelector('.error');

const apiKey = '1ce408feaf57f8e636adebf83a5d1ef3';
// const url = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=${apiKey}&units=metrics`;
const url = `https://api.openweathermap.org/data/2.5/weather?units=metric`;

const checkWeather = async (city) => {
    const response = await fetch(url + `&q=${city}`+ `&appid=${apiKey}`);

    if (response.status === 404) {
        errorMessage.style.display = 'block';
        weather.style.display = 'none';
    } else {
        const data = await response.json();

        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temperature').innerHTML = Math.round(data.main.temp) + '°C';
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
        document.querySelector('.wind').innerHTML = data.wind.speed + ' km/hr';

        if (data.weather[0].main === 'Clouds') {
            weatherIcon.src = 'images/clouds.png'
        } else if (data.weather[0].main === 'Clear') {
            weatherIcon.src = 'images/clear.png'
        } else if (data.weather[0].main === 'Rain') {
            weatherIcon.src = 'images/rain.png'
        } else if (data.weather[0].main === 'Drizzle') {
            weatherIcon.src = 'images/drizzle.png'
        } else if (data.weather[0].main === 'Mist') {
            weatherIcon.src = 'images/mist.png'
        } else if (data.weather[0].main === 'Haze') {
            weatherIcon.src = 'images/haze.png'
        } else {
            weatherIcon.src = 'images/default.png'
        }

        errorMessage.style.display = 'none';
        weather.style.display = 'block';
    }
}

searchButton.addEventListener('click', () => {
    checkWeather(input.value)
})