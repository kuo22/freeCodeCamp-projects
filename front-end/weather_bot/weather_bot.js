var x = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
    const url = "https://fcc-weather-api.glitch.me/api/current?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude;
    $.getJSON(url, function(data) {
    $("#location").empty().append("<p>" + data.name + "</p>");
    const img = '<img src="' + data.weather[0].icon + '" alt="icon">';
    $("#icon").empty().append(img);
    });
}

getLocation();