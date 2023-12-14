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

    imageLoad()

    gameFrameCurrent = Date.now()
    gameFramePrevious = Date.now() - 16

    gameInstance = requestAnimationFrame(loop)
}

function loop() {
    gameFrameCurrent = Date.now()

    gameFramePrevious = Date.now()
    gameInstance = requestAnimationFrame(loop)
}

function mouseDown(event) {

}

function mouseMove(event) {

}

function mouseUp(event) {

}

function touchStart(event) {

}

function touchMove(event) {

}

function touchEnd(event) {

}

function errorHandle(err, url, line, col, obj) {
    if (obj != null) {
        cancelAnimationFrame(gameInstance)
    }
}

function rightClick() {
    return false
}