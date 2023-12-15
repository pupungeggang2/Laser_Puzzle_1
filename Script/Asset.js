let img = {
    back : new Image(),
    levelLocked : new Image(),
    levelOpen : new Image(),
    levelCleared : new Image(),
    selectFrame : new Image(),
}

function imageLoad() {
    img.back.src = 'Image/Back.png'
    img.levelLocked.src = 'Image/LevelLocked.png'
    img.levelOpen.src = 'Image/LevelOpen.png'
    img.levelCleared.src = 'Image/LevelCleared.png'
    img.selectFrame.src = 'Image/SelectedFrame.png'
}