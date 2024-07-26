
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
    '[[0,0],[-1,1],[-1,2],[0,2],[1,2]]' : {
        'name' : 'glider',
        'type' : 'spaceship',
        'description' : 'the smallest type of spaceship, seen here going 2'
    },
    '[[0,0],[1,0],[0,1],[0,2],[2,1]]' : {
        'name' : 'glider',
        'type' : 'spaceship',
        'description' : 'the smallest type of spaceship, seen here going 3'
    },
    '[[0,0],[1,0],[2,0],[2,1],[1,2]]' : {
        'name' : 'glider',
        'type' : 'spaceship',
        'description' : 'the smallest type of spaceship, seen here going 4'
    },

}

// returns an object with pattern id & pattern location;
const identifyPattern = (board, i, j, x, y, pattern) => {
    if (!board[i]?.[j]) {return;}
    pattern['id'].push([x, y]);
    pattern['coordinates'].push([i, j]);
    //erases current location (as to not look twice in the same spot)
    board[i][j] = false;
    identifyPattern(board, i - 1, j - 1, x - 1, y - 1, pattern)
    identifyPattern(board, i - 1, j, x, y - 1, pattern)
    identifyPattern(board, i - 1, j + 1, x + 1, y - 1, pattern)
    identifyPattern(board, i, j - 1, x - 1, y, pattern)
    identifyPattern(board, i, j + 1, x + 1, y, pattern)
    identifyPattern(board, i + 1, j - 1, x - 1, y + 1, pattern)
    identifyPattern(board, i + 1, j, x, y + 1, pattern)
    identifyPattern(board, i + 1, j + 1, x + 1, y + 1, pattern)
    return pattern;
}

//returns all patterns in the board
const collectPatterns = (board, patternLibrary) => {
    const tempBoard = JSON.parse(JSON.stringify(board));
    const patterns = [];
    for (let i = 0; i < tempBoard.length; i++) {
        for (let j = 0; j < tempBoard[0].length; j++) {
            if (tempBoard[i][j]) {let patternObj = identifyPattern(tempBoard, i, j, 0, 0, {'id' : [], 'coordinates' : []})
                patternObj['id'] = JSON.stringify(patternObj['id']);
                if (patternLibrary[patternObj['id']]) {patterns.push(patternObj);}
            }
        }
    }
    return patterns;
}

export default {patternLibrary, collectPatterns}