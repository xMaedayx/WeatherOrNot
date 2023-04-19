var apiKey = "NsQFPsiRjFqgSwuNPkpHljrbogAnNnib";

function fetchWeather(latitude, longitude) {
  const apiUrl = `https://api.weather.gov/points/${latitude},${longitude}`; 
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const forecastUrl = data.properties.forecast;
      return fetch(forecastUrl);
    })
    .then((response) => response.json())
    .then((data) => {
      const temp = document.querySelector(".temp");
      const wind = document.querySelector(".wind");
      const humid = document.querySelector(".humidity");
      const dewPoint = document.querySelector(".dp");

      temp.textContent = data.properties.periods[0].temperature + "°F";
      wind.textContent = "Wind: " + data.properties.periods[0].windSpeed;
      humid.textContent = "Humidity: " + data.properties.periods[0].relativeHumidity;
      dewPoint.textContent = "Dew Point: " + data.properties.periods[0].detailedForecast.match(/Dew point .+?\. /)[0];
    })
};

// use the fetchWeather function to get weather data when the submit button is clicked
var submitBtn = document.querySelector("#submit");
var submitContainer = document.querySelector(".container-fluid")
submitBtn.addEventListener("click", () => {
  const latitude = document.querySelector("#latitude").value;
  const longitude = document.querySelector("#longitude").value;
 
  fetchWeather(latitude, longitude);
  submitContainer.style.display = "none";
  const displaySection = document.querySelector(".wrapper");
  displaySection.classList.remove("hide");
  const lat = document.querySelector("#latitude");
  const lon = document.querySelector("#longitude");
  lat.textContent = "Latitude: " + latitude;
  lon.textContent = "Longitude: " + longitude;
});
