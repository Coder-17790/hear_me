import {combineReducers} from 'redux'
import actionForReducer from './infoReducer'

const reducers = combineReducers({
    persioninfo: actionForReducer
})

export default (state, action) => reducers(state, action)
