function winCheck() {
    for (let i = 0; i < game.level['Board'].length; i++) {
        for (let j = 0; j < game.level['Board'][i].length; j++) {
            let temp = game.level['Board'][i][j]

            if (temp['Type'] === 'Power') {
                if (temp['Property'][1] != temp['Property'][2]) {
                    return
                }
            }
        }
    }

    state = 'Win'

    sessionVar.levelStatus[levelCurrent] = 2
    
    for (let i = 0; i < dataLevelConnection[levelCurrent].length; i++) {
        if (sessionVar.levelStatus[dataLevelConnection[levelCurrent][i]] === 0) {
            sessionVar.levelStatus[dataLevelConnection[levelCurrent][i]] = 1
        }
    }
}

function applyChange() {
    // Changing power
    for (let i = 0; i < game.level['Board'].length; i++) {
        for (let j = 0; j < game.level['Board'][i].length; j++) {
            let temp = game.level['Board'][i][j]
            if (temp['Type'] === 'Power') {
                let sum = 0

                for (let k = 0; k < temp['Property'][0].length; k++) {
                    if (temp['Property'][0][k] === 'Right') {
                        for (let l = j + 1; l < game.level['Board'][i].length; l++) {
                            if (game.level['Board'][i][l]['Type'] === 'Wall') {
                                break
                            }

                            if (game.level['Board'][i][l]['Type'] === 'Number') {
                                sum += game.level['Board'][i][l]['Property']
                            }
                        }
                    } else if (temp['Property'][0][k] === 'Left') {
                        for (let l = j - 1; l >= 0; l--) {
                            if (game.level['Board'][i][l]['Type'] === 'Wall') {
                                break
                            }

                            if (game.level['Board'][i][l]['Type'] === 'Number') {
                                sum += game.level['Board'][i][l]['Property']
                            }
                        }
                    } else if (temp['Property'][0][k] === 'Up') {
                        for (let l = i - 1; l >= 0; l--) {
                            if (game.level['Board'][l][j]['Type'] === 'Wall') {
                                break
                            }

                            if (game.level['Board'][l][j]['Type'] === 'Number') {
                                sum += game.level['Board'][l][j]['Property']
                            }
                        }
                    } else if (temp['Property'][0][k] === 'Down') {
                        for (let l = i + 1; l < game.level['Board'].length; l++) {
                            if (game.level['Board'][l][j]['Type'] === 'Wall') {
                                break
                            }

                            if (game.level['Board'][l][j]['Type'] === 'Number') {
                                sum += game.level['Board'][l][j]['Property']
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
    recorded.push(JSON.stringify(game.level))
}