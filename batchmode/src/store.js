import  {createStore} from 'redux'
import recipe from './reducers/recipe'

const store = createStore(recipe)

export default store
