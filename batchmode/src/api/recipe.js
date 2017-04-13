import axios from 'axios'
import store from '../store'

export function postRecipe(recipe) {
	axios.post('http://localhost:3001/recipes',{recipe}).then(recipe=>{
		store.dispatch({
			type: 'POST_RECIPE',
			recipe: recipe.data
		})
	})
}
export function postUsers(user) {
	axios.post('http://localhost:3001/users',{user}).then(user=>{
		store.dispatch({
			type: 'POST_USERS',
			user: user.data
		})
	})
}
export function postSteps(step) {
	axios.post('http://localhost:3001/steps',{step}).then(step=>{
		store.dispatch({
			type: 'POST_STEPS',
			step: step.data
		})
	})
}
export function postIngredients(ingredient) {
	axios.post('http://localhost:3001/ingredients',{ingredient}).then(ingredient=>{
		store.dispatch({
			type: 'POST_INGREDIENTS',
			ingredient: ingredient.data
		})
	})
}