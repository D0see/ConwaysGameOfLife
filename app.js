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

//Sets the next state for all blocks
function setsAllNextStates(twoDArray) {
    for (let i = 0; i < twoDArray.length; i++){
        twoDArray[i].map(obj => obj.setNextState(twoDArray));
    }
}

//Sets the state for all blocks (based on their ._nextStates)
function setsAllStates(twoDArray){
    for (let i = 0; i < twoDArray.length; i++){
        twoDArray[i].map(obj => obj.setState());
    }
}

//removes all children from an element
function removeAllChildrens(element){
    while(element.firstChild){
        element.removeChild(element.firstChild);
    }
}

//Style the pressed button and resets the others TO CHANGE
function stylePressedButton(button, listOfButtons){
    for (const el of listOfButtons) {
        if (el === button) {
            el.style.transform = 'scale(0.90)'
            el.style.backgroundColor = 'lightblue';
            el.style.boxShadow = '2px 2px 2px 0px rgb(26, 26, 26), -2px -2px 2px 0px rgb(26, 26, 26), -2px 2px 2px 0px rgb(26, 26, 26), 2px -2px 2px 0px rgb(26, 26, 26)';
        } else {
            el.style.backgroundColor = 'white';
            el.style.transform = 'scale(1.00)';
            el.style.boxShadow = '2px 2px 2px 2px rgb(26, 26, 26)'
        }
    }
}


//Global variables
const grid = document.getElementById('grid');
const advanceButton = document.getElementById('advance');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('stop');
const arrOfPlayerButtons = [playButton, pauseButton];
let gridWidth;
let gridHeight;
// Form that takes in the input for gridWidth & gridHeight
const gridForm = document.getElementById('gridForm');

gridForm.addEventListener('submit', () => {
    event.preventDefault();

    //resets the buttons
    stylePressedButton(undefined, arrOfPlayerButtons);

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
    // selectedState is the resulting state of the clicked element
    let selectedState;
    for (let i = 0; i < playGround.length; i++){
        for (let j = 0; j < playGround[0].length; j++){

            const visualBlock = playGround[i][j].div;
            visualBlock.addEventListener('mousedown', (event) => {
                event.preventDefault();
                playGround[i][j].flipState();
                selectedState = playGround[i][j].state;
                console.log(selectedState);
            
            })
            visualBlock.addEventListener('mouseover', (event) => {
                if (event.buttons === 1) {
                    playGround[i][j].changeState(selectedState);
                }
            })
            grid.appendChild(visualBlock);
        }
    }

    //Advance button makes the game go to the next frame
    advanceButton.addEventListener('click', () => {
        setsAllNextStates(playGround);
        setsAllStates(playGround);
    })
    //CHAT GPT CODE SHAME !!!!!!
    let nextStatesInterval;
    let statesInterval;
    playButton.addEventListener('click', (event) => {
        stylePressedButton(playButton, arrOfPlayerButtons);
        if (!nextStatesInterval) {
            nextStatesInterval = setInterval(() => {
                setsAllNextStates(playGround);
            }, 750);
        }
        if (!statesInterval) {
            statesInterval = setInterval(() => {
                setsAllStates(playGround);
            }, 750);
        
        }
    })
    pauseButton.addEventListener('click', (event) => {
        stylePressedButton(pauseButton, arrOfPlayerButtons);
        clearInterval(nextStatesInterval);
        clearInterval(statesInterval);

        // Reset the interval IDs
        nextStatesInterval = null;
        statesInterval = null;
    })
    //CHAT GPT CODE SHAME !!!!!!
        
    
})


// the game has walls for now

//NOTES  :


/*instead of a stylepressedbutton function i could
 set a up css classes with named playerButtonpressed / playerButtonunpressed 
and add them / remove them from the button class when it is pressed is pressed */

/* i should make it so you can't start mousedown oustide the grid then change blocks when you hover
over the grid while still in mousedown.*/