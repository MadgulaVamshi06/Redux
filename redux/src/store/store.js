import {combineReducers, legacy_createStore} from 'redux'
import { themeReducer, todoReducer } from './reduce'

const rootReducer = combineReducers({
    theme : themeReducer,
    todo : todoReducer
})
export const store = legacy_createStore(rootReducer)