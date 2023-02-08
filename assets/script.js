var inputval = document.querySelector('#cityinput');
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput');
var descrip = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
var humid = document.querySelector('#humidity');
var dewPoint = document.querySelector('#dp');
var timeEl = document.getElementById('time');
var dateEl = document.getElementById('date');
var currentWeatherItemsEl = document.getElementById('current-weather-items');
var timezone = document.getElementById("time-zone");
var countryEl = document.getElementById("country");
var weatherForecastEl = document.getElementById('weatherForecast');
var currentTempEl = document.getElementById("current-temp");

apiKey = "67bcba4a97b6fcf1727eb5225f413fdd";

Submit.addEventListener("click", submisison)




   function fetchWeather(city) { 
        fetch("api.openweathermap.org/data/2.5/forecast?q="
         + city + 
         "&appid=" + apiKey
         )
        .then((response) => response.json())
        .then((data) => console.log(data))
    }
    function showWeather(data) { 
        
     }     

