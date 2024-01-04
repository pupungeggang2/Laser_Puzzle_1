function winCheck() {
    for (let i = 0; i < game.level['Board'].length; i++) {
        for (let j = 0; j < game.level['Board'][i].length; j++) {
            let temp = game.level['Board'][i][j]

            if (temp['Type'] === 'Power') {
                if (temp['Property'][1] != temp['Property'][2]) {
                    return
                }
            } else if (temp['Type'] === 'PowerUpper') {
                if (temp['Property'][1] <= temp['Property'][2]) {
                    return
                }
            } else if (temp['Type'] === 'PowerLower') {
                if (temp['Property'][1] >= temp['Property'][2]) {
                    return
                }
            }
        }
    }

    state = 'Win'

    sessionVar.levelStatus[levelCurrent] = 2
    
    for (let i = 0; i < dataLevelConnection[levelCurrent].length; i++) {
        if (dataLevelConnection[levelCurrent][i] < 3000) {
            if (sessionVar.levelStatus[dataLevelConnection[levelCurrent][i]] === 0) {
                sessionVar.levelStatus[dataLevelConnection[levelCurrent][i]] = 1
            }
        } else {
            if (sessionVar.worldStatus[dataLevelConnection[levelCurrent][i]] === 0) {
                sessionVar.worldStatus[dataLevelConnection[levelCurrent][i]] = 1
            }
        }
    }
}

function applyChange() {
    // Changing power
    for (let i = 0; i < game.level['Board'].length; i++) {
        for (let j = 0; j < game.level['Board'][i].length; j++) {
            let temp = game.level['Board'][i][j]
            if (temp['Type'] === 'Power' || temp['Type'] === 'PowerUpper' || temp['Type'] === 'PowerLower') {
                let sum = 0

                for (let k = 0; k < temp['Property'][0].length; k++) {
                    let rayQueue = []
                    if (temp['Property'][0][k] === 'Right') {
                        rayQueue = [[i, j + 1, 'Right']]
                    } else if (temp['Property'][0][k] === 'Left') {
                        rayQueue = [[i, j - 1, 'Left']]
                    } else if (temp['Property'][0][k] === 'Up') {
                        rayQueue = [[i - 1, j, 'Up']]
                    } else if (temp['Property'][0][k] === 'Down') {
                        rayQueue = [[i + 1, j, 'Down']]
                    }

                    while (rayQueue.length > 0) {
                        let row = rayQueue[0][0]
                        let column = rayQueue[0][1]
                        let direction = rayQueue[0][2]
                        rayQueue.shift()

                        if (!(row >= 0 && column >= 0 && row < game.level['Board'].length && column < game.level['Board'][0].length)) {
                            continue
                        }

                        if (game.level['Board'][row][column]['Type'] === 'Wall') {
                            continue
                        }

                        if (game.level['Board'][row][column]['Type'] === 'Number') {
                            sum += game.level['Board'][row][column]['Property']
                        }

                        if (false) {

                        } else {
                            if (direction === 'Right') {
                                rayQueue.push([row, column + 1, 'Right'])
                            } else if (direction === 'Left') {
                                rayQueue.push([row, column - 1, 'Left'])
                            } else if (direction === 'Up') {
                                rayQueue.push([row - 1, column, 'Up'])
                            } else if (direction === 'Down') {
                                rayQueue.push([row + 1, column, 'Down'])
                            }
                        }
                    }
                }

                temp['Property'][1] = sum
            }
        }
    }

    recorded.unshift(JSON.stringify(game.level))

    if (recorded.length >= 21) {
        recorded.pop()
    }
}

function undo() {
    if (recorded.length > 1) {
        recorded.shift()
        game.level = JSON.parse(recorded[0])
    }
}

function gameInit() {
    loadLevel()
}

function loadLevel() {
    game.level = JSON.parse(JSON.stringify(dataLevel[levelCurrent]))

    game.level['Left'] = UI.game.boardCenter[0] - game.level['Size'][1] * 32
    game.level['Top'] = UI.game.boardCenter[1] - game.level['Size'][0] * 32

    game.level['Board'] = []

    for (let i = 0; i < game.level['Size'][0]; i++) {
        let temp = []
        for (let j = 0; j < game.level['Size'][1]; j++) {
            temp.push({'Type' : 'Empty'})
        }
        game.level['Board'].push(temp)
    }

    for (let i = 0; i < 5; i++) {
        game.level['Hand'].push({'Type' : 'Empty'})
    }

    for (let i = 0; i < game.level['Position'].length; i++) {
        let position = game.level['Position'][i]
        if (position[0] > -1) {
            game.level['Board'][position[0]][position[1]] = JSON.parse(JSON.stringify(game.level['Thing'][i]))
        } else {
            game.level['Hand'][position[1]] = JSON.parse(JSON.stringify(game.level['Thing'][i]))
        }
    }

    recorded = []
    applyChange()
}