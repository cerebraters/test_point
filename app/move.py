from flask import Flask, render_template, jsonify, request
from app import app

# Начальные координаты точки
point = {'x': 250, 'y': 250}

@app.route('/')
def index():
    return render_template('index.html', point=point)

@app.route('/move', methods=['POST'])
def move():
    direction = request.json.get('direction')
    if direction == 'up':
        point['y'] -= 10
    elif direction == 'down':
        point['y'] += 10
    elif direction == 'left':
        point['x'] -= 10
    elif direction == 'right':
        point['x'] += 10
    return jsonify(point)

if __name__ == '__main__':
    app.run(debug=True)