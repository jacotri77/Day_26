import axios from 'axios'
import store from '../store'

export function postRecipe(recipe, userId, prepTime, cookTime, cookTemp, ForC, servingAmount, servingType, photo ) {
	axios.post('http://localhost:3001/recipes',{recipe, userId, prepTime, cookTime, cookTemp, ForC, servingAmount, servingType, photo }).then(recipe=>{
		console.log(recipe)
		store.dispatch({
			type: 'POST_RECIPE',
			recipe: recipe.data,
			userId: recipe.id,
			prepTime: recipe.prepTime,
		    cookTime: recipe.cookTime,
		    cookTemp: recipe.cookTemp,
		    ForC: recipe.ForC,
		    servingAmount: recipe.servingAmount,
		    servingType: recipe.servingType,
		    photo: recipe.photo
		})
})
}
export function postUsers(user, userId) {
	axios.post('http://localhost:3001/users',{user, userId}).then(user=>{
		store.dispatch({
			type: 'POST_USERS',
			user: user.data
		})
	})
}
export function postSteps(step, ingredientId) {
	axios.post('http://localhost:3001/steps',{step, ingredientId}).then(step=>{
		store.dispatch({
			type: 'POST_STEPS',
			step: step.data,
			ingredientId: step.ingredient
		})
	})
}
export function postIngredients(ingredient,stepId) {
	axios.post('http://localhost:3001/ingredients',{ingredient, stepId}).then(ingredient=>{
		store.dispatch({
			type: 'POST_INGREDIENTS',
			ingredient: ingredient.data,
			stepId: ingredient.step
		})
	})
}
export function patchDirections( directions){
	axios.patch('http://localhost:3001/steps/10', {directions}).then(step=>{
		store.dispatch({
			type: 'PATCH_DIRECTIONS',
			directions: step.data
		})

	})
}