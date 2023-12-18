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
    }
}

const dataLevelConnection = {
    1001 : [1002],
    1002 : [1003]
}