let previousTime;

let player;
let barriers;

function init() {
    resizeCanvas();
    barriers = new Barriers(canvas, ctx);
    resetGame();

    requestAnimationFrame(gameLoop);
}

function resetGame() {
    barriers.reset();
    player = new Player(0, barriers.getStartingGapY());
}

function update(deltaTime) {
    barriers.update(deltaTime);
    player.update(deltaTime);
}

function draw() {
    ctx.fillStyle = '#1A1A1D';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    barriers.draw();
    player.draw();
}

function gameLoop(currentTime) {
    if (previousTime === undefined) {
        previousTime = currentTime;
        requestAnimationFrame(gameLoop);
        return;
    }

    const deltaTime = Math.min(((currentTime - previousTime) / 1000), 0.05);
    previousTime = currentTime;

    update(deltaTime);
    draw();
    requestAnimationFrame(gameLoop);
}
init();
window.addEventListener('resize', () => {
    resizeCanvas();
    resetGame();
});
