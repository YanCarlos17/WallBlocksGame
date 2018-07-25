    var canvas = document.getElementById('micanvas');
    var ctx = canvas.getContext('2d');
    var x = canvas.width / 2;
    var y = canvas.height - 30;
    var dx = 3;
    var dy = -3;
    var ballRadius = 10;
    var paddleHeight = 10;
    var paddleWidth = 75;
    var paddleX = (canvas.width-paddleWidth)/2;
    var rightPressed = false;
    var leftPressed = false;    

// function blocks(){
//     ctx.beginPath();
//     ctx.rect(20, 20, 100, 30);
//     ctx.fillStyle = "#0095DD";
//     ctx.fill();
//     ctx.closePath();

//     ctx.beginPath();
//     ctx.rect(130, 20, 100, 30);
//     ctx.fillStyle = "#0095DD";
//     ctx.fill();
//     ctx.closePath();

//     ctx.beginPath();
//     ctx.rect(240, 20, 100, 30);
//     ctx.fillStyle = "#0095DD";
//     ctx.fill();
//     ctx.closePath();
// }

// function drawBlocks(){
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     blocks();
// }
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;   
    }
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }
    x += dx;
    y += dy;

    if(rightPressed && paddleX < canvas.width-paddleWidth) {
    paddleX += 7;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= 7;
    }
}
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
}
setInterval(draw, 10);