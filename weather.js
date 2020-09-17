class Weather {
  constructor() {
    this.apiKey = 'e82b813f025f335d104c35ab2fa6c268';
  }

  async getWeatherData(city) {
    const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`;
    const response = await fetch(baseURL);

    const data = response.json();
    return data;
  }
}