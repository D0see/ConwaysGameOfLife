import patternRecognition from "./patternRecognition.mjs";
import patternLibrary from "./patternLibrary.mjs";

//Creates the 2D array based on the received width & height 
const twoDArrayBuilder = (rows, cols) => {
    const board = [];
    for (let i = 0; i < rows; i++) {
        board.push([]);
        for (let j = 0; j < cols; j++) {
            board[i].push(false);
        } 
    }
    return board;
}
//Sets the next state for all blocks
const updateBoard = (board) => {
    const buffer = [];
    for (let i = 0; i < board.length + 2; i++) {
        for (let j = 0; j < board[0].length; j++) {
            let counter = 0;
            board[i - 1]?.[j - 1] ? counter++ : '';
            board[i - 1]?.[j] ? counter++ : '';
            board[i - 1]?.[j + 1] ? counter++ : '';
            board[i]?.[j - 1] ? counter++ : '';
            board[i]?.[j + 1] ? counter++ : '';
            board[i + 1]?.[j - 1] ? counter++ : '';
            board[i + 1]?.[j] ? counter++ : '';
            board[i + 1]?.[j + 1] ? counter++ : '';
            //push the next state to the buffer queue
            buffer.push(board[i]?.[j] ? counter > 1 && counter < 4 : counter ===  3);
            //after the algorithm reaches the 3rd row, start updating 2 rows up
            if (i > 1) {board[i - 2][j] = buffer.shift();}
        } 
    }
    return board;
}
//removes all children from an element
function removeAllChildrens(element){
    while(element.firstChild){
        element.removeChild(element.firstChild);
    }
}

// Appends the blocks Div to the grid element and make them clickable
const buildGrid = (grid, playGround, cellColors) => {
    // selectedState is the state of the clicked element when it's clicked
    let selectedState;
    for (let i = 0; i < playGround.length; i++){
        for (let j = 0; j < playGround[0].length; j++){
            const visualBlock = document.createElement('div');
            visualBlock.style.backgroundColor = cellColors.dead;
            visualBlock.addEventListener('mousedown', (event) => {
                event.preventDefault();
                playGround[i][j] = !playGround[i][j];
                visualBlock.style.backgroundColor = playGround[i][j] ? cellColors.alive : cellColors.dead;
                selectedState = playGround[i][j];
            });
            visualBlock.addEventListener('mouseover', (event) => {
                if (event.buttons === 1) {
                    playGround[i][j] = selectedState;
                    visualBlock.style.backgroundColor = selectedState ? cellColors.alive : cellColors.dead;
                }
            });     
        grid.appendChild(visualBlock);
        }
    }
}
//optimisable <------------------------------
const updateColors = (grid, playGround, cellColors) => {
    const squares = grid.children;
    const data = playGround.flat();
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = data[i] ? cellColors.alive : cellColors.dead;
    }
} 

const resetAttributes = (grid) => {
    const squares = grid.children;
    for (const square of squares) {
        square.removeAttribute('title');
    }
}

//Style the pressed button and resets the others TO CHANGE
const stylePressedButton = (button, listOfButtons) => {
    listOfButtons.forEach(element => {
        if (element === button) {
            element.classList.remove('unpressed');
            element.classList.add('pressed');
        } else {
            element.classList.add('unpressed');
            element.classList.remove('pressed');
        }
    });
}

//Global variables
let playGround;
let gridHeight;
let gridWith;
const grid = document.getElementById('grid');
const advanceButton = document.getElementById('advance');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('stop');
const analyzeButton = document.getElementById('analyze');
const arrOfPlayerButtons = [playButton, pauseButton];
// Form that takes in the input for gridWidth & gridHeight
const gridForm = document.getElementById('gridForm');
//colors
const cellColors = {'dead': 'grey', 'alive' : 'white'};
//pattern library 

gridForm.addEventListener('submit', (event) => {
    //prevents the page from reloading on submit
    event.preventDefault();
    //clean the grid 
    removeAllChildrens(grid);
    //resets the buttons
    stylePressedButton(undefined, arrOfPlayerButtons);
    //assign the form values
    gridWidth = document.getElementById('gridWidth').value ;
    gridHeight = document.getElementById('gridHeight').value;
    //assigns the grid template properties
    grid.style.gridTemplateColumns = `repeat(${gridWidth}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${gridHeight}, 1fr)`
    //builds the playground based of the stipulated dimensions
    playGround = twoDArrayBuilder(gridHeight, gridWidth);
    //build the grid object and populates it with colored divs
    buildGrid(grid, playGround, cellColors);
})

// --- PLAYER BUTTONS --- //

//Advance button makes the game go to the next frame
advanceButton.addEventListener('click', () => {
    playGround = updateBoard(playGround);
    updateColors(grid, playGround, cellColors);

    //placeholder for better hintbox logic
    resetAttributes(grid);
})
let statesInterval;
//Play button makes the game go to the next frame every x ms
playButton.addEventListener('click', () => {
    stylePressedButton(playButton, arrOfPlayerButtons);
    statesInterval = setInterval(() => {
        playGround = updateBoard(playGround)
        updateColors(grid, playGround, cellColors);

        //placeholder for better hintbox logic
        resetAttributes(grid);
    }, 1000);
})
pauseButton.addEventListener('click', () => {
    stylePressedButton(pauseButton, arrOfPlayerButtons);
    clearInterval(statesInterval);
    // Reset the interval IDs
    statesInterval = null;
})
//very optimisable <------------------------------------------ PLACE HOLDER FOR CUSTOM HINTBOXLOGIC
analyzeButton.addEventListener('click', () => {
    const patterns = patternRecognition.collectPatterns(playGround, patternLibrary);
    if (!patterns.length) {return;}
    const squares = grid.children;
    for (const pattern of patterns) {
        for (const coordinate of pattern['coordinates']) {
            const numOfSquare = (coordinate[0] * gridWidth) + coordinate[1];
            squares[numOfSquare].style.backgroundColor = 'yellow';
            //PLACEHOLDER 
            squares[numOfSquare].setAttribute('title', `${patternLibrary[pattern['id']]['name'].toUpperCase()} : ${patternLibrary[pattern['id']]['description']}`)
        }
    }
})
//NOTES  :

//export patternRecognition as default
//swap all function declaration for arrows function declaration
// the game has walls for now
// i wanna make a pattern recognizer
// -> make custom good looking hintbox
// -> make it so you can search for specific patterns
// -> the color should reflect the nature of the pattern
// the css is still ugly
// re-organize the code, especially the app.js should be divied in multiple files

//PatternIDGenerator -> make an object builder based on the outputted list (as to automate the pattern addition process);