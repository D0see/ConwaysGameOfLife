import Block from './Block.js';

//Creates the 2D array based on the received width & height 
// then populates it with Block objects
function twoDArrayBuilder(width, height){
    const newArray = [];
    for(let i = 0; i < height; i++){
        newArray.push([]);
        for (let j = 0; j < width; j++){
            const createdBlock = new Block(i, j);
            newArray[i].push(createdBlock);
        }
    }
    return newArray;
}

//removes all children from an element
function removeAllChildrens(element){
    while(element.firstChild){
        element.removeChild(element.firstChild);
    }
}

/*
const testArray = (twoDArrayBuilder(9, 9));
console.log(testArray);
const testNeightborsStats = testArray[0][0].getNeighborsStates(testArray);
console.log(testNeightborsStats);
testArray[0][0].setNextState(testArray);
console.log(testArray[0][0].nextState);
*/

const grid = document.getElementById('grid');
const advanceButton = document.getElementById('advance');

let gridWidth;
let gridHeight;

// Form that takes in the input for gridWidth & gridHeight
const gridForm = document.getElementById('gridForm');
gridForm.addEventListener('submit', () => {
    event.preventDefault();

    //resets the grid
    removeAllChildrens(grid);

    //assign the form values
    gridWidth = document.getElementById('gridWidth').value ;
    gridHeight = document.getElementById('gridHeight').value;
    console.log(gridHeight, gridWidth)

    //assigns the grid template properties
    grid.style.gridTemplateColumns = `repeat(${gridWidth}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${gridHeight}, 1fr)`

    //builds the playground based of the stipulated dimensions
    const playGround = twoDArrayBuilder(gridWidth, gridHeight);

    // Appends the blocks Div to the grid element and make them clickable
    for (let i = 0; i < playGround.length; i++){
        for (let j = 0; j < playGround[0].length; j++){

            const visualBlock = playGround[i][j].div;
            visualBlock.addEventListener('click', () => {
                playGround[i][j].flipState();
            })
            grid.appendChild(visualBlock);
            console.log('appended a block');
        }
    }

    advanceButton.addEventListener('click', () => {
        for (let i = 0; i < playGround.length; i++){
            for (let j = 0; j < playGround[0].length; j++){
                playGround[i][j].setNextState(playGround);
            }
        }

        for (let i = 0; i < playGround.length; i++){
            for (let j = 0; j < playGround[0].length; j++){
                playGround[i][j].setState();
            }
        }
    })


})