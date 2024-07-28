const patternLibrary = {
    '[[0,0],[0,1],[0,2]]' : {
        'name' : 'blinker',
        'description' : 'a very common simple oscilating pattern'
    },
    '[[0,0],[1,0],[2,0]]' : {
        'name' : 'blinker',
        'description' : 'a very common simple oscilating pattern'
    },
    '[[0,0],[1,0],[0,1],[1,1]]' : {
        'name' : 'square',
        'description' : 'the simplest form of still-life'
    }
}

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
    '[[0,0],[1,1],[2,1],[1,2],[0,2]]'
    '[[0,0],[-1,1],[-1,2],[0,2],[1,2]]' : {
        'name' : 'glider',
        'type' : 'spaceship',
        'description' : 'the smallest type of spaceship, seen here going 2'
    },
    '[[0,0],[1,0],[1,1],[1,2],[-1,1]]'
    '[[0,0],[0,1],[1,1],[1,2],[-1,2]]'
    '[[0,0],[1,0],[0,1],[0,2],[2,1]]' : {
        'name' : 'glider',
        'type' : 'spaceship',
        'description' : 'the smallest type of spaceship, seen here going 3'
    },
    '[[0,0],[1,0],[2,0],[0,1],[1,2]]'
    '[[0,0],[1,0],[0,1],[-1,1],[1,2]]'
    '[[0,0],[1,0],[2,0],[2,1],[1,2]]' : {
        'name' : 'glider',
        'type' : 'spaceship',
        'description' : 'the smallest type of spaceship, seen here going 4'
    },
    '[[0,0],[0,1],[0,2],[1,2],[2,1]]'
    '[[0,0],[0,1],[1,1],[2,0],[1,2]]'
}

*/

export default patternLibrary;