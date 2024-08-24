const container = document.getElementById('grid-container');
   
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.width = '700px'; // Set a fixed width for the grid
container.style.height = '700px'; // Set a fixed height for the grid
container.style.gap = '5px';

function changeSizeofGrid(sizeOfGrid) {
    const gridSize = sizeOfGrid;
    const totalSquares = gridSize * gridSize;

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

    const btn = document.createElement('button');
    btn.style.color = 'black';
    btn.style.borderRadius = '5px';
    btn.style.borderColor = 'black'
    btn.style.width = '200px';
    btn.style.height = '100px';

    btn.addEventListener('click', function() {
        let size = parseInt(prompt('Enter grid squares:'));
        if (size <=0 || size > 100) {
            alert('Number of squares is out of boundaries');
        } else {
            container.innerHTML = '';
            changeSizeofGrid(size);
        }
    })

    container.appendChild(btn);
}

changeSizeofGrid(16);

