const point = document.getElementById('point');
let position = { x: 50, y: 50 }; // Начальная позиция точки

// Функция для обновления позиции точки
function updatePosition() {
    point.style.left = position.x + 'px';
    point.style.top = position.y + 'px';
}

// Обработчик событий для нажатия клавиш
document.addEventListener('keydown', function(event) {
    const step = 10; // Шаг перемещения

    switch (event.key) {
        case 'ArrowUp': // Стрелка вверх
            position.y -= step;
            break;
        case 'ArrowDown': // Стрелка вниз
            position.y += step;
            break;
        case 'ArrowLeft': // Стрелка влево
            position.x -= step;
            break;
        case 'ArrowRight': // Стрелка вправо
            position.x += step;
            break;
    }

    updatePosition(); // Обновляем позицию точки
});

// Инициализация позиции точки
updatePosition();