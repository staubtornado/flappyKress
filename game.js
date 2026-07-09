const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');


function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function gameLoop() {
    draw();
    requestAnimationFrame(gameLoop);
}

resizeCanvas();
gameLoop();
window.addEventListener('resize', resizeCanvas);