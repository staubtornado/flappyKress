let previousTime;

let player;

function init() {
    resizeCanvas();
    initBarriers();

    player = new Player(0, getStartingGapY());
    requestAnimationFrame(gameLoop);
}

function update(deltaTime) {
    updateBarriers(deltaTime);
    player.update(deltaTime);
}

function draw() {
    ctx.fillStyle = '#1A1A1D';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawBarriers();
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
window.addEventListener('resize', resizeCanvas);