window.onload = main
window.onerror = errorHandle
window.oncontextmenu = rightClick

function main() {
    canvas = document.getElementById('Screen')
    context = canvas.getContext('2d')

    window.addEventListener('mousedown', mouseDown, false)
    window.addEventListener('mousemove', mouseMove, false)
    window.addEventListener('mouseup', mouseUp, false)
    window.addEventListener('touchstart', touchStart, false)
    window.addEventListener('touchmove', touchMove, false)
    window.addEventListener('touchend', touchEnd, false)

    saveInit()
    imageLoad()

    gameFrameCurrent = Date.now()
    gameFramePrevious = Date.now() - 16

    gameInstance = requestAnimationFrame(loop)
}

function loop() {
    gameFrameCurrent = Date.now()

    if (scene === 'Title') {
        loopTitle()
    } else if (scene === 'LevelSelect') {
        loopLevelSelect()
    } else if (scene === 'Game') {
        loopGame()
    }

    gameFramePrevious = Date.now()
    gameInstance = requestAnimationFrame(loop)
}

function mouseDown(event) {
    let canvasRect = canvas.getBoundingClientRect()
    let x = event.clientX - canvasRect.left
    let y = event.clientY - canvasRect.top
    let button = event.button

    if (mouseDownEnabled === true) {
        if (scene === 'Title') {
            actionDownTitle(x, y, button)
        } else if (scene === 'LevelSelect') {
            actionDownLevelSelect(x, y, button)
        } else if (scene === 'Game') {
            actionDownGame(x, y, button)
        }
    }
    
    mouseDownEnabled = true
}

function mouseMove(event) {
    let canvasRect = canvas.getBoundingClientRect()
    let x = event.clientX - canvasRect.left
    let y = event.clientY - canvasRect.top
    let button = event.button

    if (mouseMoveEnabled === true) {
        if (scene === 'Title') {
            actionMoveTitle(x, y, button)
        } else if (scene === 'LevelSelect') {
            actionMoveLevelSelect(x, y, button)
        } else if (scene === 'Game') {
            actionMoveGame(x, y, button)
        }
    }

    mouseMoveEnabled = true
}

function mouseUp(event) {
    let canvasRect = canvas.getBoundingClientRect()
    let x = event.clientX - canvasRect.left
    let y = event.clientY - canvasRect.top
    let button = event.button

    if (mouseUpEnabled === true) {
        if (scene === 'Title') {
            actionUpTitle(x, y, button)
        } else if (scene === 'LevelSelect') {
            actionUpLevelSelect(x, y, button)
        } else if (scene === 'Game') {
            actionUpGame(x, y, button)
        }
    }

    mouseUpEnabled = true
}

function touchStart(event) {
    let canvasRect = canvas.getBoundingClientRect()
    let x = event.changedTouches[0].pageX - canvasRect.left
    let y = event.changedTouches[0].pageY - canvasRect.top

    if (scene === 'Title') {
        actionDownTitle(x, y, 0)
    } else if (scene === 'LevelSelect') {
        actionDownLevelSelect(x, y, 0)
    } else if (scene === 'Game') {
        actionDownGame(x, y, 0)
    }

    mouseUpEnabled = false
    mouseMoveEnabled = false
    mouseDownEnabled = false
}

function touchMove(event) {
    let canvasRect = canvas.getBoundingClientRect()
    let x = event.changedTouches[0].pageX - canvasRect.left
    let y = event.changedTouches[0].pageY - canvasRect.top

    if (scene === 'Title') {
        actionMoveTitle(x, y, 0)
    } else if (scene === 'LevelSelect') {
        actionMoveLevelSelect(x, y, 0)
    } else if (scene === 'Game') {
        actionMoveGame(x, y, 0)
    }

    mouseUpEnabled = true
    mouseMoveEnabled = true
    mouseDownEnabled = true
}

function touchEnd(event) {
    let canvasRect = canvas.getBoundingClientRect()
    let x = event.changedTouches[0].pageX - canvasRect.left
    let y = event.changedTouches[0].pageY - canvasRect.top

    if (scene === 'Title') {
        actionUpTitle(x, y, 0)
    } else if (scene === 'LevelSelect') {
        actionUpLevelSelect(x, y, 0)
    } else if (scene === 'Game') {
        actionUpGame(x, y, 0)
    }
}

function errorHandle(err, url, line, col, obj) {
    if (obj != null) {
        cancelAnimationFrame(gameInstance)
    }
}

function rightClick() {
    return false
}