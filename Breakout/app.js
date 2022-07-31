
let score = document.querySelector(".score");
let box = document.querySelector(".box");
let boxLeftWall = 280;
let boxRightWall = 1180;
let userPositionX = 730;
let userPositionY = 80;
let ballPositionX = 790;
let ballPositionY = 100;
let addX = 2;
let addY = 2;
let counter = 0;

// user
let user = document.createElement("div");
// block.innerHTML = "hi"
user.classList.add("user");
user.style.left = `${userPositionX}px`
user.style.bottom = `${userPositionY}px`
// block.bottomLeft = ["800px","100px"]
box.appendChild(user);


let blocks = [{
    xAxis: 290,
    yAxis: 525,
  },
  {
    xAxis: 400,
    yAxis: 525,
  },
  {
    xAxis: 510,
    yAxis: 525,
  },
  {
    xAxis: 620,
    yAxis: 525,
  },
  {
    xAxis: 730,
    yAxis: 525,
  },
  {
    xAxis: 840,
    yAxis: 525,
  },
  {
    xAxis: 950,
    yAxis: 525,
  },
  {
    xAxis: 1060,
    yAxis: 525,
  },
  {
    xAxis: 1170,
    yAxis: 525,
  },
  {
    xAxis: 340,
    yAxis: 495,
  },
  {
    xAxis: 450,
    yAxis: 495,
  },
  {
    xAxis: 560,
    yAxis: 495,
  },
  {
    xAxis: 670,
    yAxis: 495,
  },
  {
    xAxis: 780,
    yAxis: 495,
  },
  {
    xAxis: 890,
    yAxis: 495,
  },
  {
    xAxis: 1000,
    yAxis: 495,
  },
  {
    xAxis: 1110,
    yAxis: 495,
  },
  {
    xAxis: 290,
    yAxis: 465,
  },
  {
    xAxis: 400,
    yAxis: 465,
  },
  {
    xAxis: 510,
    yAxis: 465,
  },
  {
    xAxis: 620,
    yAxis: 465,
  },
  {
    xAxis: 730,
    yAxis: 465,
  },
  {
    xAxis: 840,
    yAxis: 465,
  },
  {
    xAxis: 950,
    yAxis: 465,
  },
  {
    xAxis: 1060,
    yAxis: 465,
  },
  {
    xAxis: 1170,
    yAxis: 465,
  },
  {
    xAxis: 340,
    yAxis: 435,
  },
  {
    xAxis: 450,
    yAxis: 435,
  },
  {
    xAxis: 560,
    yAxis: 435,
  },
  {
    xAxis: 670,
    yAxis: 435,
  },
  {
    xAxis: 780,
    yAxis: 435,
  },
  {
    xAxis: 890,
    yAxis: 435,
  },
  {
    xAxis: 1000,
    yAxis: 435,
  },
  {
    xAxis: 1110,
    yAxis: 435,
  },
  {
    xAxis: 290,
    yAxis: 405,
  },
  {
    xAxis: 400,
    yAxis: 405,
  },
  {
    xAxis: 510,
    yAxis: 405,
  },
  {
    xAxis: 620,
    yAxis: 405,
  },
  {
    xAxis: 730,
    yAxis: 405,
  },
  {
    xAxis: 840,
    yAxis: 405,
  },
  {
    xAxis: 950,
    yAxis: 405,
  },
  {
    xAxis: 1060,
    yAxis: 405,
  },
  {
    xAxis: 1170,
    yAxis: 405,
  },
  {
    xAxis: 340,
    yAxis: 375,
  },
  {
    xAxis: 450,
    yAxis: 375,
  },
  {
    xAxis: 560,
    yAxis: 375,
  },
  {
    xAxis: 670,
    yAxis: 375,
  },
  {
    xAxis: 780,
    yAxis: 375,
  },
  {
    xAxis: 890,
    yAxis: 375,
  },
  {
    xAxis: 1000,
    yAxis: 375,
  },
  {
    xAxis: 1110,
    yAxis: 375,
  },
  {
    xAxis: 290,
    yAxis: 345,
  },
  {
    xAxis: 400,
    yAxis: 345,
  },
  {
    xAxis: 510,
    yAxis: 345,
  },
  {
    xAxis: 620,
    yAxis: 345,
  },
  {
    xAxis: 730,
    yAxis: 345,
  },
  {
    xAxis: 840,
    yAxis: 345,
  },
  {
    xAxis: 950,
    yAxis: 345,
  },
  {
    xAxis: 1060,
    yAxis: 345,
  },
  {
    xAxis: 1170,
    yAxis: 345,
  },
  {
    xAxis: 340,
    yAxis: 315,
  },
  {
    xAxis: 450,
    yAxis: 315,
  },
  {
    xAxis: 560,
    yAxis: 315,
  },
  {
    xAxis: 670,
    yAxis: 315,
  },
  {
    xAxis: 780,
    yAxis: 315,
  },
  {
    xAxis: 890,
    yAxis: 315,
  },
  {
    xAxis: 1000,
    yAxis: 315,
  },
  {
    xAxis: 1110,
    yAxis: 315,
  },
  {
    xAxis: 290,
    yAxis: 285,
  },
  {
    xAxis: 400,
    yAxis: 285,
  },
  {
    xAxis: 510,
    yAxis: 285,
  },
  {
    xAxis: 620,
    yAxis: 285,
  },
  {
    xAxis: 730,
    yAxis: 285,
  },
  {
    xAxis: 840,
    yAxis: 285,
  },
  {
    xAxis: 950,
    yAxis: 285,
  },
  {
    xAxis: 1060,
    yAxis: 285,
  },
  {
    xAxis: 1170,
    yAxis: 285,
  },
];
let originalArrayLength = blocks.length;


