let img = {
    back : new Image(),
    save : new Image(),
    levelLocked : new Image(),
    levelOpen : new Image(),
    levelCleared : new Image(),
    selectFrame : new Image(),

    game : {
        objective : new Image(),
        undo : new Image(),
        retry : new Image(),
        help : new Image(),
        pause : new Image(),

        orbOff : new Image(),
        orbOn : new Image(),
        rayHorizontal : new Image(),
        rayVertical : new Image(),
        tileEmpty : new Image(),
        tilePower : new Image(),
        tileIce : new Image(),
        bolt : new Image(),
        wall : new Image(),
    },

    close : new Image(),
    prev : new Image(),
    next : new Image(),

    help : [new Image(), new Image(), new Image(), new Image(), new Image(), new Image()],
}

function imageLoad() {
    img.game.objective.src = 'Image/Objective.png'
    img.game.undo.src = 'Image/Undo.png'
    img.game.retry.src = 'Image/Retry.png'
    img.game.help.src = 'Image/Help.png'
    img.game.pause.src = 'Image/Pause.png'

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
    img.game.tileIce.src = 'Image/TileIce.png'
    img.game.bolt.src = 'Image/Bolt.png'
    img.game.wall.src = 'Image/Wall.png'

    img.close.src = 'Image/Close.png'

    img.prev.src = 'Image/Prev.png'
    img.next.src = 'Image/Next.png'

    img.help[0].src = 'Image/Help1.png'
    img.help[1].src = 'Image/Help2.png'
    img.help[2].src = 'Image/Help3.png'
    img.help[3].src = 'Image/Help4.png'
    img.help[4].src = 'Image/Help5.png'
    img.help[5].src = 'Image/Help6.png'
}