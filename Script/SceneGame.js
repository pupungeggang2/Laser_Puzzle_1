function loopGame() {
    displayGame()
}

function displayGame() {
    drawSceneInit()

    context.fillText(`${dataLang['LevelTitle'][levelCurrent][langList[lang]]}`, UI.textTitle[0], UI.textTitle[1])

    drawGameUpperBar()
    drawGameBoard()

    if (pause === true) {
        drawPause()
    }
}

function actionDownGame(x, y, button) {
    if (pause === false) {
        if (state === '') {
            for (i = 0; i < drawObject.length; i++) {
                if (pointInsideRect(x, y, drawObject[i][2][0], drawObject[i][2][1], 64, 64)) {
                    if (drawObject[i][1] === true) {
                        picking = i
                    }
                }
            }
        }
    }
}

function actionMoveGame(x, y, button) {
    if (pause === false) {
        if (state === '') {
            if (picking != -1) {
                drawObject[picking][2] = [x - 32, y - 32]
            }
        }
    }
}

function actionUpGame(x, y, button) {
    if (pause === false) {
        if (state === '') {
            if (picking != -1) {
                picking = -1
                let left = UI.game.boardCenter[0] - (game.level['Size'][1] - 2) * 32
                let top = UI.game.boardCenter[1] - (game.level['Size'][0] - 2) * 32
                let tileSize = 64
                let moved = false

                for (let i = 1; i < game.level['Size'][0] - 1; i++) {
                    for (let j = 0; j < game.level['Size'][1] - 1; j++) {
                        if (pointInsideRect(left + tileSize * j, top + tileSize * i, tileSize, tileSize)) {
                            if (game.level['Board'][i][j][0] === 'Empty') {

                            }
                        }
                    }
                }

                for (let i = 0; i < 5; i++) {

                }
            }

            if (pointInsideRectArray(x, y, UI.game.buttonRetry)) {
                loadLevel()
                generateDrawObject()
            } else if (pointInsideRectArray(x, y, UI.game.buttonPause)) {
                pause = true
            }

            applyChange()
            winCheck()
        }
    } else if (pause === true) {
        if (pointInsideRectArray(x, y, UI.pause.buttonResume)) {
            pause = false
        } else if (pointInsideRectArray(x, y, UI.pause.buttonMap)) {
            scene = 'LevelSelect'
            selectedWorld = -1
            selectedLevel = -1
            pause = false
        }
    }
}