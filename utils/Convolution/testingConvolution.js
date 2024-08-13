const pattern = [[true, true, true, true, false],
              [true, false, false, false, true],
              [true, false, false, false, false],
              [false, true, false, false, true]];

const grid = [[false, false, false, false, false, false],
              [false, true, true, true, true, false],
              [false, true, false, false, false, true],
              [false, true, false, false, false, false],
              [false, false, true, false, false, true]];


//Build pattern Object for the library
const patternIDGenerator = (pattern) => {
    const id = [];
    for (let i = 0; i < pattern.length; i++) {
        for (let j = 0; j < pattern[0].length; j++) {
            if (pattern[i][j]) {
                id.push([i, j]);
            }
        }
    }
    return JSON.stringify(id);
}              

const testPatternObj = {
    'id' : patternIDGenerator(pattern),
    'pattern' : pattern
}

//PATTERN DETECTION IN GRID


//____________Valid pattern detection_______________________
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
//check that every square at pattern location is correct
const patternIsMatching = (y, x, grid, pattern) => {
    for (let i = 0; i < pattern.length; i++) {
        for (let j = 0; j < pattern[0].length; j++) {
            console.log(grid[y +  i][x + j], pattern[i][j])
            if (grid[y + i][x + j] !== pattern[i][j]) {
                return false;
            }
        }
    }
    return true;
}

//____________PatternCoordinates____________________________
//based on its id and (x,y) coordinates, gets every true square coordinates
const getPatternCoordinates = (y, x, id) => {
    for (const coordinate of id) {
        coordinate[0] += y;
        coordinate[1] += x;
    }
    return JSON.stringify(id);
}



const checkGrid = (grid, patternObj) => {
    const patterns = [];
    for (let y = 0; y < grid.length - patternObj.pattern.length + 1; y++) {
        for (let x = 0; x < grid[0].length - patternObj.pattern[0].length + 1; x++) {
            if (patternIsIsolated(y,x,grid, pattern) && patternIsMatching(y, x, grid, pattern)) {
                patterns.push({
                    'id' : patternObj['id'],
                    'coordinates' : getPatternCoordinates(y, x, JSON.parse(patternObj['id'])),
                    'description' : 'placeholderDescription'
                })
            }
        }
    }
    return patterns;
}

console.log(checkGrid(grid, testPatternObj));