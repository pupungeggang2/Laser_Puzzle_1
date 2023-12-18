function drawSceneInit() {
    context.fillStyle = 'Black'
    context.strokeStyle = 'Black'
    context.font = '32px neodgm'
    context.textAlign = 'center'
    context.textBaseline = 'middle'
    context.lineWidth = 2

    context.clearRect(0, 0, 320, 640)
}

function drawWorldComponent() {
    for (let i = 0; i < dataWorld[worldCurrent]['World'].length; i++) {
        if (sessionVar.worldStatus[dataWorld[worldCurrent]['World'][i][4]] === 0) {
            context.drawImage(img.levelLocked, dataWorld[worldCurrent]['World'][i][0], dataWorld[worldCurrent]['World'][i][1])
        } else if (sessionVar.worldStatus[dataWorld[worldCurrent]['World'][i][4]] === 1) {
            context.drawImage(img.levelOpened, dataWorld[worldCurrent]['World'][i][0], dataWorld[worldCurrent]['World'][i][1])
        } else if (sessionVar.worldStatus[dataWorld[worldCurrent]['World'][i][4]] === 2) {
            context.drawImage(img.levelCleared, dataWorld[worldCurrent]['World'][i][0], dataWorld[worldCurrent]['World'][i][1])
        }

        context.fillText(`${dataWorld[worldCurrent]['World'][i][5]}`, dataWorld[worldCurrent]['World'][i][0] + 20, dataWorld[worldCurrent]['World'][i][1] + 20)
    }

    for (let i = 0; i < dataWorld[worldCurrent]['Level'].length; i++) {
        if (sessionVar.levelStatus[dataWorld[worldCurrent]['Level'][i][4]] === 0) {
            context.drawImage(img.levelLocked, dataWorld[worldCurrent]['Level'][i][0], dataWorld[worldCurrent]['Level'][i][1])
        } else if (sessionVar.levelStatus[dataWorld[worldCurrent]['Level'][i][4]] === 1) {
            context.drawImage(img.levelOpen, dataWorld[worldCurrent]['Level'][i][0], dataWorld[worldCurrent]['Level'][i][1])
        } else if (sessionVar.levelStatus[dataWorld[worldCurrent]['Level'][i][4]] === 2) {
            context.drawImage(img.levelCleared, dataWorld[worldCurrent]['Level'][i][0], dataWorld[worldCurrent]['Level'][i][1])
        }

        context.fillText(`${dataWorld[worldCurrent]['Level'][i][5]}`, dataWorld[worldCurrent]['Level'][i][0] + 20, dataWorld[worldCurrent]['Level'][i][1] + 20)
    }

    if (selectedWorld != -1) {
        for (let i = 0; i < dataWorld[worldCurrent]['World'].length; i++) {
            if (selectedWorld === dataWorld[worldCurrent]['World'][i][4]) {
                context.drawImage(img.selectFrame, dataWorld[worldCurrent]['World'][i][0], dataWorld[worldCurrent]['World'][i][1])
            } 
        }
    }

    if (selectedLevel != -1) {
        for (let i = 0; i < dataWorld[worldCurrent]['Level'].length; i++) {
            if (selectedLevel === dataWorld[worldCurrent]['Level'][i][4]) {
                context.drawImage(img.selectFrame, dataWorld[worldCurrent]['Level'][i][0], dataWorld[worldCurrent]['Level'][i][1])
            } 
        }
    }
}

function drawGameUpperBar() {
    context.drawImage(img.game.objective, UI.game.buttonObjective[0], UI.game.buttonObjective[1])
    context.drawImage(img.game.undo, UI.game.buttonUndo[0], UI.game.buttonUndo[1])
    context.drawImage(img.game.retry, UI.game.buttonRetry[0], UI.game.buttonRetry[1])
    context.drawImage(img.game.help, UI.game.buttonHelp[0], UI.game.buttonHelp[1])
    context.drawImage(img.game.pause, UI.game.buttonPause[0], UI.game.buttonPause[1])
}

function drawGameBoard() {

}

function drawPause() {
    context.fillStyle = 'White'
    context.fillRect(UI.pause.rect[0], UI.pause.rect[1], UI.pause.rect[2], UI.pause.rect[3])
    context.fillStyle = 'Black'
    context.strokeRect(UI.pause.rect[0], UI.pause.rect[1], UI.pause.rect[2], UI.pause.rect[3])

    context.fillText(`${dataLang['Pause'][langList[lang]]}`, UI.pause.textPaused[0], UI.pause.textPaused[1])
    context.strokeRect(UI.pause.buttonResume[0], UI.pause.buttonResume[1], UI.pause.buttonResume[2], UI.pause.buttonResume[3])
    context.fillText(`${dataLang['Resume'][langList[lang]]}`, UI.pause.textResume[0], UI.pause.textResume[1])
    context.strokeRect(UI.pause.buttonMap[0], UI.pause.buttonMap[1], UI.pause.buttonMap[2], UI.pause.buttonMap[3])
    context.fillText(`${dataLang['Map'][langList[lang]]}`, UI.pause.textMap[0], UI.pause.textMap[1])
}

function generateDrawObject() {

}