document.addEventListener('DOMContentLoaded', function() {
    var container = document.body;

    const squareButton = document.getElementById('squareButton');
    const triangleButton = document.getElementById('triangleButton');
    const circleButton = document.getElementById('circleButton');


    function addShape(numShapes, shapeType) {
        for (let i = 0; i < numShapes; i++) {
            const minSize = 50;
            const maxSize = 200;
            const size = Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize;
            const x = Math.floor(Math.random() * (window.innerWidth - size));
            const y = Math.floor(Math.random() * (window.innerHeight - size));
    
            const shape = document.createElement('div');
            shape.className = `shape ${shapeType}`;
            shape.style.width = `${size}px`;
            shape.style.height = `${size}px`;
            shape.style.left = `${x}px`;
            shape.style.top = `${y}px`;
    
            shape.addEventListener('click', function() {
                /* у треугольника меняется цвет border, у остальных background */
                if (shapeType == 'triangle') {
                    if (shape.classList.contains('selected-triangle')) {
                        shape.classList.remove('selected-triangle');
                    } else {
                        shape.classList.add('selected-triangle');
                    }
                }
                else {
                    if (shape.classList.contains('selected')) {
                        shape.classList.remove('selected');
                    } else {
                        shape.classList.add('selected');
                    }
                }
            });
    
            shape.addEventListener('dblclick', function() {
                shape.remove();
            });
    
            container.appendChild(shape);
        }
    }

    squareButton.addEventListener('click', function() {
        var num = document.getElementById('number').value;
        addShape(num, 'square')
    });

    triangleButton.addEventListener('click', function() {
        var num = document.getElementById('number').value;
        addShape(num, 'triangle')
    });

    circleButton.addEventListener('click', function() {
        var num = document.getElementById('number').value;
        addShape(num, 'circle')
    });

});

/* у input стоят min, max, но при вводе с клавитуры они не работают, поэтому вот: */

document.querySelector('input').addEventListener('input', ({ target: t }) => {
    t.value = Math.max(t.min, Math.min(t.max, t.value));
  });

/* фигуры не должны выходить за пределы экрана */

window.addEventListener('resize', function() {
    const shapes = document.querySelectorAll('.shape');
    shapes.forEach(shape => {
        const size = parseInt(shape.style.width);
        const x = Math.min(Math.max(0, parseInt(shape.style.left)), window.innerWidth - size);
        const y = Math.min(Math.max(0, parseInt(shape.style.top)), window.innerHeight - size);
        shape.style.left = `${x}px`;
        shape.style.top = `${y}px`;
    });
});