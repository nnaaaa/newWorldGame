import Constants from '../../constants'
const init = {
    dir: 0,
    step: 0
}

const sprites = (state = init, action) => {
    if (action.type === "changeSprites") {
        let curStep = state.step
        if (curStep === Constants.maxStep - 1)
            curStep = 0
        else
            curStep += 1
        return {
            dir: Constants.direction[action.dir],
            step: curStep
        }
    } else return state
}


export default sprites