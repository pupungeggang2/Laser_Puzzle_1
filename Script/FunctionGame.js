function winCheck() {

}

function applyChange() {

}

function undo() {

}

function loadLevel() {
    game.level = JSON.parse(JSON.stringify(dataLevel[levelCurrent]))

    boardObject = []
    
    for (i = 1; i < game.level['Size'][0] - 1; i++) {
        for (j = 1; j < game.level['Size'][1] - 1; j++) {
            let x = left + (j - 1) * tileSize
            let y = top + (i - 1) * tileSize
            let thing = game.level['Board'][i][j]

            if (thing[0] === 'Power') {
                let temp = ['Power', thing[1], [x, y], JSON.parse(JSON.stringify(thing[2])), thing[3], thing[4]]
                drawObject.push(temp)
            } else if (thing[0] === 'Number') {
                let temp = ['Number', thing[1], [x, y], thing[2]]
                drawObject.push(temp)
            }
        }
    }

    for (i = 0; i < 5; i++) {
        let x = UI.game.hand[i][0]
        let y = UI.game.hand[i][1]
        let thing = game.level['Hand'][i]

        if (thing[0] === 'Power') {
            let temp = ['Power', thing[1], [x, y], JSON.parse(JSON.stringify(thing[2])), thing[3], thing[4]]
            drawObject.push(temp)
        } else if (thing[0] === 'Number') {
            let temp = ['Number', thing[1], [x, y], thing[2]]
            drawObject.push(temp)
        }
    }
}