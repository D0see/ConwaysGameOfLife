const patternLibrary = {
    '[[0,0],[0,1],[0,2]]' : {
        'name' : 'blinker',
        'type' : 'oscillator',
        'description' : 'a very common simple oscilating pattern'
    },
    '[[0,0],[1,0],[2,0]]' : {
        'name' : 'blinker',
        'type' : 'still-life',
        'description' : 'a very common simple oscilating pattern'
    },
    '[[0,0],[1,0],[0,1],[1,1]]' : {
        'name' : 'square',
        'type' : 'still-life',
        'description' : 'the simplest form of still-life'
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
    '[[0,0],[0,1],[-1,2],[-2,1],[0,2]]': {
        name: 'glider',
        type: 'spaceship',
        description: 'the smallest, most common, and first-discovered spaceship in Game of Life',
        stage: '1 / 4'
    },
    '[[0,0],[1,1],[2,1],[1,2],[0,2]]': {
        name: 'glider',
        type: 'spaceship',
        description: 'the smallest, most common, and first-discovered spaceship in Game of Life',
        stage: '2 / 4'
    },
    '[[0,0],[1,1],[0,2],[-1,2],[1,2]]': {
        name: 'glider',
        type: 'spaceship',
        description: 'the smallest, most common, and first-discovered spaceship in Game of Life',
        stage: '3 / 4'
    },
    '[[0,0],[1,1],[2,0],[2,1],[1,2]]': {
        name: 'glider',
        type: 'spaceship',
        description: 'the smallest, most common, and first-discovered spaceship in Game of Life',
        stage: '4 / 4'
    },
    '[[0,0],[1,0],[2,0],[2,1],[1,2]]': {
        name: 'glider',
        type: 'spaceship',
        description: 'the smallest, most common, and first-discovered spaceship in Game of Life',
        stage: '1 / 4'
    },
    '[[0,0],[0,1],[1,1],[1,2],[-1,2]]': {
        name: 'glider',
        type: 'spaceship',
        description: 'the smallest, most common, and first-discovered spaceship in Game of Life',
        stage: '2 / 4'
    },
    '[[0,0],[1,0],[1,1],[1,2],[-1,1]]': {
        name: 'glider',
        type: 'spaceship',
        description: 'the smallest, most common, and first-discovered spaceship in Game of Life',
        stage: '3 / 4'
    },
    '[[0,0],[1,0],[1,1],[2,1],[0,2]]': {
        name: 'glider',
        type: 'spaceship',
        description: 'the smallest, most common, and first-discovered spaceship in Game of Life',
        stage: '4 / 4'
    },
    '[[0,0],[1,0],[0,1],[0,2],[2,1]]': {
        name: 'glider',
        type: 'spaceship',
        description: 'the smallest, most common, and first-discovered spaceship in Game of Life',
        stage: '1 / 4'
    },
    '[[0,0],[1,0],[0,1],[-1,1],[1,2]]': {
        name: 'glider',
        type: 'spaceship',
        description: 'the smallest, most common, and first-discovered spaceship in Game of Life',
        stage: '2 / 4'
    },
    '[[0,0],[1,0],[2,0],[0,1],[1,2]]': {
        name: 'glider',
        type: 'spaceship',
        description: 'the smallest, most common, and first-discovered spaceship in Game of Life',
        stage: '3 / 4'
    },
    '[[0,0],[-1,1],[0,1],[-1,2],[1,2]]': {
        name: 'glider',
        type: 'spaceship',
        description: 'the smallest, most common, and first-discovered spaceship in Game of Life',
        stage: '4 / 4'
    },
    '[[0,0],[-1,1],[-1,2],[0,2],[1,2]]': {
        name: 'glider',
        type: 'spaceship',
        description: 'the smallest, most common, and first-discovered spaceship in Game of Life',
        stage: '1 / 4'
    },
    '[[0,0],[0,1],[1,1],[2,0],[1,2]]': {
        name: 'glider',
        type: 'spaceship',
        description: 'the smallest, most common, and first-discovered spaceship in Game of Life',
        stage: '2 / 4'
    },
    '[[0,0],[0,1],[0,2],[1,2],[2,1]]': {
        name: 'glider',
        type: 'spaceship',
        description: 'the smallest, most common, and first-discovered spaceship in Game of Life',
        stage: '3 / 4'
    },
    '[[0,0],[-1,1],[-2,1],[-1,2],[0,2]]': {
        name: 'glider',
        type: 'spaceship',
        description: 'the smallest, most common, and first-discovered spaceship in Game of Life',
        stage: '4 / 4'
    }
}

export default patternLibrary;