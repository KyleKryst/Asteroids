const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

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

        update() {
            this.draw()
            this.position.x += this.velocity.x
            this.position.y += this.velocity.y
        }
};

const player = new Player({
    position: { x: canvas.width / 2, y: canvas.height / 2 }, 
    velocity: { x: 0, y: 0 },
});

const keys = {
    uparrow: {
        pressed: false
    }
};

function animate() {
    window.requestAnimationFrame(animate)
    context.fillStyle = 'black';
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    player.update()

    if (keys.uparrow.pressed) player.velocity.x = 1
};

animate();

window.addEventListener('keydown', (event) => {
    switch (event.code) {
        case 'ArrowLeft':
            console.log('left arrow was pressed')
            break
        case 'ArrowDown':
            console.log('down arrow was pressed')
            break
         case 'ArrowRight':
            console.log('right arrow was pressed')
            break
        case 'ArrowUp':
            console.log('up arrow was pressed')
            keys.uparrow.pressed = true
            break

    }
});