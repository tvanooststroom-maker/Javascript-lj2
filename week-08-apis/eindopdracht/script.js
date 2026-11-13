// API_KEY wordt geladen vanuit config.js (zie config.example.js voor instructies)

const weatherInfo = document.querySelector('#weather-info');
const searchForm = document.querySelector('#search-form');
const cityInput = document.querySelector('#city-input');

const showWeather = (data) => {
  const article = document.createElement('article');
  const heading = document.createElement('h2');
  heading.textContent = data.name;

  const icon = document.createElement('img');
  icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  icon.alt = `Weer in ${data.name}`;

  article.append(heading, icon);

  const weatherDetails = [
    ['Temperatuur', `${Math.round(data.main.temp)} °C`],
    ['Gevoelstemperatuur', `${Math.round(data.main.feels_like)} °C`],
    ['Luchtvochtigheid', `${data.main.humidity}%`],
    ['Windsnelheid', `${data.wind.speed} m/s`]
  ];

  weatherDetails.forEach(([label, value]) => {
    const row = document.createElement('p');
    const labelElement = document.createElement('span');
    const valueElement = document.createElement('span');
    labelElement.textContent = label;
    valueElement.textContent = value;
    row.append(labelElement, valueElement);
    article.append(row);
  });

  weatherInfo.replaceChildren(article);
};

const showError = (message) => {
  const errorMessage = document.createElement('p');
  errorMessage.textContent = message;
  weatherInfo.replaceChildren(errorMessage);
};

const getWeather = (city) => {
  if (typeof API_KEY === 'undefined' || !API_KEY || API_KEY === 'VUL_HIER_JE_KEY_IN') {
    showError('Stel eerst je OpenWeather API-key in config.js in.');
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);



      showWeather(data);
    
});

}
searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const city = cityInput.value.trim();

  if (!city) {
    showError('Vul een plaatsnaam in.');
  } else {
    getWeather(city);
  }

  cityInput.value = '';
});
