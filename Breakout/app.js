
let score = document.querySelector(".score");
let box = document.querySelector(".box");
let boxLeftWall = 0;
let boxBottomWall = 0;
let userPositionX = 40;
let userPositionY = 40;
let ballPositionX = 60;
let ballPositionY = 60;
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
    xAxis: 10,
    yAxis: 460,
  },
  {
    xAxis: 120,
    yAxis: 460,
  },
  {
    xAxis: 230,
    yAxis: 460,
  },
  {
    xAxis: 340,
    yAxis: 460,
  },
  {
    xAxis: 450,
    yAxis: 460,
  },
  {
    xAxis: 560,
    yAxis: 460,
  },
  {
    xAxis: 670,
    yAxis: 460,
  },
  {
    xAxis: 780,
    yAxis: 460,
  },
  {
    xAxis: 890,
    yAxis: 460,
  },
  {
    xAxis: 60,
    yAxis: 430,
  },
  {
    xAxis: 170,
    yAxis: 430,
  },
  {
    xAxis: 280,
    yAxis: 430,
  },
  {
    xAxis: 390,
    yAxis: 430,
  },
  {
    xAxis: 500,
    yAxis: 430,
  },
  {
    xAxis: 610,
    yAxis: 430,
  },
  {
    xAxis: 720,
    yAxis: 430,
  },
  {
    xAxis: 830,
    yAxis: 430,
  },
  {
    xAxis: 10,
    yAxis: 400,
  },
  {
    xAxis: 120,
    yAxis: 400,
  },
  {
    xAxis: 230,
    yAxis: 400,
  },
  {
    xAxis: 340,
    yAxis: 400,
  },
  {
    xAxis: 450,
    yAxis: 400,
  },
  {
    xAxis: 560,
    yAxis: 400,
  },
  {
    xAxis: 670,
    yAxis: 400,
  },
  {
    xAxis: 780,
    yAxis: 400,
  },
  {
    xAxis: 890,
    yAxis: 400,
  },
  {
    xAxis: 60,
    yAxis: 370,
  },
  {
    xAxis: 170,
    yAxis: 370,
  },
  {
    xAxis: 280,
    yAxis: 370,
  },
  {
    xAxis: 390,
    yAxis: 370,
  },
  {
    xAxis: 500,
    yAxis: 370,
  },
  {
    xAxis: 610,
    yAxis: 370,
  },
  {
    xAxis: 720,
    yAxis: 370,
  },
  {
    xAxis: 830,
    yAxis: 370,
  },
  {
    xAxis: 10,
    yAxis: 340,
  },
  {
    xAxis: 120,
    yAxis: 340,
  },
  {
    xAxis: 230,
    yAxis: 340,
  },
  {
    xAxis: 340,
    yAxis: 340,
  },
  {
    xAxis: 450,
    yAxis: 340,
  },
  {
    xAxis: 560,
    yAxis: 340,
  },
  {
    xAxis: 670,
    yAxis: 340,
  },
  {
    xAxis: 780,
    yAxis: 340,
  },
  {
    xAxis: 890,
    yAxis: 340,
  },
  {
    xAxis: 60,
    yAxis: 310,
  },
  {
    xAxis: 170,
    yAxis: 310,
  },
  {
    xAxis: 280,
    yAxis: 310,
  },
  {
    xAxis: 390,
    yAxis: 310,
  },
  {
    xAxis: 500,
    yAxis: 310,
  },
  {
    xAxis: 610,
    yAxis: 310,
  },
  {
    xAxis: 720,
    yAxis: 310,
  },
  {
    xAxis: 830,
    yAxis: 310,
  },
  {
    xAxis: 10,
    yAxis: 280,
  },
  {
    xAxis: 120,
    yAxis: 280,
  },
  {
    xAxis: 230,
    yAxis: 280,
  },
  {
    xAxis: 340,
    yAxis: 280,
  },
  {
    xAxis: 450,
    yAxis: 280,
  },
  {
    xAxis: 560,
    yAxis: 280,
  },
  {
    xAxis: 670,
    yAxis: 280,
  },
  {
    xAxis: 780,
    yAxis: 280,
  },
  {
    xAxis: 890,
    yAxis: 280,
  },
  {
    xAxis: 60,
    yAxis: 250,
  },
  {
    xAxis: 170,
    yAxis: 250,
  },
  {
    xAxis: 280,
    yAxis: 250,
  },
  {
    xAxis: 390,
    yAxis: 250,
  },
  {
    xAxis: 500,
    yAxis: 250,
  },
  {
    xAxis: 610,
    yAxis: 250,
  },
  {
    xAxis: 720,
    yAxis: 250,
  },
  {
    xAxis: 830,
    yAxis: 250,
  },
  {
    xAxis: 10,
    yAxis: 220,
  },
  {
    xAxis: 120,
    yAxis: 220,
  },
  {
    xAxis: 230,
    yAxis: 220,
  },
  {
    xAxis: 340,
    yAxis: 220,
  },
  {
    xAxis: 450,
    yAxis: 220,
  },
  {
    xAxis: 560,
    yAxis: 220,
  },
  {
    xAxis: 670,
    yAxis: 220,
  },
  {
    xAxis: 780,
    yAxis: 220,
  },
  {
    xAxis: 890,
    yAxis: 220,
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
  if (userPositionX > boxLeftWall+30) {
    userPositionX -= 30;
  }
}

function moveUserRight() {
  if (userPositionX < boxLeftWall+878) {
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
    if ((ballPositionX > e.xAxis && ballPositionX < e.xAxis + 100) && (ballPositionY > e.yAxis-20)) {
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
  if (ballPositionY >= 500) {
    addY = -2;
  }
  if (ballPositionX >= 970) {
    addX = -2;
  }
  if (ballPositionX <= 0) {
    addX = 2;
  }
  if ((ballPositionX > userPositionX && ballPositionX < userPositionX + 100) && (ballPositionY === userPositionY+20)) {
    addY = 2;
    var audio = new Audio("3.mp3");
    audio.play();
  }
  if (ballPositionY <= 5) {
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
