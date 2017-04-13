import {combineReducers, createStore} from 'redux'
import recipe from './reducers/recipe'


const rootReducer = combineReducers({
   recipe
})

const store = createStore(rootReducer)

export default store
