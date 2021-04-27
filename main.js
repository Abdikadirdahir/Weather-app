/*
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```

GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
```
*/

var myInput = $("#myInput");
var searcButton = $("#search-button");
var list = $("#list-group")
var clearButton = $("#clear-history");
var currentCity = $("#current-city");
var currentTemperature = $("#temperature");
var currentHumidty = $("#humidity");
var currentWSpeed = $("#wind-speed");
var currentUvindex = $("#uv-index");

$("#search-button").click(function () {
    var cityName = myInput.val()
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&units=imperial&appid=f66573ac712d8ce09e23655cfca01825")
        .then(res => res.json())
        .then(data => {
            console.log(data)
           list.text(data.city.name)
            document.getElementById("city").innerHTML = cityName;
            
            currentTemperature.text(data.list[0].main.temp)
            currentHumidty.text(data.list[0].main.humidity)
            currentWSpeed.text(data.list[0].wind.speed)
             
           

          
          

            var lat = data.city.coord.lat
            var log = data.city.coord.lon

            fetch("https://api.openweathermap.org/data/2.5/uvi?appid=f66573ac712d8ce09e23655cfca01825&lat=" + lat + "&lon=" + log)
           
                .then(res => res.json())
                .then(uvData => {
                    console.log(uvData)
                   

                    
                    
                })

        })
    })
    

   
/*WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity */
    