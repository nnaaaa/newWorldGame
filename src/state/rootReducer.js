import { combineReducers } from 'redux'
import skinReducers from './reducers/skinReducer'
import cameraReducers from './reducers/cameraReducer'
import spritesReducers from './reducers/spritesReducer'
const rootReducer = combineReducers({
    skin: skinReducers,
    sprites: spritesReducers,
    posOfCam: cameraReducers,
})

export default rootReducer