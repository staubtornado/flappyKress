class Player {
    constructor(x, y, keyboard) {
        this.x = x;
        this.y = y;
        this.keyboard = keyboard;
        this.baseY = y;
        this.hoverTime = 0;
        this.hoverAmplitude = 12;
        this.hoverSpeed = 3;
    }

    update(deltaTime) {
        if (this.keyboard.wasPressed('ArrowUp')) {
            this.baseY -= 100;
        }
        if (this.keyboard.wasPressed('ArrowDown')) {
            this.baseY += 100;
        }

        this.hoverTime += deltaTime;
        this.y = this.baseY + Math.sin(this.hoverTime * this.hoverSpeed) * this.hoverAmplitude;
    }

    draw() {
        ctx.fillStyle = '#00F0FF';
        ctx.fillRect(this.x, this.y, 40, 40);
    }
}
