function loopTitle() {
    displayTitle()
}

function displayTitle() {
    drawSceneInit()

    context.fillText(dataLang['GameTitle'][langList[lang]], UI.textTitle[0], UI.textTitle[1])

    context.strokeRect(UI.title.buttonStart[0], UI.title.buttonStart[1], UI.title.buttonStart[2], UI.title.buttonStart[3])
    context.fillText(dataLang['TextStart'][langList[lang]], UI.title.textStart[0], UI.title.textStart[1])
    context.fillText('0/10', UI.title.textData1[0], UI.title.textData1[1])
    context.fillText('0%', UI.title.textData2[0], UI.title.textData2[1]) 
    context.strokeRect(UI.title.buttonErase[0], UI.title.buttonErase[1], UI.title.buttonErase[2], UI.title.buttonErase[3])
    context.fillText(dataLang['TextErase'][langList[lang]], UI.title.textErase[0], UI.title.textErase[1])
    context.strokeRect(UI.title.buttonLang[0], UI.title.buttonLang[1], UI.title.buttonLang[2], UI.title.buttonLang[3])
    context.fillText(dataLang['TextLang'][langList[lang]], UI.title.textLang[0], UI.title.textLang[1])
}

function actionDownTitle(x, y, button) {

}

function actionMoveTitle(x, y, button) {

}

function actionUpTitle(x, y, button) {
    if (button === 0) {
        if (state === '') {
            if (pause === false) {
                if (pointInsideRectArray(x, y, UI.title.buttonStart)) {
                    scene = 'LevelSelect'
                    state = ''
                    worldCurrent = 0
                } else if (pointInsideRectArray(x, y, UI.title.buttonErase)) {
                    eraseData()
                } else if (pointInsideRectArray(x, y, UI.title.buttonLang)) {
                    lang = (lang + 1) % langList.length
                }
            }
        }
    }
}