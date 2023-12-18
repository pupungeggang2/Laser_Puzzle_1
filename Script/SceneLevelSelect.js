function loopLevelSelect() {
    displayLevelSelect()
}

function displayLevelSelect() {
    drawSceneInit()

    context.fillText(`${dataLang['WorldTitle'][worldCurrent][langList[lang]]}`, UI.textTitle[0], UI.textTitle[1], UI.textTitle[2], UI.textTitle[3])

    if (selectedLevel != -1) {
        context.fillText(`${dataLang['LevelTitle'][selectedLevel][langList[lang]]}`, UI.levelSelect.textLevelName[0], UI.levelSelect.textLevelName[1])
    }

    context.drawImage(img.back, UI.levelSelect.buttonBack[0], UI.levelSelect.buttonBack[1])
    context.drawImage(img.save, UI.levelSelect.buttonSave[0], UI.levelSelect.buttonSave[1])

    drawWorldComponent()
}

function actionDownLevelSelect(x, y, button) {

}

function actionMoveLevelSelect(x, y, button) {

}

function actionUpLevelSelect(x, y, button) {
    if (button === 0) {
        if (pause === false) {
            if (state === '') {
                if (pointInsideRectArray(x, y, UI.levelSelect.buttonBack)) {
                    scene = 'Title'
                    state = ''
                }

                let clicked = false
                for (let i = 0; i < dataWorld[worldCurrent]['World'].length; i++) {
                    if (pointInsideRectArray(x, y, dataWorld[worldCurrent]['World'][i].slice(0, 4))) {
                        clicked = true
                        let tempSelected = dataWorld[worldCurrent]['World'][i][4]

                        if (sessionVar.worldStatus[tempSelected] > 0) {
                            if (tempSelected === selectedWorld) {
                                worldCurrent = selectedWorld
                                selectedWorld = -1
                            } else {
                                selectedWorld = tempSelected
                            }
                        }

                        selectedLevel = -1
                    }
                }

                if (clicked === false) {
                    selectedWorld = -1
                }

                clicked = false
                for (let i = 0; i < dataWorld[worldCurrent]['Level'].length; i++) {
                    if (pointInsideRectArray(x, y, dataWorld[worldCurrent]['Level'][i].slice(0, 4))) {
                        let tempSelected = dataWorld[worldCurrent]['Level'][i][4]
                        clicked = true

                        if (sessionVar.levelStatus[tempSelected] > 0) {
                            if (tempSelected === selectedLevel) {
                                scene = 'Game'
                                state = ''
                                levelCurrent = selectedLevel
                                loadLevel()
                                generateDrawObject()
                            } else {
                                selectedLevel = tempSelected
                            }
                        }

                        selectedWorld = -1
                    }
                }

                if (clicked === false) {
                    selectedLevel = -1
                }
            }
        }
    }
}