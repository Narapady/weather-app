// Instantiate Weather and UI
const weather = new Weather();
const ui = new UI();

// Event Listener
document.querySelector('.search-location').addEventListener('submit', (e) => {
  e.preventDefault();

  const city = document.querySelector('.search-location input').value;

  weather.getWeatherData(city)
    .then(data => ui.displayWeather(data))
    .catch(err => console.log(err));

  searchForm.reset();
});