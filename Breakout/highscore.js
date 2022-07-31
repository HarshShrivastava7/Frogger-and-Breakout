//
// let highScores = localStorage.getItem("high") ? JSON.parse(localStorage.getItem("high")) : [];
// // console.log(highScores);
// highScores.push(counter);
// // console.log(counter);
// highScores.sort(function(a, b) {
//   return b - a
// });
// // console.log(highScores);
// if (highScores.length > 5) {
//   highScores.pop();
// }
// localStorage.setItem("high", JSON.stringify(highScores));
let high = JSON.parse(localStorage.getItem("high"));
// console.log(high);
document.querySelector("body").innerHTML = `<h1 class="high-score">High Scores</h1>
  <div class="highscores1">${high[0]}</div>
  <div class="highscores2">${high[1]}</div>
  <div class="highscores3">${high[2]}</div>
  <div class="highscores4">${high[3]}</div>
  <div class="highscores5">${high[4]}</div>
  <div class="clear-button"><button type="button" name = "button" class="clear-btn">Clear High Scores</button></div>`;

if (isNaN(high[1])) {
  document.querySelector(".highscores2").innerHTML = "";
  document.querySelector(".highscores2").classList.remove("highscores2");
}

if (isNaN(high[2])) {
  document.querySelector(".highscores3").innerHTML = "";
  document.querySelector(".highscores3").classList.remove("highscores3");
}

if (isNaN(high[3])) {
  document.querySelector(".highscores4").innerHTML = "";
  document.querySelector(".highscores4").classList.remove("highscores4");
}

if (isNaN(high[4])) {
  document.querySelector(".highscores5").innerHTML = "";
  document.querySelector(".highscores5").classList.remove("highscores5");
}

document.querySelector(".clear-btn").addEventListener("click", function() {
  localStorage.removeItem("high");
  document.querySelector("body").innerHTML = `<h1 class="high-score">High Scores</h1>
    <div class="highscores1">0</div>
    <div class="highscores2">0</div>
    <div class="highscores3">0</div>
    <div class="highscores4">0</div>
    <div class="highscores5">0</div>
    <div class="clear-button"><button type="button" name = "button" class ="clear-btn">Clear High Scores</button></div>`;

  if (isNaN(high[1])) {
    document.querySelector(".highscores2").innerHTML = "";
    document.querySelector(".highscores2").classList.remove("highscores2");
  }

  if (isNaN(high[2])) {
    document.querySelector(".highscores3").innerHTML = "";
    document.querySelector(".highscores3").classList.remove("highscores3");
  }

  if (isNaN(high[3])) {
    document.querySelector(".highscores4").innerHTML = "";
    document.querySelector(".highscores4").classList.remove("highscores4");
  }

  if (isNaN(high[4])) {
    document.querySelector(".highscores5").innerHTML = "";
    document.querySelector(".highscores5").classList.remove("highscores5");
  }
})
