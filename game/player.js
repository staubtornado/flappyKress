class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    update(deltaTime) {

    }

    draw() {
        ctx.fillStyle = '#00F0FF';
        ctx.fillRect(this.x, this.y, 40, 40);
    }
}