const dataLevel = {
    1001 : {
        'Size' : [2, 3],
        'Board' : [],
        'Hand' : [],
        'Thing' : [
            {'Type' : 'Power', 'Movable' : false, 'Property' : [['Right'], 0, 6]},
            {'Type' : 'Power', 'Movable' : false, 'Property' : [['Right'], 0, 3]},
            {'Type' : 'Number', 'Movable' : true, 'Property' : 5},
            {'Type' : 'Number', 'Movable' : true, 'Property' : 3},
            {'Type' : 'Number', 'Movable' : true, 'Property' : 1},
        ],
        'Position' : [
            [0, 0],
            [1, 0],
            [-1, 0],
            [-1, 1],
            [-1, 2]
        ],
        'Left' : -1,
        'Top' : -1,
    },

    1002 : {
        'Size' : [3, 3],
        'Board' : [],
        'Hand' : [],
        'Thing' : [
            {'Type' : 'Power', 'Movable' : false, 'Property' : [['Down'], 0, 6]},
            {'Type' : 'Power', 'Movable' : false, 'Property' : [['Right'], 0, 5]},
            {'Type' : 'Number', 'Movable' : true, 'Property' : 4},
            {'Type' : 'Number', 'Movable' : true, 'Property' : 2},
            {'Type' : 'Number', 'Movable' : true, 'Property' : 1},
        ],
        'Position' : [
            [0, 1],
            [1, 0],
            [-1, 0],
            [-1, 1],
            [-1, 2]
        ],
        'Left' : -1,
        'Top' : -1,
    },

    1003 : {
        'Size' : [3, 3],
        'Board' : [],
        'Hand' : [],
        'Thing' : [
            {'Type' : 'Power', 'Movable' : false, 'Property' : [['Right', 'Down'], 0, 9]},
            {'Type' : 'Power', 'Movable' : false, 'Property' : [['Up'], 0, 5]},
            {'Type' : 'Number', 'Movable' : true, 'Property' : 5},
            {'Type' : 'Number', 'Movable' : true, 'Property' : 3},
            {'Type' : 'Number', 'Movable' : true, 'Property' : 2},
            {'Type' : 'Number', 'Movable' : true, 'Property' : 1},
        ],
        'Position' : [
            [0, 0],
            [2, 2],
            [-1, 0],
            [-1, 1],
            [-1, 2],
            [-1, 3],
        ],
        'Left' : -1,
        'Top' : -1,
    },

    1004 : {
        'Size' : [3, 3],
        'Board' : [],
        'Hand' : [],
        'Thing' : [
            {'Type' : 'Power', 'Movable' : false, 'Property' : [['Down'], 0, 9]},
            {'Type' : 'Power', 'Movable' : false, 'Property' : [['Down'], 0, 5]},
            {'Type' : 'Power', 'Movable' : false, 'Property' : [['Right'], 0, 10]},
            {'Type' : 'Power', 'Movable' : false, 'Property' : [['Right'], 0, 4]},
            {'Type' : 'Number', 'Movable' : true, 'Property' : 6},
            {'Type' : 'Number', 'Movable' : true, 'Property' : 4},
            {'Type' : 'Number', 'Movable' : true, 'Property' : 3},
            {'Type' : 'Number', 'Movable' : true, 'Property' : 1},
        ],
        'Position' : [
            [0, 1],
            [0, 2],
            [1, 0],
            [2, 0],
            [-1, 0],
            [-1, 1],
            [-1, 2],
            [-1, 3]
        ],
        'Left' : -1,
        'Top' : -1,
    },

    1101 : {
        'Size' : [1, 5],
        'Board' : [],
        'Hand' : [],
        'Thing' : [
            {'Type' : 'Power', 'Movable' : false, 'Property' : [['Right'], 0, 6]},
            {'Type' : 'Power', 'Movable' : false, 'Property' : [['Left'], 0, 4]},
            {'Type' : 'Number', 'Movable' : true, 'Property' : 6},
            {'Type' : 'Number', 'Movable' : true, 'Property' : 4},
            {'Type' : 'Wall', 'Movable' : true, 'Property' : -1},
        ],
        'Position' : [
            [0, 0],
            [0, 4],
            [-1, 0],
            [-1, 1],
            [-1, 2],
        ],
        'Left' : -1,
        'Top' : -1,
    },

    1102 : {
        'Size' : [4, 4],
        'Board' : [],
        'Hand' : [],
        'Thing' : [
            {'Type' : 'Power', 'Movable' : false, 'Property' : [['Down'], 0, 0]},
            {'Type' : 'Power', 'Movable' : false, 'Property' : [['Down'], 0, 7]},
            {'Type' : 'Power', 'Movable' : false, 'Property' : [['Right'], 0, 3]},
            {'Type' : 'Power', 'Movable' : false, 'Property' : [['Right'], 0, 5]},
            {'Type' : 'Number', 'Movable' : false, 'Property' : 3},
            {'Type' : 'Number', 'Movable' : false, 'Property' : 4},
            {'Type' : 'Number', 'Movable' : false, 'Property' : 2},
            {'Type' : 'Number', 'Movable' : false, 'Property' : 3},
            {'Type' : 'Wall', 'Movable' : true, 'Property' : -1},
            {'Type' : 'Wall', 'Movable' : true, 'Property' : -1},
        ],
        'Position' : [
            [0, 1],
            [0, 3],
            [2, 0],
            [3, 0],
            [2, 1],
            [2, 3],
            [3, 1],
            [3, 3],
            [-1, 0],
            [-1, 1],
        ],
        'Left' : -1,
        'Top' : -1,
    }
}

const dataLevelConnection = {
    1001 : [1002],
    1002 : [1003],
    1003 : [1004],
    1004 : [1101, 1201, 1301, 1401, 1501, 1601, 3001, 3002, 3003, 3004, 3005, 3006],
    1101 : [1102],
    1102 : [1103],
}