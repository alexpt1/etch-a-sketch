const container = document.getElementById('grid-container');
   
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.width = '800px'; // Set a fixed width for the grid
container.style.height = '800px'; // Set a fixed height for the grid
container.style.gap = '5px';

const gridSize = 16;
const totalSquares = gridSize * gridSize;

// Size of each square as a percent
const squareSize = `calc(${100 / gridSize}% - 5px)`;

for (let i = 0; i < totalSquares; i++) {
    const div = document.createElement('div');
    div.style.width = squareSize;
    div.style.height = squareSize;
    div.style.backgroundColor = 'lightblue';
    container.appendChild(div);
    div.addEventListener('mouseover', function() {
        div.style.backgroundColor = 'blue';
        setTimeout(function() {
            div.style.backgroundColor = 'lightblue';
        }, 500)
    })
    
}