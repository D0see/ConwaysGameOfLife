const patterns = [
    {
        name : 'c/2 orthogonal Spaceship',
        type : 'spaceship',
        description : 'bigass Spaceship',
        pattern : 
        [
            [false, false, false, false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, true, true, true, true, false],
            [false, false, false, false, false, false, false, true, false, false, false, true],
            [false, false, false, false, false, false, false, true, false, false, false, false],
            [false, false, false, false, false, false, false, false, true, false, false, true],
            [false, false, false, false, false, false, false, false, false, false, false, false]
        ]
    },
    {
        name : 'Mirrored Table',
        type : 'still life',
        description : 'less common than very long ship but more common than canoe',
        pattern : 
        [
            [true, true, false, true, true],
            [false, true, false, true, false], 
            [false, true, false, true, false], 
            [true, true, false, true, true] 
        ]
    }


]

export default patterns;