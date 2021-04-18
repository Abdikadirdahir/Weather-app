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

function searchCity(cityname) {
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityname + "&units=imperial&appid=ecc0be5fd92206da3aa90cc41c13ca56";
    var queryURLforcast = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityname + "&units=imperial&appid=ecc0be5fd92206da3aa90cc41c13ca56";
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function (response) {
        console.log(response);
        console.log(queryURL);
        //empty divs and ids that we need to dump content into.....
        $("#current").empty();
       var mainDate = moment().format('L');
  
        //create HTML for city information......
        var cityNameEl = $("<h2>").text(response.name);
        var displayMainDate = cityNameEl.append(" " + mainDate);
        var tempEL = $("<p>").text("Tempraturer: " + response.main.temp);
        var humEl = $("<p>").text("Humidity: " + response.main.humidity);
        var windEl = $("<p>").text("Wind Speed: " + response.wind.speed);
        var currentweather = response.weather[0].main;
        if (currentweather === "Rain") {
            var currentIcon = $('<img>').attr("src", "http://openweathermap.org/img/wn/09d.png");
            currentIcon.attr("style", "height: 60px; width: 60px");
        } else if (currentweather=== "Clouds") {
            var currentIcon = $('<img>').attr("src", "http://openweathermap.org/img/wn/03d.png");
            currentIcon.attr("style", "height: 60px; width: 60px");
        } else if (currentweather === "Clear") {
            var currentIcon = $('<img>').attr("src", "http://openweathermap.org/img/wn/01d.png");
            currentIcon.attr("style", "height: 60px; width: 60px");
        }
         else if (currentweather === "Drizzle") {
            var currentIcon = $('<img>').attr("src", "http://openweathermap.org/img/wn/10d.png");
            currentIcon.attr("style", "height: 60px; width: 60px");
        }
         else if (currentweather === "Snow") {
            var currentIcon = $('<img>').attr("src", "http://openweathermap.org/img/wn/13d.png");
            currentIcon.attr("style", "height: 60px; width: 60px");
        }
        //create HTML div to append new elements to render on page....
        var newDiv = $('<div>');
        newDiv.append(displayMainDate, currentIcon, tempEL, humEl, windEl);
  
        $("#current").html(newDiv);
    


        
  //---------------------------------------------UV call ---------------------------------------//
  
  //--------------------------------------------- UV call ---------------------------------------//
  
  var lat = response.coord.lat;
  var lon = response.coord.lon;
   var queryURLUV = "https://api.openweathermap.org/data/2.5/uvi?&appid=ecc0be5fd92"
            $('#uvl-display').empty();
        
            //create HTML for new div
            var uvlEl = $("<button class='btn bg-danger'>").text("UV Index: " + response.value);
            var uvlEl = $("<button class='btn bg-success'>").text("UV Index: " + response.value);
  
            $('#uvl-display').html(uvlEl);
  
   var queryURLUV = "https://api.openweathermap.org/data/2.5/uvi?&appid=ecc0be5fd92"
        //empty 5day div--------
        $("#5day").empty();
        //create HTML for 5day forcast................
        for (var i = 0; i < results.length; i += 9) {
        for (var i = 0; i < results.length; i += 8) {
            // Creating a div
            var fiveDayDiv = $("<div class='card shadow-lg text-white bg-primary mx-auto mb-10 p-2' style='width: 8.5rem; height: 11rem;'>");
  
   var queryURLUV = "https://api.openweathermap.org/data/2.5/uvi?&appid=ecc0be5fd92"
                icon.attr("style", "height: 40px; width: 40px");
    
      
            }
             
  
   $("#select-city").on("click", function (event) {
    searchCity(cityInput);
    pageLoad();
  });
}
  //---------------------------Call stored items on page load-------------------------------------//
  function pageLoad () {
    var lastSearch = JSON.parse(localStorage.getItem("cityName"));
   event.preventDefault();
    searchCity($(this).text());
  };
})}
