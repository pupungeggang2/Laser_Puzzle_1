let canvas
let context

let gameInstance
let gameFrameCurrent
let gameFramePrevious
let delta

let scene = 'Title'
let state = ''
let pause = false
let lang = 0

let levelClearedNum = 0
let worldCurrent = -1
let levelCurrent = -1
let selectedWorld = -1
let selectedLevel = -1
let picking = {'Type' : null}
let pickingPosition = [0, 0]

let sessionVar = {

}

let game = {
    level : {
        
    },

    helpIndex : 0,
}

let recorded = []