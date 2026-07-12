import {canvas, ctx, resizeCanvas} from "./canvas.js";
import {createBarriers, drawBarriers, updateBarriers} from "./barriers.js";

let previousTime;

function init() {
    resizeCanvas();
    createBarriers();
    gameLoop();
}

function update(deltaTime) {
    updateBarriers(deltaTime);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawBarriers(ctx, canvas);
}

function gameLoop(currentTime) {
    if (previousTime === undefined) {
        previousTime = currentTime;
        requestAnimationFrame(gameLoop);
        return;
    }

    const deltaTime = (currentTime - previousTime) / 1000;
    previousTime = currentTime;

    update(deltaTime);
    draw();
    requestAnimationFrame(gameLoop);
}
init();
window.addEventListener('resize', resizeCanvas);