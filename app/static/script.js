const point = document.getElementById('point');
let position = { x: 150, y: 150 };
const step = 3; 

// Границы
const boundaries = {
    minX: 0,
    minY: 0,
    maxX: 400,
    maxY: 400
};

function updatePosition() {
    point.style.left = position.x + 'px';
    point.style.top = position.y + 'px';
}

document.addEventListener('keydown', function(event) {
    switch (event.key) {
        case 'ArrowUp':
            if (position.y - step >= boundaries.minY) { // Проверка на верхнюю границу
                position.y -= step;
            }
            break;
        case 'ArrowDown':
            if (position.y + step <= boundaries.maxY - point.offsetHeight) { // Проверка на нижнюю границу
                position.y += step;
            }
            break;
        case 'ArrowLeft':
            if (position.x - step >= boundaries.minX) { // Проверка на левую границу
                position.x -= step;
            }
            break;
        case 'ArrowRight': 
            if (position.x + step <= boundaries.maxX - point.offsetWidth) { // Проверка на правую границу
                position.x += step;
            }
            break;
    }

    updatePosition();
});

updatePosition();