function createBlocks(i, x) {
  let block = document.createElement("div");
  // block.innerHTML = "hi"
  block.classList.add("block");
  block.style.left = `${i.xAxis}px`;
  block.style.bottom = `${i.yAxis}px`;
  block.setAttribute("id", `${i.xAxis}px-${i.yAxis}px`)

  // block.bottomLeft = ["800px","100px"]
  box.appendChild(block);
}

// ball
let ball = document.createElement("div");
ball.classList.add("ball");
ball.style.left = `${ballPositionX}px`;
ball.style.bottom = `${ballPositionY}px`;
box.appendChild(ball);

blocks.forEach(function(e, x) {
  createBlocks(e, x);
});

// let ballMoving = setInterval(moveBall, 20);

function moveUserLeft() {
  if (userPositionX > boxLeftWall) {
    userPositionX -= 30;
  }
}

function moveUserRight() {
  if (userPositionX < boxRightWall) {
    userPositionX += 30;
  }
}

function moveBall() {
  // console.log(ballPositionX,userPositionX);
  changeDirction();
  ballPositionX += addX;
  ballPositionY += addY;
  // console.log(ballPositionX, ballPositionY);
  ball.style.left = `${ballPositionX}px`;
  ball.style.bottom = `${ballPositionY}px`;
  blocks.forEach(function(e, x) {
    // console.log(x);
    // console.log(ballPositionX , e.xAxis , ballPositionY, e.yAxis);
    if ((ballPositionX > e.xAxis - 10 && ballPositionX < e.xAxis + 90) && (ballPositionY > e.yAxis - 10 && ballPositionY < e.yAxis + 30)) {
      addY = -2;
      counter++;
      score.innerHTML = `Score : ${counter}`;
      var audio = new Audio("0.mp3");
      audio.play();
      document.getElementById(`${e.xAxis}px-${e.yAxis}px`).classList.add("hidden");
      // console.log(x);
      blocks.splice(x, 1);
      // console.log(blocks);
      // console.log((blocks.splice(x,1)).xAxis);
      // blocks.filter(function(event,xr){
      //   // console.log(xr,x);
      //   if((event.xAxis === blocks.splice(x,1).xAxis) && ((event.yAxis === blocks.splice(x,1).yAxis))){
      //     return event;
      //   }
      // });
      // console.log(blocks);
      // // console.log(blocks.splice(x,1));
      // console.log(x);

      // This method fails because after splice length of our array blocks also decreases and thus index number changes but here we gave the id to our div acc to older index and thus the confusion starts
    }
  });
  if (counter === originalArrayLength) {
    score.innerHTML = `Hurray ! You Won... <a target="_blank" class="highscore-btn" href="highscore.html"><span>High Scores</span></a>`;

    let highScores = localStorage.getItem("high") ? JSON.parse(localStorage.getItem("high")) : [];
    // console.log(highScores);
    highScores.push(counter);
    // console.log(counter);
    highScores.sort(function(a, b) {
      return b - a
    });
    // console.log(highScores);
    if (highScores.length > 5) {
      highScores.pop();
    }
    localStorage.setItem("high", JSON.stringify(highScores));
    clearInterval(ballMoving);
    var audio = new Audio("2.mp3");
    audio.play();
    document.removeEventListener("keydown", moveUser);
  }
}

function changeDirction() {
  if (ballPositionY > 535) {
    addY = -2;
  }
  if (ballPositionX > 1260) {
    addX = -2;
  }
  if (ballPositionX < 280) {
    addX = 2;
  }
  if ((ballPositionX > userPositionX - 10 && ballPositionX < userPositionX + 90) && (ballPositionY === 100)) {
    addY = 2;
    var audio = new Audio("3.mp3");
    audio.play();
  }
  if (ballPositionY < 55) {
    clearInterval(ballMoving);
    document.removeEventListener("keydown", moveUser);
    score.innerHTML = `You Lose ! <a target="_blank" class="highscore-btn" href="highscore.html"><span>High Scores</span></a>`;
    let highScores = localStorage.getItem("high") ? JSON.parse(localStorage.getItem("high")) : [];
    // console.log(highScores);
    highScores.push(counter);
    // console.log(counter);
    highScores.sort(function(a, b) {
      return b - a
    });
    // console.log(highScores);
    if (highScores.length > 5) {
      highScores.pop();
    }
    localStorage.setItem("high", JSON.stringify(highScores));
    var audio = new Audio("wrong.mp3");
    audio.play();
  }
}

function moveUser(e) {
  if (e.key === 'ArrowLeft') {
    moveUserLeft();
    user.style.left = `${userPositionX}px`
    user.style.bottom = `${userPositionY}px`
    // console.log(userPositionX-10 , userPositionX+90,userPositionX);
    // console.log(userPositionX,boxLeftWall);
  }
  if (e.key === 'ArrowRight') {
    moveUserRight();
    user.style.left = `${userPositionX}px`
    user.style.bottom = `${userPositionY}px`
    // console.log(userPositionX-10 , userPositionX+90,userPositionX);
    // console.log(userPositionX,boxRightWall);
  }
}
// console.log(userPositionX-50 , userPositionX+50,userPositionX);
document.addEventListener("keydown", moveUser);
let ballMoving = setInterval(moveBall, 15);
