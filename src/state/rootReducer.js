import { combineReducers } from 'redux'
import skinReducer from './reducers/skinReducer'
import cameraReducer from './reducers/cameraReducer'
import spritesReducer from './reducers/spritesReducer'
import mapReducer from './reducers/mapReducer'
const rootReducer = combineReducers({
    skin: skinReducer,
    sprites: spritesReducer,
    posOfCam: cameraReducer,
    map:mapReducer
})

export default rootReducer