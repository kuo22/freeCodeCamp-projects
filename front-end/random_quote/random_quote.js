$('button').on('click', function() {
  newQuote();
  randomColor();
});

function newQuote() {
  $.getJSON("https://talaikis.com/api/quotes/random/", function(data) {
    $("#text").empty().append("<p>" + data.quote + "</p>");
    $("#author").empty().append("<p>- " + data.author + "</p>");
  });
}

function randomColor() {
    let color = '#'+Math.floor(Math.random()*16777215).toString(16);
  $("body, #new-quote").css("background", color);
  $("#text, #author").css("color", color);
}

$("document").ready(function() {
  newQuote();
  randomColor();
});