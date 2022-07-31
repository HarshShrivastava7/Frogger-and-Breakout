let box = document.querySelector(".box");
// let divs = document.querySelectorAll("div");
// here it is not working bcz divs are not created
let score = document.querySelector(".score");
let timeLeft = document.querySelector(".time-left");
let counter = 1;
let id = 77;

function createSmallBox(i) {
  let smallBox = document.createElement("div");
  smallBox.setAttribute("id", `${i}`);
  if ((i) <= 9 * counter) {
    smallBox.classList.add(`r${counter}`);
    if ((i) === 9 * counter) {
      counter++;
    }
  }
  box.appendChild(smallBox);
}

for (let i = 0; i < 81; i++) {
  createSmallBox(i + 1);
}

let divs = document.querySelectorAll("div");
let reqId = document.getElementById(`${id}`);
reqId.classList.add("frogger");

let finalPosition = document.getElementById("5");
finalPosition.classList.add("finalPosition");

let initialPosition = document.getElementById("77");
// initialPosition.style.backgroundColor = "blue";
// here .style is not used bcz it does not allow class frogger to overwrite it
initialPosition.classList.add("initialPosition");

function frogMovement(e) {
  var audio = new Audio("3.mp3");
  audio.play();
  divs.forEach(function(x) {
    x.classList.remove("frogger");
    // console.log(x);
  })
  // console.log(id);
  if (e.key === "ArrowRight") {
    let oldId = id;
    id++;
    if (id < 1 || id > 81) {
      id = oldId;
    }
    // console.log(id,oldId);
    document.getElementById(`${id}`).classList.add("frogger");
  }
  if (e.key === "ArrowLeft") {
    let oldId = id;
    id--;
    if (id < 1 || id > 81) {
      id = oldId;
    }
    // console.log(id,oldId);
    document.getElementById(`${id}`).classList.add("frogger");
  }
  if (e.key === "ArrowUp") {
    let oldId = id;
    id -= 9;
    if (id < 1 || id > 81) {
      id = oldId;
    }
    // console.log(id,oldId);
    document.getElementById(`${id}`).classList.add("frogger");
  }
  if (e.key === "ArrowDown") {
    let oldId = id;
    id += 9;
    if (id < 1 || id > 81) {
      id = oldId;
    }
    // console.log(id,oldId);
    document.getElementById(`${id}`).classList.add("frogger");
  }
  if (id === 5) {
    score.innerHTML = `You Won! :)`;
    var audio = new Audio("0.mp3");
    audio.play();
    document.removeEventListener("keydown", frogMovement);
    clearInterval(movingCars);
    clearInterval(movingRoads);
    clearInterval(timeleft);
    clearInterval(check);
  }
}

let car = `<span class="car-icon">
  <i class="fas fa-car"></i>
</span>`;

let road = `<span class="road-icon">
  <i class="fas fa-road"></i>
</span>`;

document.getElementById(`20`).innerHTML = car;
document.getElementById(`21`).innerHTML = car;
document.getElementById(`24`).innerHTML = car;
document.getElementById(`25`).innerHTML = car;
document.getElementById(`30`).innerHTML = car;
document.getElementById(`31`).innerHTML = car;
document.getElementById(`34`).innerHTML = car;
document.getElementById(`35`).innerHTML = car;
// console.log(document.getElementById(`35`).classList.contains("frogger"));

let carNo1 = 20;
let carNo2 = 21;
let carNo3 = 24;
let carNo4 = 25;
let carNo5 = 30;
let carNo6 = 31;
let carNo7 = 34;
let carNo8 = 35;

function carMovement() {
  divs.forEach(function(e,x){
    if(x+1>=19 && x+1<=36){
      e.innerHTML = "";
    }
  });
  carNo1++;
  if(carNo1<19){
    carNo1 = 27;
  }
  else if(carNo1>27){
    carNo1 = 19;
  }
  else{
    carNo1 = carNo1;
  }
  carNo2++;
  if(carNo2<19){
    carNo2 = 27;
  }
  else if(carNo2>27){
    carNo2 = 19;
  }
  else{
    carNo2 = carNo2;
  }
  carNo3++;
  if(carNo3<19){
    carNo3 = 27;
  }
  else if(carNo3>27){
    carNo3 = 19;
  }
  else{
    carNo3 = carNo3;
  }
  carNo4++;
  if(carNo4<19){
    carNo4 = 27;
  }
  else if(carNo4>27){
    carNo4 = 19;
  }
  else{
    carNo4 = carNo4;
  }
  document.getElementById(`${carNo1}`).innerHTML = car;
  document.getElementById(`${carNo2}`).innerHTML = car;
  document.getElementById(`${carNo3}`).innerHTML = car;
  document.getElementById(`${carNo4}`).innerHTML = car;

  // r4
  carNo6++;
  if(carNo6<28){
    carNo6 = 36;
  }
  else if(carNo6>36){
    carNo6 = 28;
  }
  else{
    carNo6 = carNo6;
  }
  carNo5++;
  if(carNo5<28){
    carNo5 = 36;
  }
  else if(carNo5>36){
    carNo5 = 28;
  }
  else{
    carNo5 = carNo5;
  }
  carNo7++;
  if(carNo7<28){
    carNo7 = 36;
  }
  else if(carNo7>36){
    carNo7 = 28;
  }
  else{
    carNo7 = carNo7;
  }
  carNo8++;
  if(carNo8<28){
    carNo8 = 36;
  }
  else if(carNo8>36){
    carNo8 = 28;
  }
  else{
    carNo8 = carNo8;
  }
  document.getElementById(`${carNo5}`).innerHTML = car;
  document.getElementById(`${carNo6}`).innerHTML = car;
  document.getElementById(`${carNo7}`).innerHTML = car;
  document.getElementById(`${carNo8}`).innerHTML = car;
}

