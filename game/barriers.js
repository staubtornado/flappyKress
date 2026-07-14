class Barriers {
    constructor(canvas, ctx, options = {}) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.width = options.width ?? 80;
        this.distance = options.distance ?? 350;
        this.speed = options.speed ?? 120;
        this.gapHeight = options.gapHeight ?? 220;
        this.count = options.count ?? 10;
        this.barriers = [];
    }

    reset() {
        this.barriers = [];

        for (let index = 0; index < this.count; index++) {
            this.barriers.push(this.createRandomBarrier(index * this.distance));
        }
    }

    update(deltaTime) {
        this.barriers.forEach(barrier => {
            barrier.x -= this.speed * deltaTime;
        });

        while (this.barriers[0]?.x + this.width < 0) {
            this.barriers.shift();

            const lastBarrier = this.barriers.at(-1);
            this.barriers.push(this.createRandomBarrier(lastBarrier.x + this.distance));
        }
    }

    draw() {
        this.ctx.fillStyle = '#CCFF00';

        this.barriers.forEach(barrier => {
            const bottomY = barrier.gapY + this.gapHeight;

            this.ctx.fillRect(barrier.x, 0, this.width, barrier.gapY);
            this.ctx.fillRect(barrier.x, bottomY, this.width, this.canvas.height - bottomY);
        });
    }

    getStartingGapY(playerHeight = 20) {
        const firstBarrier = this.barriers[0];
        return firstBarrier.gapY + (this.gapHeight - playerHeight) / 2;
    }

    createRandomBarrier(x) {
        const availableHeight = Math.max(0, this.canvas.height - this.gapHeight);
        const gapY = Math.random() * availableHeight;

        return {x, gapY};
    }
}
