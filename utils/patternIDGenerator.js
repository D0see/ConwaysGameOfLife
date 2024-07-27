/*

const patternLibrary = {
    '[[0,0],[0,1],[0,2]]' : {
        'name' : 'blinker',
        'type' : 'oscillator',
        'description' : 'the most common simple oscilating pattern'
    },
    '[[0,0],[1,0],[2,0]]' : {
        'name' : 'blinker',
        'type' : 'oscillator',
        'description' : 'the most common oscilating pattern'
    },
    '[[0,0],[1,0],[0,1],[1,1]]' : {
        'name' : 'square',
        'type' : 'still-life',
        'description' : 'the simplest form of still-life'
    },
    '[[0,0],[0,1],[-1,2],[-2,1],[0,2]]' : {
        'name' : 'glider',
        'type' : 'spaceship',
        'description' : 'the smallest type of spaceship, seen here going 1'
    },
    '[[0,0],[1,1],[0,2],[-1,2],[1,2]]'

    '[[0,0],[-1,1],[-1,2],[0,2],[1,2]]' : {
        'name' : 'glider',
        'type' : 'spaceship',
        'description' : 'the smallest type of spaceship, seen here going 2'
    },
     '[[0,0],[1,0],[1,1],[1,2],[-1,1]]'

    '[[0,0],[1,0],[0,1],[0,2],[2,1]]' : {
        'name' : 'glider',
        'type' : 'spaceship',
        'description' : 'the smallest type of spaceship, seen here going 3'
    },
    '[[0,0],[1,0],[2,0],[0,1],[1,2]]',
    
    '[[0,0],[1,0],[2,0],[2,1],[1,2]]' : {
        'name' : 'glider',
        'type' : 'spaceship',
        'description' : 'the smallest type of spaceship, seen here going 4'
    },
    '[[0,0],[0,1],[0,2],[1,2],[2,1]]'

}

*/

// returns an object with pattern id & pattern location, modifies the grid in place;
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

//returns all patterns in the board
const collectPatterns = (board) => {
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
const rotateArray = (grid) => {
    const newGrid = [];
    for (let i = 0; i < grid.length; i++) {
        newGrid.push([]);
        for (let j = 0; j < grid[0].length; j++) {
            newGrid[i].push(grid[j][grid[0].length - 1 - i]);
        }
    }
    return newGrid;
}


let test = [[false, true , false],
            [false, false , true],
            [true, true , true]];

const patterns = [];
for (let i = 0; i < 4; i++) {
    patterns.push(collectPatterns(test));
    test = rotateArray(test);
}
console.log(patterns);