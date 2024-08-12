const pattern = [[true, true, true, true, false],
              [true, false, false, false, true],
              [true, false, false, false, false],
              [false, true, false, false, true]];


const grid = [[false, true, true, true, true, false],
              [false, true, false, false, false, true],
              [false, true, false, false, false, false],
              [false, false, true, false, false, true]];


//check that the pattern is surrounded by undefined or false;
const patternIsIsolated = (y, x, grid, pattern) => {
    for (let i = -1; i <= pattern.length; i++) {
        for (let j = -1; j <= pattern[0].length; j++) {
            if (i > -1 && i < pattern.length && j > - 1 && j < pattern[0].length) {continue;}
            if (grid[y +  i]?.[x + j]) {
                return false;
            }
        }
    }
    return true;
}

const patternIsMatching = (y, x, grid, pattern) => {
    for (let i = 0; i < pattern.length; i++) {
        for (let j = 0; j < pattern[0].length; j++) {
            console.log(grid[y +  i][x + j], pattern[i][j])
            if (grid[y +  i][x + j] !== pattern[i][j]) {
                return false;
            }
        }
    }
    return true;
}

//check every square that is far enough from the end of the grid to be the start of the specified pattern
const checkGrid = (grid, pattern) => {
    for (let y = 0; y < grid.length - pattern.length + 1; y++) {
        for (let x = 0; x < grid[0].length - pattern[0].length + 1; x++) {
            if (patternIsIsolated(y,x,grid, pattern)) {
                console.log(patternIsMatching(y, x, grid, pattern), y, x);
            }
        }
    }
}

checkGrid(grid, pattern);