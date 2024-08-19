const patternLibrary = {
    '[[0,0],[0,1],[0,2]]' : {
        name : 'blinker',
        type : 'oscillator',
        description : 'a very common simple oscilating pattern'
    },
    '[[0,0],[1,0],[2,0]]' : {
        name : 'blinker',
        type : 'oscillator',
        description : 'a very common simple oscilating pattern'
    },
    '[[0,0],[1,0],[0,1],[1,1]]' : {
        name : 'block',
        type : 'still life',
        description : 'the simplest form of still-life'
    },
    '[[0,0],[-1,1],[0,2],[1,1]]': {
        name: 'tub',
        type: 'still life',
        description: 'tub is one of only two 4-cell still lifes (the other being block).'
    },
    '[[0,0],[1,0],[1,1],[0,2],[-1,1]]': {
        name: 'boat',
        type: 'still life',
        description: 'boat is the only still life with 5 cells, discovered by the JHC group in 1970.'
    },
    '[[0,0],[1,0],[0,1],[1,2],[2,1]]': {
        name: 'boat',
        type: 'still life',
        description: 'boat is the only still life with 5 cells, discovered by the JHC group in 1970.'
    },
    '[[0,0],[-1,1],[-1,2],[0,2],[1,1]]': {
        name: 'boat',
        type: 'still life',
        description: 'boat is the only still life with 5 cells, discovered by the JHC group in 1970.'
    },
    '[[0,0],[-1,1],[0,2],[1,1],[1,2]]': {
        name: 'boat',
        type: 'still life',
        description: 'boat is the only still life with 5 cells, discovered by the JHC group in 1970.'
    },
    '[[0,0],[1,0],[2,1],[1,2],[0,3],[-1,2],[-1,1]]': {
        name: 'Loaf',
        type: 'still life',
        description: 'a 7-cell still life discovered by John Conway in 1969'
    },
    '[[0,0],[-1,1],[-1,2],[0,3],[1,3],[2,2],[1,1]]': {
        name: 'Loaf',
        type: 'still life',
        description: 'a 7-cell still life discovered by John Conway in 1969'
    },
    '[[0,0],[-1,1],[-2,2],[-1,3],[0,3],[1,2],[1,1]]': {
        name: 'Loaf',
        type: 'still life',
        description: 'a 7-cell still life discovered by John Conway in 1969'
    },
    '[[0,0],[1,0],[2,1],[2,2],[1,3],[0,2],[-1,1]]': {
        name: 'Loaf',
        type: 'still life',
        description: 'a 7-cell still life discovered by John Conway in 1969'
    },
    '[[0,0],[1,0],[2,1],[1,2],[0,2],[-1,1]]': {
        name: 'beehive',
        type: 'still life',
        description: 'a 6-cell still life. It can be seen as a weld of two tubs.'
    },
    '[[0,0],[-1,1],[-1,2],[0,3],[1,2],[1,1]]': {
        name: 'beehive',
        type: 'still life',
        description: 'a 6-cell still life. It can be seen as a weld of two tubs.'
    },
    '[[0,0],[0,1],[-1,2],[-2,1],[0,2]]': {
        name: 'glider',
        type: 'spaceship',
        description: 'the smallest, most common, and first-discovered spaceship in Game of Life.',
        step: '1 / 4'
    },
    '[[0,0],[1,1],[2,1],[1,2],[0,2]]': {
        name: 'glider',
        type: 'spaceship',
        description: 'the smallest, most common, and first-discovered spaceship in Game of Life.',
        step: '2 / 4'
    },
    '[[0,0],[1,1],[0,2],[-1,2],[1,2]]': {
        name: 'glider',
        type: 'spaceship',
        description: 'the smallest, most common, and first-discovered spaceship in Game of Life.',
        step: '3 / 4'
    },
    '[[0,0],[1,1],[2,0],[2,1],[1,2]]': {
        name: 'glider',
        type: 'spaceship',
        description: 'the smallest, most common, and first-discovered spaceship in Game of Life.',
        step: '4 / 4'
    },
    '[[0,0],[1,0],[2,0],[2,1],[1,2]]': {
        name: 'glider',
        type: 'spaceship',
        description: 'the smallest, most common, and first-discovered spaceship in Game of Life.',
        step: '1 / 4'
    },
    '[[0,0],[0,1],[1,1],[1,2],[-1,2]]': {
        name: 'glider',
        type: 'spaceship',
        description: 'the smallest, most common, and first-discovered spaceship in Game of Life.',
        step: '2 / 4'
    },
    '[[0,0],[1,0],[1,1],[1,2],[-1,1]]': {
        name: 'glider',
        type: 'spaceship',
        description: 'the smallest, most common, and first-discovered spaceship in Game of Life.',
        step: '3 / 4'
    },
    '[[0,0],[1,0],[1,1],[2,1],[0,2]]': {
        name: 'glider',
        type: 'spaceship',
        description: 'the smallest, most common, and first-discovered spaceship in Game of Life.',
        step: '4 / 4'
    },
    '[[0,0],[1,0],[0,1],[0,2],[2,1]]': {
        name: 'glider',
        type: 'spaceship',
        description: 'the smallest, most common, and first-discovered spaceship in Game of Life.',
        step: '1 / 4'
    },
    '[[0,0],[1,0],[0,1],[-1,1],[1,2]]': {
        name: 'glider',
        type: 'spaceship',
        description: 'the smallest, most common, and first-discovered spaceship in Game of Life.',
        step: '2 / 4'
    },
    '[[0,0],[1,0],[2,0],[0,1],[1,2]]': {
        name: 'glider',
        type: 'spaceship',
        description: 'the smallest, most common, and first-discovered spaceship in Game of Life.',
        step: '3 / 4'
    },
    '[[0,0],[-1,1],[0,1],[-1,2],[1,2]]': {
        name: 'glider',
        type: 'spaceship',
        description: 'the smallest, most common, and first-discovered spaceship in Game of Life.',
        step: '4 / 4'
    },
    '[[0,0],[-1,1],[-1,2],[0,2],[1,2]]': {
        name: 'glider',
        type: 'spaceship',
        description: 'the smallest, most common, and first-discovered spaceship in Game of Life.',
        step: '1 / 4'
    },
    '[[0,0],[0,1],[1,1],[2,0],[1,2]]': {
        name: 'glider',
        type: 'spaceship',
        description: 'the smallest, most common, and first-discovered spaceship in Game of Life.',
        step: '2 / 4'
    },
    '[[0,0],[0,1],[0,2],[1,2],[2,1]]': {
        name: 'glider',
        type: 'spaceship',
        description: 'the smallest, most common, and first-discovered spaceship in Game of Life.',
        step: '3 / 4'
    },
    '[[0,0],[-1,1],[-2,1],[-1,2],[0,2]]': {
        name: 'glider',
        type: 'spaceship',
        description: 'the smallest, most common, and first-discovered spaceship in Game of Life.',
        step: '4 / 4'
    },
    // Discontinued patterns
    '[[0,0],[0,1],[0,2],[0,3],[1,0],[1,4],[2,0],[3,1],[3,4]]': {
        name: 'c/2 orthogonal Spaceship',
        type: 'spaceship',
        description: 'bigass Spaceship',
        step: '1 / 4'
    },
    '[[0,2],[0,3],[1,1],[1,2],[1,3],[1,4],[2,0],[2,1],[2,3],[2,4],[3,1],[3,2]]': {
        name: 'c/2 orthogonal Spaceship',
        type: 'spaceship',
        description: 'bigass Spaceship',
        step: '2 / 4'
    },
    '[[0,1],[0,4],[1,0],[2,0],[2,4],[3,0],[3,1],[3,2],[3,3]]': {
        name: 'c/2 orthogonal Spaceship',
        type: 'spaceship',
        description: 'bigass Spaceship',
        step: '3 / 4'
    },
    '[[0,1],[0,2],[1,0],[1,1],[1,3],[1,4],[2,1],[2,2],[2,3],[2,4],[3,2],[3,3]]': {
        name: 'c/2 orthogonal Spaceship',
        type: 'spaceship',
        description: 'bigass Spaceship',
        step: '4 / 4'
    },
    '[[0,0],[0,3],[1,4],[2,0],[2,4],[3,1],[3,2],[3,3],[3,4]]': {
        name: 'c/2 orthogonal Spaceship',
        type: 'spaceship',
        description: 'bigass Spaceship',
        step: '1 / 4'
    },
    '[[0,2],[0,3],[1,0],[1,1],[1,3],[1,4],[2,0],[2,1],[2,2],[2,3],[3,1],[3,2]]': {
        name: 'c/2 orthogonal Spaceship',
        type: 'spaceship',
        description: 'bigass Spaceship',
        step: '2 / 4'
    },
    '[[0,1],[0,2],[0,3],[0,4],[1,0],[1,4],[2,4],[3,0],[3,3]]': {
        name: 'c/2 orthogonal Spaceship',
        type: 'spaceship',
        description: 'bigass Spaceship',
        step: '3 / 4'
    },
    '[[0,1],[0,2],[1,0],[1,1],[1,2],[1,3],[2,0],[2,1],[2,3],[2,4],[3,2],[3,3]]': {
        name: 'c/2 orthogonal Spaceship',
        type: 'spaceship',
        description: 'bigass Spaceship',
        step: '4 / 4'
    },
    '[[0,0],[0,1],[0,3],[0,4],[1,1],[1,3],[2,1],[2,3],[3,0],[3,1],[3,3],[3,4]]': {
        name: 'Mirrored Table',
        type: 'still life',
        description: 'less common than very long ship but more common than canoe'
    },
    '[[0,1],[0,3],[1,0],[2,0],[3,0],[3,3],[4,0],[4,1],[4,2]]': {
        name: 'c/2 orthogonal Spaceship',
        type: 'spaceship',
        description: 'bigass Spaceship',
        step: '1 / 4'
    },
    '[[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,3],[3,1],[3,2],[3,3],[4,2]]': {
        name: 'c/2 orthogonal Spaceship',
        type: 'spaceship',
        description: 'bigass Spaceship',
        step: '2 / 4'
    },
    '[[0,0],[0,2],[1,3],[2,3],[3,0],[3,3],[4,1],[4,2],[4,3]]': {
        name: 'c/2 orthogonal Spaceship',
        type: 'spaceship',
        description: 'bigass Spaceship',
        step: '3 / 4'
    },
    '[[0,1],[0,2],[1,1],[1,2],[1,3],[2,0],[2,2],[2,3],[3,0],[3,1],[3,2],[4,1]]': {
        name: 'c/2 orthogonal Spaceship',
        type: 'spaceship',
        description: 'bigass Spaceship',
        step: '4 / 4'
    },
    '[[0,1],[0,2],[0,3],[1,0],[1,3],[2,3],[3,3],[4,0],[4,2]]': {
        name: 'c/2 orthogonal Spaceship',
        type: 'spaceship',
        description: 'bigass Spaceship',
        step: '1 / 4'
    },
    '[[0,1],[1,0],[1,1],[1,2],[2,0],[2,2],[2,3],[3,1],[3,2],[3,3],[4,1],[4,2]]': {
        name: 'c/2 orthogonal Spaceship',
        type: 'spaceship',
        description: 'bigass Spaceship',
        step: '2 / 4'
    },
    '[[0,0],[0,1],[0,2],[1,0],[1,3],[2,0],[3,0],[4,1],[4,3]]': {
        name: 'c/2 orthogonal Spaceship',
        type: 'spaceship',
        description: 'bigass Spaceship',
        step: '3 / 4'
    },
    '[[0,2],[1,1],[1,2],[1,3],[2,0],[2,1],[2,3],[3,0],[3,1],[3,2],[4,1],[4,2]]': {
        name: 'c/2 orthogonal Spaceship',
        type: 'spaceship',
        description: 'bigass Spaceship',
        step: '4 / 4'
    },
    '[[0,0],[0,3],[1,0],[1,1],[1,2],[1,3],[3,0],[3,1],[3,2],[3,3],[4,0],[4,3]]': {
        name: 'Mirrored Table',
        type: 'still life',
        description: 'less common than very long ship but more common than canoe'
    }
}

export default patternLibrary;