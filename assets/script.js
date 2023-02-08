var inputval = document.querySelector('#cityinput');
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput');
var descrip = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
var humid = document.querySelector('#humidity');
var dewPoint = document.querySelector('#dp');


apiKey = "67bcba4a97b6fcf1727eb5225f413fdd";

Submit.addEventListener("click", submisison)




   function fetchWeather(city) { 
        fetch("api.openweathermap.org/data/2.5/forecast?q="
         + city + 
         "&appid=" + apiKey

         )
        .then((response) => response.json())
        .then((data) => console.log(data))
        localStorage.setItem("weatherData", JSON.stringify(data));
    }
    var storedData = localStorage.getItem("weatherData");
    var weatherData = JSON.parse(storedData);
    
   
   
    fetch("https://api.openweathermap.org/data/2.5/weather?q=London&appid=your_api_key")
  .then(response => response.json())
  .then(data => {
    // Populate the weather box with data from the API
    document.getElementById("city").innerHTML = data.name;
    document.getElementById("temperature").innerHTML = data.main.temp + "°C";
    document.getElementById("description").innerHTML = data.weather[0].description;
  });

    var storedData = localStorage.getItem("weatherData");
    var weatherData = JSON.parse(storedData);
   
