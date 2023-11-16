const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.fillStyle = 'black';
context.fillRect(0, 0, canvas.width, canvas.height);

class Player {
    constructor({position, velocity}) {
        this.position = position // {x, y}
        this.velocity = velocity // {x, y}
    }

    draw() {
        context.arc(this.position.x, this.position.y, 5, 0, Math.PI * 2, false);
        context.fillStyle = 'red';
        context.fill();

        // context.fillStyle = 'green';
        // context.fillRect(this.position.x, this.position.y, 50, 100); // {x, y, width, height}
        context.moveTo(this.position.x + 30, this.position.y);
        context.lineTo(this.position.x - 10, this.position.y - 10);
        context.lineTo(this.position.x - 10, this.position.y + 10);
        context.closePath();

        context.strokeStyle = 'orange';
        context.stroke();
        context.fillStyle = 'yellow';
        context.fill();
    }
};

const player = new Player({
    position: { x: canvas.width / 2, y: canvas.height / 2 }, 
    velocity: { x: 0, y: 0 },
});

player.draw();

console.log(player)