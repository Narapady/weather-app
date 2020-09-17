class UI {
  constructor() {
    this.cardBody = document.querySelector('.card-body');
    this.cityName = document.querySelector('.city-name p');
    this.timeImg = document.querySelector('.card-top img');
    this.cartInfo = document.querySelector('.back-card');
  }

  displayWeather(data) {
    this.cityName.textContent = data.name;

    const imageIcon = data.weather[0].icon;
    const imageSrc = `http://openweathermap.org/img/wn/${imageIcon}@2x.png`
    this.cardBody.innerHTML = `
      <div class="card-mid row">
      <div class="col text-center temp">
        <span>${this.convertToCelcius(data.main.temp)}&deg;C</span>
      </div>
      <div class="col condition-temp">
        <p class="condition">${data.weather[0].description}</p>
        <p class="high">${this.convertToCelcius(data.main.temp_max)}&deg;C</p>
        <p class="low">${this.convertToCelcius(data.main.temp_min)}&deg;C</p>
      </div>
    </div>

    <div class="icon-container card shadow mx-auto">
      <img src="${imageSrc}" alt="">
    </div>

    <div class="card-bottom px-5 py-4 row">
      <div class="col text-center">
        <p>${this.convertToCelcius(data.main.feels_like)}&deg;C</p>
        <span>Feels Like</span>
      </div>
      <div class="col text-center">
        <p>${data.main.humidity}%</p>
        <span>Humidity</span>
      </div>
    </div>
    `;

    if (this.isDayTime(imageIcon)) {
      this.timeImg.setAttribute('src', './img/day_image.svg');
      if (this.cityName.classList.contains("text-white")) {
        this.cityName.classList.remove("text-white")
      } else {
        this.cityName.classList.add("text-black")
      }
    } else {
      this.timeImg.setAttribute('src', './img/night_image.svg');
      if (this.cityName.classList.contains("text-black")) {
        this.cityName.classList.remove("text-black")
      } else {
        this.cityName.classList.add("text-white")
      }
    }
    this.cartInfo.classList.remove('d-none');
  }

  convertToCelcius(temp) {
    return Math.floor(temp - 273.15);
  }

  isDayTime(input) {
    if (input.includes('d')) {
      return true;
    } else {
      return false;
    }
  }
}