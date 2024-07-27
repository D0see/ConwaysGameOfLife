const test = [[false, true, false],
              [false, true, false],
              [false, true, false]];

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

console.log(rotateArray(test));