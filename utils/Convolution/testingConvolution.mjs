import DiscontinuedPatternsLibrary from "./DiscontinuedPatterns.mjs";

// Imported functions
const updateBoard = (board) => {
    const tempBoard = JSON.parse(JSON.stringify(board));
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
const patType = 'spaceship';
const patDescription = 'c/2 orthogonal was the second spaceship speed to be discovered';



const libraryByWindowSize = {};
for (const currPattern of DiscontinuedPatternsLibrary) {
    console.log(currPattern['pattern'])
    const listOfPatternsGroups = getFramesForAllOrientations(currPattern.pattern);
    console.log(listOfPatternsGroups);
    for (const patternGroup of listOfPatternsGroups) {
        for (let i = 0; i < patternGroup.length; i++) {
            if (!libraryByWindowSize[`[${getWindowSize(patternGroup[i])}]`]) {
                libraryByWindowSize[`[${getWindowSize(patternGroup[i])}]`] = {};
            }
            libraryByWindowSize[`[${getWindowSize(patternGroup[i])}]`][patternGroup[i]] = {
                'name' : currPattern.name,
                'type' : currPattern.type,
                'description' :  currPattern.description,

            }
            if (patternGroup.length > 1) {libraryByWindowSize[`[${getWindowSize(patternGroup[i])}]`][`${patternGroup[i]}`]['step'] = `${i + 1} / ${patternGroup.length}`}
        }

    }
}


console.log(libraryByWindowSize)

//                  PATTERN DETECTION IN GRID


//____________Valid pattern detection_______________________
//check that the pattern is surrounded by undefined or false;
const patternIsIsolated = (y, x, grid, windowHeight, windowLength) => {
    for (let i = -1; i <= windowHeight; i++) {
        for (let j = -1; j <= windowLength; j++) {
            if (i > -1 && i < windowHeight && j > - 1 && j < windowLength) {continue;}
            if (grid[y +  i]?.[x + j]) {
                return false;
            }
        }
    }
    console.log('isolated')
    return true;
}
//check that every square at pattern location is correct
//fix this to work with IDs <--------------
const patternIsMatching = (y, x, grid, windowHeight, windowLength, id) => {
    for (let i = 0; i < windowHeight; i++) {
        for (let j = 0; j < windowLength; j++) {
            if (!grid[y + i][x + j]) {continue;}
            if (!id.includes(`${[i,j]}`)) {
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
    for (const coordinate of newID) {
        coordinate[0] += y;
        coordinate[1] += x;
    }
    return newID;
}

const checkGrid = (grid, windowHeight, windowLength, id, patterns) => {
    for (let y = 0; y < grid.length - windowHeight + 1; y++) {
        for (let x = 0; x < grid[0].length - windowLength + 1; x++) {
            if (patternIsIsolated(y, x,grid, windowHeight, windowLength) && 
                patternIsMatching(y, x, grid, windowHeight, windowLength, id)) {
                patterns.push({
                    'id' : id,
                    'coordinates' : getPatternCoordinates(y, x, id),
                })
                console.log('match', y, x)
                console.log(getPatternCoordinates(y, x, id))
            }
        }
    }
}

const collectedPatterns = checkGrid(grid, testPatternObj);
console.log(collectedPatterns);

const patterns = [];
for (let windowSizes of Object.keys(libraryByWindowSize)) {
    windowSizes = JSON.parse(windowSizes);
    for (let id of Object.keys(libraryByWindowSize[JSON.stringify(windowSizes)])) {
        console.log(windowSizes, 'hey');
        checkGrid(grid, windowSizes[0], windowSizes[1], id, patterns);
    }
}

console.log(patterns);
console.log(JSON.stringify(patterns[0].coordinates))


//console.log(collectedPatterns);


//Maybe i should pattern search for every different width/height couples of registered patterns and check for matches based the library