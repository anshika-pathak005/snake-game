//board
let blockSize = 25; //means the size of snake or food 
let rows = 25; //row no in board
let cols = 25; //cols no in board
let board;
let context;

// snake head
let snakeX = blockSize * 5;
let snakeY = blockSize * 5;

// to move the snake
let velocityX = 0;
let velocityY = 0;

let snakeBody = [];

let score = 0;
let highScore = localStorage.getItem("highScore") || 0;

// food
let foodX;
let foodY;

let gameOver = false;

window.onload = function(){
    board = document.getElementById("board");
    board.height = rows * blockSize;
    board.width = cols * blockSize;
    context = board.getContext("2d"); //this is used for drawing on the board;

    placeFood();
    document.addEventListener("keyup",changeDirection);
    // update();
    setInterval(update,130) //every 100 the canvas will update
}

let bgImage = new Image();
bgImage.src = "bg1.jpg"; // path to your image

// function for updating the canvas
function update(){

    if(gameOver){
        return;
    }

    // board
    context.drawImage(bgImage, 0, 0, board.width, board.height);

    // food
    context.fillStyle = "red";
    context.fillRect(foodX, foodY, blockSize, blockSize);

    // everytime snake touches food the food should change its position
    if(snakeX == foodX && snakeY == foodY){
        snakeBody.push([foodX,foodY])
        placeFood();
        score += 1; //since there are 2 pipe and both are counted

        // Update high score if current score is higher
        if (score > highScore) {
            highScore = score;
            localStorage.setItem("highScore", highScore);
        }
    }

    // snake bodies are not connected
    for(let i = snakeBody.length-1 ; i > 0 ; i--){
        snakeBody[i] = snakeBody[i-1];
    }
    if(snakeBody.length){
        snakeBody[0] = [snakeX, snakeY];
    }

    //snake
    context.fillStyle = "lime";
    snakeX += velocityX * blockSize;
    snakeY += velocityY * blockSize;
    context.fillRect(snakeX, snakeY, blockSize, blockSize)

    for(let i = 0; i < snakeBody.length ; i++){
        context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
    }

    // game over condition - when snake goes out of board
    if(snakeX < 0 || snakeX >= rows*blockSize || snakeY < 0 || snakeY >= cols*blockSize){
        gameOver = true;
        // alert("Chal hat tose na ho payega😎");
    }

    // game over if snake hits its body itself
    for(let i = 0 ; i < snakeBody.length ; i++){
        if(snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]){
            gameOver = true;
        }
    }

    //scores
    context.fillStyle = "white";
    context.font = "20px sans-serif";
    context.fillText("Score: "+score, 25, 45);

    //for high score
    context.fillStyle = "white";
    context.font = "18px sans-serif";
    context.fillText("HighScore: "+ highScore, 380, 45);

    // if game over
    if(gameOver){
    context.fillStyle = "white";
    context.font = "30px sans-serif";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText("Bruhhh!🤐", board.width / 2, board.height / 2);
}

}

// function for changing the direction of the snake
function changeDirection(e){
    if(e.code == "ArrowUp" && velocityY != 1){
        velocityX = 0;
        velocityY = -1;
    }
    else if(e.code == "ArrowDown" && velocityY != -1){
        velocityX = 0;
        velocityY = 1;
    }
    else if(e.code == "ArrowLeft" && velocityX != 1){
        velocityX = -1;
        velocityY = 0;
    }
    else if(e.code == "ArrowRight" && velocityX != -1){
        velocityX = 1;
        velocityY = 0;
    }
}


// fuction for placing  the food at random position 
function placeFood(){
    foodX = Math.floor(Math.random() * cols) * blockSize;
    foodY = Math.floor(Math.random() * rows) * blockSize;
}
