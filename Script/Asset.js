let img = {
    back : new Image(),
    save : new Image(),
    levelLocked : new Image(),
    levelOpen : new Image(),
    levelCleared : new Image(),
    selectFrame : new Image(),

    game : {
        pause : new Image(),
        objective : new Image(),

        orbOff : new Image(),
        orbOn : new Image(),
        rayHorizontal : new Image(),
        rayVertical : new Image(),
        tileEmpty : new Image(),
        tilePower : new Image(),
    }
}

function imageLoad() {
    img.game.pause.src = 'Image/Pause.png'
    img.game.objective.src = 'Image/Objective.png'

    img.back.src = 'Image/Back.png'
    img.save.src = 'Image/Save.png'
    img.levelLocked.src = 'Image/LevelLocked.png'
    img.levelOpen.src = 'Image/LevelOpen.png'
    img.levelCleared.src = 'Image/LevelCleared.png'
    img.selectFrame.src = 'Image/SelectedFrame.png'

    img.game.orbOff.src = 'Image/OrbOff.png'
    img.game.orbOn.src = 'Image/OrbOn.png'
    img.game.rayHorizontal.src = 'Image/RayHorizontal.png'
    img.game.rayVertical.src = 'Image/RayVertical.png'
    img.game.tileEmpty.src = 'Image/TileEmpty.png'
    img.game.tilePower.src = 'Image/TilePower.png'
}