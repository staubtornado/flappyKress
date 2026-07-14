const barrierWidth = 80
const barrierDistance = 350
const barrierSpeed = 120;
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

        ctx.fillStyle = '#CCFF00';
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

    while (barriers.length > 0 && barriers[0].isOutsideCanvas()) {
        barriers.shift();

        const lastBarrier = barriers.at(-1);
        const newX = lastBarrier.x + barrierDistance;

        barriers.push(createRandomBarrierAt(newX));
    }
}

function drawBarriers() {
    barriers.forEach(barrier => {
        barrier.draw(ctx, canvas.height);
    });
}


function initBarriers() {
    barriers.length = 0;
    for (let i = 0; i < 10; i++) {
        const x = i * (barrierDistance);
        barriers.push(createRandomBarrierAt(x));
    }
}

function getStartingGapY() {
    return barriers[0].gapY + barrierGapHeight / 2;
}

function createRandomBarrierAt(x) {
    const gapY = Math.random() * (canvas.height - barrierGapHeight);
    return new Barrier(x, gapY);
}
