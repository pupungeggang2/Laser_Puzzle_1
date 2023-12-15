function loopLevelSelect() {
    displayLevelSelect()
}

function displayLevelSelect() {
    drawSceneInit()

    context.fillText(dataLang['WorldTitle'][worldCurrent][langList[lang]], UI.textTitle[0], UI.textTitle[1], UI.textTitle[2], UI.textTitle[3])
    context.drawImage(img.back, UI.levelSelect.buttonBack[0], UI.levelSelect.buttonBack[1], UI.levelSelect.buttonBack[2], UI.levelSelect.buttonBack[3])

    drawWorldComponent()
}

function actionDownLevelSelect(x, y, button) {

}

function actionMoveLevelSelect(x, y, button) {

}

function actionUpLevelSelect(x, y, button) {
    if (button === 0) {
        if (state === '') {
            if (pause === false) {
                if (pointInsideRectArray(x, y, UI.levelSelect.buttonBack)) {
                    scene = 'Title'
                    state = ''
                }
            }
        }
    }
}