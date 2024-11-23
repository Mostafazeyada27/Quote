var quotes = [
  "“A friend is someone who knows all about you and still loves you.”",
  "“You only live once, but if you do it right, once is enough.”",
  "“Be the change that you wish to see in the world.”",
  "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
  "“To live is the rarest thing in the world. Most people exist, that is all.”",
];

function newQuote() {
  var random = Math.floor(Math.random() * quotes.length);
  var randomQuote = quotes[random];
  document.getElementById("quote").innerHTML = randomQuote;
}
newQuote();