document.getElementById(`46`).innerHTML = road;
document.getElementById(`56`).innerHTML = road;
document.getElementById(`58`).innerHTML = road;
document.getElementById(`50`).innerHTML = road;
document.getElementById(`52`).innerHTML = road;
document.getElementById(`62`).innerHTML = road;

let roadNo1 = 46;
let roadNo2 = 50;
let roadNo3 = 52;
let roadNo4 = 56;
let roadNo5 = 58;
let roadNo6 = 62;

function roadMovement() {
  divs.forEach(function(e,x){
    if(x+1>=46 && x+1<=63){
      e.innerHTML = "";
    }
  });
  roadNo1++;
  if(roadNo1<46){
    roadNo1 = 54;
  }
  else if(roadNo1>54){
    roadNo1 = 46;
  }
  else{
    roadNo1 = roadNo1;
  }
  roadNo2++;
  if(roadNo2<46){
    roadNo2 = 54;
  }
  else if(roadNo2>54){
    roadNo2 = 46;
  }
  else{
    roadNo2 = roadNo2;
  }
  roadNo3++;
  if(roadNo3<46){
    roadNo3 = 54;
  }
  else if(roadNo3>54){
    roadNo3 = 46;
  }
  else{
    roadNo3 = roadNo3;
  }

  document.getElementById(`${roadNo1}`).innerHTML = road;
  document.getElementById(`${roadNo2}`).innerHTML = road;
  document.getElementById(`${roadNo3}`).innerHTML = road;

  // r7
  roadNo4++;
  if(roadNo4<55){
    roadNo4 = 63;
  }
  else if(roadNo4>63){
    roadNo4 = 55;
  }
  else{
    roadNo4 = roadNo4;
  }
  roadNo5++;
  if(roadNo5<55){
    roadNo5 = 63;
  }
  else if(roadNo5>63){
    roadNo5 = 55;
  }
  else{
    roadNo5 = roadNo5;
  }
  roadNo6++;
  if(roadNo6<55){
    roadNo6 = 63;
  }
  else if(roadNo6>63){
    roadNo6 = 55;
  }
  else{
    roadNo6 = roadNo6;
  }

  document.getElementById(`${roadNo4}`).innerHTML = road;
  document.getElementById(`${roadNo5}`).innerHTML = road;
  document.getElementById(`${roadNo6}`).innerHTML = road;
}

function checking(){
  divs.forEach(function(e,x){
    if((x+1)>=46 && (x+1)<=63){
      if(e.classList.contains("frogger") && document.getElementById(`${x+1}`).innerHTML.length===0){
        console.log(x+1);
        score.innerHTML = `You Lost :(`;
        var audio = new Audio("wrong.mp3");
        audio.play();
        document.removeEventListener("keydown", frogMovement);
        clearInterval(movingCars);
        clearInterval(movingRoads);
        clearInterval(timeleft);
        clearInterval(check);
      }
    }
    else{
      if(e.classList.contains("frogger") && document.getElementById(`${x+1}`).innerHTML.length>0){
        console.log(x+1);
        score.innerHTML = `You Lost :(`;
        var audio = new Audio("wrong.mp3");
        audio.play();
        document.removeEventListener("keydown", frogMovement);
        clearInterval(movingCars);
        clearInterval(movingRoads);
        clearInterval(timeleft);
        clearInterval(check);
      }  
    }
  })
}

let timeRemaining = 10;

function time(){
  timeRemaining--;
  timeLeft.innerHTML = `Time Left : ${timeRemaining}`
  if(timeRemaining<0){
    score.innerHTML = `You Lost :(` ;
    var audio = new Audio("2.mp3");
    audio.play();
    clearInterval(timeleft);
    document.removeEventListener("keydown", frogMovement);
    clearInterval(movingCars);
    clearInterval(movingRoads);
    timeLeft.innerHTML = `Time Left : 0`
  }
}

let movingCars = setInterval(carMovement,200);
let movingRoads = setInterval(roadMovement,500);
let check = setInterval(checking,10);
let timeleft = setInterval(time,1000);

document.addEventListener("keydown", frogMovement);
