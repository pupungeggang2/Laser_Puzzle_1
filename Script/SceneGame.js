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
            }

            if (pointInsideRectArray(x, y, UI.game.buttonPause)) {
                pause = true
            }
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