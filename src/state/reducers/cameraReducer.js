import Constants from '../../constants'

const init = {
    x: 0,
    y: 0
}

const posOfCam = (state = init, action) => {
    if (action.type !== "changePosOfCam")
        return state
    
    let outOfMap
    const { width: Sw, height: Sh } = Constants.sizeOfSprite
    const { width: Mw, height: Mh } = Constants.mapSize

    if ((state.x == 0 && action.dir == 'left') ||   
        (state.x == Mw - Sw && action.dir == 'right') ||
        (state.y == 0 && action.dir == "up") ||
        (state.y == Mh - Sh && action.dir == 'down')
    )
        outOfMap = false
    else
        outOfMap = true
    return {    
        x: state.x - (outOfMap ? Constants.modifier[action.dir]?.x : 0),
        y: state.y - (outOfMap ? Constants.modifier[action.dir]?.y : 0)
    }
}
export default posOfCam