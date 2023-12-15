function loopGame() {
    displayGame()
}

function displayGame() {
    drawSceneInit()

    context.fillText(`${dataLang['LevelTitle'][levelCurrent][langList[lang]]}`, UI.textTitle[0], UI.textTitle[1])

    drawGameUpperBar()
    drawGameBoard()
    drawGameHand()

    if (pause === true) {
        drawPause()
    }
}

function actionDownGame(x, y, button) {

}

function actionMoveGame(x, y, button) {

}

function actionUpGame(x, y, button) {
    if (pause === false) {
        if (state === '') {
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