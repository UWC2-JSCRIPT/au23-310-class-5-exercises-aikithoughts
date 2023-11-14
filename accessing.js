// Change the text of the "Seattle Weather" header to "February 10 Weather Forecast, Seattle"
const header = document.getElementById("weather-head");
header.innerText = "February 10 Weather Forecast, Seattle"

// Change the styling of every element with class "sun" to set the color to "orange"
const sunnyDays = document.querySelectorAll(".sun");
sunnyDays.forEach(day => {
    day.style.color = "orange";
  });

// Change the class of the second <li> from to "sun" to "cloudy"
const listOfDays = document.getElementById("weather");
const secondDay = listOfDays.getElementsByTagName("li")[1];
secondDay.setAttribute("class", "cloudy");
secondDay.setAttribute("style", ""); // Figured it's not sunny any more and we should remove the orange color!

