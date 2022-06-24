export const TETROMINES = {
    0: {shape: [[0]], color: '0, 0, 0'},
    I: {
        shape: [
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],

        ],
        color: '90, 200, 110'
    }, 
    J: {
        shape: [
            [0, 'j', 0],
            [0, 'j', 0],
            ['j', 'j', 0],

        ],
        color: '90, 200, 210'
    }, 
    L: {
        shape: [
            [0, 'L', 0],
            [0, 'L', 0],
            [0, 'L', 'L'],

        ],
        color: '190, 100, 210'
    }, 
    O: {
        shape: [
            ["O", 'O'],
            ["O", 'O'],

        ],
        color: '130, 10, 110'
    }, 
    S: {
        shape: [
            [0, 'S', 'S'],
            ['S', 'S', 0],
            [0, 0, 0],

        ],
        color: '190, 100, 210'
    }, 
    T: {
        shape: [
            [0, 0, 0],
            ['T', 'T', 'T'],
            [0, 'T', 0],

        ],
        color: '190, 100, 210'
    }, 
}