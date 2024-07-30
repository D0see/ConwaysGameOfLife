// This file is only used to generate IDS for continuous patterns

const updateBoard = (board) => {
    tempBoard = JSON.parse(JSON.stringify(board));
    const buffer = [];
    for (let i = 0; i < tempBoard.length + 2; i++) {
        for (let j = 0; j < tempBoard[0].length; j++) {
            let counter = 0;
            tempBoard[i - 1]?.[j - 1] ? counter++ : '';
            tempBoard[i - 1]?.[j] ? counter++ : '';
            tempBoard[i - 1]?.[j + 1] ? counter++ : '';
            tempBoard[i]?.[j - 1] ? counter++ : '';
            tempBoard[i]?.[j + 1] ? counter++ : '';
            tempBoard[i + 1]?.[j - 1] ? counter++ : '';
            tempBoard[i + 1]?.[j] ? counter++ : '';
            tempBoard[i + 1]?.[j + 1] ? counter++ : '';
            //push the next state to the buffer queue
            buffer.push(tempBoard[i]?.[j] ? counter > 1 && counter < 4 : counter ===  3);
            //after the algorithm reaches the 3rd row, start updating 2 rows up
            if (i > 1) {tempBoard[i - 2][j] = buffer.shift();}
        } 
    }
    return tempBoard;
}

// returns the pattern Id, modifies the grid in place (MUST CALL ONLY THROUGH collectPattern below);
const identifyPattern = (grid, i, j, x, y, pattern) => {
    if (!grid[i]?.[j]) {return;}
    pattern.push([x, y]);
    //erases current location (as to not look twice in the same spot)
    grid[i][j] = false;
    identifyPattern(grid, i - 1, j - 1, x - 1, y - 1, pattern)
    identifyPattern(grid, i - 1, j, x, y - 1, pattern)
    identifyPattern(grid, i - 1, j + 1, x + 1, y - 1, pattern)
    identifyPattern(grid, i, j - 1, x - 1, y, pattern)
    identifyPattern(grid, i, j + 1, x + 1, y, pattern)
    identifyPattern(grid, i + 1, j - 1, x - 1, y + 1, pattern)
    identifyPattern(grid, i + 1, j, x, y + 1, pattern)
    identifyPattern(grid, i + 1, j + 1, x + 1, y + 1, pattern)
    return pattern;
}

//returns the pattern on the board
const collectPattern = (board) => {
    const tempBoard = JSON.parse(JSON.stringify(board));
    for (let i = 0; i < tempBoard.length; i++) {
        for (let j = 0; j < tempBoard[0].length; j++) {
            if (tempBoard[i][j]) {
                let patternObj = identifyPattern(tempBoard, i, j, 0, 0, [])
                return JSON.stringify(patternObj);
            }
        }
    }
}

//returns a new array, rotated 90° to the right
const rotateGrid = (grid) => {
    const newGrid = [];
    for (let i = 0; i < grid.length; i++) {
        newGrid.push([]);
        for (let j = 0; j < grid[0].length; j++) {
            newGrid[i].push(grid[j][grid[0].length - 1 - i]);
        }
    }
    return newGrid;
}

//Draw your pattern here, make sur to give it enough room to do a full cycle
let test = [[false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false],
            [false, false, false, true, true, false, false],
            [false, false, true, false, false, true, false],
            [false, false, true, false, true, false, false],
            [false, false, false, true, false, false, false],
            [false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false]];

let test1 = [[false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false],
            [false, false, false, true, false, false, false],
            [false, true, false, true, false, false, false],
            [false, false, true, true, false, false, false],
            [false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false]];

//return the IDs of every frames of the tested pattern
const getEveryFrames = (grid) => {
    let tempGrid = JSON.parse(JSON.stringify(grid));
    const originalPattern = collectPattern(tempGrid);
    const patterns = [originalPattern];
    while(true) {
        tempGrid = updateBoard(tempGrid);
        const newPattern = collectPattern(tempGrid);
        if (originalPattern === newPattern) {break;}
        patterns.push(newPattern)
    }
    return patterns;
}

// must add a check that the third pattern isnt the same as the first one <------------------------------------------------------------
//return a list of the IDS of every frames of the tested pattern for every orientations
const getFramesForAllOrientations = (grid) => {
    const listOfPatterns = [];
    for (let i = 0; i < 4; i++) {
        listOfPatterns.push(getEveryFrames(grid));
        grid = rotateGrid(grid);
    }
    return listOfPatterns;
}
    
const listOfPatterns = getFramesForAllOrientations(test1);

//type the name, type and description here
const patName = 'placeholder name';
const patType = listOfPatterns[0].length <= 1 ? 'still-life' : 'placeholder type';
const patDescription = 'placeholder description';

const library = [];
for (const pattern of listOfPatterns) {
    for (let i = 0; i < pattern.length; i++) {
        library[`${pattern[i]}`] = {
            'name' : patName,
            'type' : patType,
            'description' : patDescription
        }
        if (pattern.length > 1) {library[`${pattern[i]}`]['stage'] = `${i + 1} / ${pattern.length}`}
    }

}


console.log(library);

