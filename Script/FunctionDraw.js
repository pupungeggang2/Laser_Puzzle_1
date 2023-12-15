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