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

//returns all patterns in the board whos ids are in the library
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

export default {collectPatterns}