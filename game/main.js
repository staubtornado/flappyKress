import {canvas, ctx, resizeCanvas} from "./canvas.js";
import {createBarriers, drawBarriers, updateBarriers} from "./barriers.js";

let previousTime;

function init() {
    resizeCanvas();
    createBarriers();
    requestAnimationFrame(gameLoop);
}

function update(deltaTime) {
    updateBarriers(deltaTime);
}

function draw() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawBarriers();
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