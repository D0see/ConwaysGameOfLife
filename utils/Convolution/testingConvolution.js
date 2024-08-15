// Imported functions
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

const rotateGrid = (grid) => {
    const newGrid = [];
    for (let i = 0; i < grid[0].length; i++) {
        newGrid.push([]);
        for (let j = 0; j < grid.length; j++) {
            newGrid[i].push(grid[j][grid[0].length - 1 - i]);
        }
    }
    return newGrid;
}
//

const pattern = [
              [false, false, false, false, false, false, false, false, false, false, false, false],
              [false, false, false, false, false, false, false, true, true, true, true, false],
              [false, false, false, false, false, false, false, true, false, false, false, true],
              [false, false, false, false, false, false, false, true, false, false, false, false],
              [false, false, false, false, false, false, false, false, true, false, false, true],
              [false, false, false, false, false, false, false, false, false, false, false, false]];


const pattern2 = [[false, false, false, false, false, false],
                  [false, true, true, true, true, false],
                  [false, true, false, false, false, true],
                  [false, true, false, false, false, false],
                  [false, false, true, false, false, true]];

const grid = [[false, false, false, false, false, false],
              [false, true, true, true, true, false],
              [false, true, false, false, false, true],
              [false, true, false, false, false, false],
              [false, false, true, false, false, true]];


//              PATTERN DETECTION IN GRID

//_________________Build pattern Object for the library________________
const patternIDGenerator = (pattern) => {
    const id = [];
    for (let i = 0; i < pattern.length; i++) {
        for (let j = 0; j < pattern[0].length; j++) {
            if (pattern[i][j]) {
                id.push([i, j]);
            }
        }
    }
    //offset all coordinates by the origin/first coordiantes pair value
    const originY = id[0][0];
    const originX = id[0][1];
    for (const coord of id) {
        coord[0] -= originY;
        coord[1] -= originX;
    }
    //get the lowest X coordinates (to offset by lowestX*-1 if its a negative value)
    let tempX = [];
    for (const coord of id) {tempX.push(coord[1]);}
    let offsetX = Math.min(...tempX) * -1;
    if (offsetX) {
        for (const coord of id) {coord[1] += offsetX}
    }
    return JSON.stringify(id);
}           

patternIDGenerator(pattern);

const getEveryFrames = (grid) => {
    let tempGrid = JSON.parse(JSON.stringify(grid));
    const originalPattern = patternIDGenerator(tempGrid);
    const patterns = [originalPattern];
    while(true) {
        tempGrid = updateBoard(tempGrid);
        const newPattern = patternIDGenerator(tempGrid);
        if (originalPattern === newPattern) {break;}
        patterns.push(newPattern)
    }
    return patterns;
}

const getFramesForAllOrientations = (grid) => {
    const listOfPatterns = [];
    for (let i = 0; i < 4; i++) {
        listOfPatterns.push(getEveryFrames(grid));
        grid = rotateGrid(grid);
    }
    return listOfPatterns;
}

const listOfPatternsGroups = getFramesForAllOrientations(pattern);
console.log(listOfPatternsGroups);


//windowsize is used to determine the size of the convolution window
const getWindowSize = (patternID) => {
    let tempID = JSON.parse(patternID);
    const Ys = [];
    const Xs = [];
    for (const coord of tempID) {
        Ys.push(coord[0]);
        Xs.push(coord[1]);
    }
    return [Math.max(...Ys) + 1, Math.max(...Xs) + 1];
}

//type the name, type and description here
const patName = 'c/2 orthogonal';
const patType = listOfPatternsGroups[0].length <= 1 ? 'still life' : 'spaceship';
const patDescription = 'c/2 orthogonal was the second spaceship speed to be discovered';

const library = {};
for (const patternGroup of listOfPatternsGroups) {
    for (let i = 0; i < patternGroup.length; i++) {
        if (!library[`${getWindowSize(patternGroup[i])}`]) {
            library[`${getWindowSize(patternGroup[i])}`] = {};
        }
        library[`${getWindowSize(patternGroup[i])}`][patternGroup[i]] = {
            'name' : patName,
            'type' : patType,
            'description' : patDescription,

        }
        if (patternGroup.length > 1) {library[`${getWindowSize(patternGroup[i])}`][`${patternGroup[i]}`]['step'] = `${i + 1} / ${patternGroup.length}`}
    }

}

console.log(library)

//console.log(library);


const testPatternObj = {
    'id' : patternIDGenerator(pattern),
    'name' : '',
    'type' : 'spaceship',
    'description' : 'testdescription',
    'pattern' : pattern
}



//                  PATTERN DETECTION IN GRID


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
    const newID = JSON.parse(id);
    for (const coordinate of id) {
        coordinate[0] += y;
        coordinate[1] += x;
    }
    return newID;
}

const checkGrid = (grid, patternObj) => {
    const patterns = [];
    for (let y = 0; y < grid.length - patternObj.pattern.length + 1; y++) {
        for (let x = 0; x < grid[0].length - patternObj.pattern[0].length + 1; x++) {
            if (patternIsIsolated(y,x,grid, pattern) && patternIsMatching(y, x, grid, pattern)) {
                patterns.push({
                    'id' : patternObj['id'],
                    'coordinates' : getPatternCoordinates(y, x, patternObj['id']),
                })
            }
        }
    }
    return patterns;
}

collectedPatterns = checkGrid(grid, testPatternObj);

//console.log(collectedPatterns);


//Maybe i should pattern search for every different width/height couples of registered patterns and check for matches based the library