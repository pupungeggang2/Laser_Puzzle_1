function saveInit() {
    if (localStorage.getItem(fileName) === null) {
        localStorage.setItem(fileName, JSON.stringify(emptySave))
    }

    sessionVar = JSON.parse(localStorage.getItem(fileName))
    levelClearedCount()
}

function levelClearedCount() {
    levelClearedNum = 0

    for (let i = 0; i < levelList.length; i++) {
        if (sessionVar.levelStatus[levelList[i]] === 2) {
            levelClearedNum += 1
        }
    }
}

function saveData() {
    localStorage.setItem(fileName, JSON.stringify(fileName))
}

function loadData() {
    sessionVar = JSON.parse(localStorage.getItem(fileName))
}

function eraseData() {
    localStorage.setItem(fileName, JSON.stringify(emptySave))
    sessionVar = JSON.parse(localStorage.getItem(fileName))
    levelClearedCount()
}