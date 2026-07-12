import {canvas, ctx} from "./canvas.js";

const barrierWidth = 80
const barrierDistance = 350
const barrierSpeed = 180;
const barrierGapHeight = 220

class Barrier {
    constructor(x, gapY) {
        this.x = x;
        this.gapY = gapY;
    }

    update(deltaTime) {
        this.x -= barrierSpeed * deltaTime;
    }

    draw(ctx, canvasHeight) {
        const bottomY = this.gapY + barrierGapHeight;
        const bottomHeight = canvasHeight - bottomY;

        ctx.fillStyle = 'green';
        ctx.fillRect(this.x, 0, barrierWidth, this.gapY)
        ctx.fillRect(this.x, bottomY, barrierWidth, bottomHeight);
    }

    isOutsideCanvas() {
        return this.x + barrierWidth < 0;
    }
}

const barriers = [];


function updateBarriers(deltaTime) {
    barriers.forEach(barrier => {
        barrier.update(deltaTime);
    });

    if (barriers.at(0).isOutsideCanvas()) {
        barriers.splice(0, 1);
        barriers.push(createRandomBarrier(10));
    }
}

function drawBarriers() {
    barriers.forEach(barrier => {
        barrier.draw(ctx, canvas.height);
    })
}


function createBarriers() {
    for (let i = 0; i < 10; i++) {
        barriers.push(createRandomBarrier(i));
    }
}

function createRandomBarrier(at) {
    const x = (barrierWidth + barrierDistance) * at;
    const gapY = Math.random() * (canvas.height - barrierGapHeight);
    return new Barrier(x, gapY);
}

export {
    createBarriers,
    updateBarriers,
    drawBarriers,
}