import axios from 'axios'
import store from '../store'

export function postRecipe(recipe, userId, prepTime, cookTime, cookTemp, servingAmount, servingType, deg, photo, recipeType ) {
	axios.post('http://localhost:3001/recipes',{recipe, userId, prepTime, cookTime, cookTemp, servingAmount, servingType,deg, photo, recipeType }).then(recipe=>{
		console.log(recipe)
		store.dispatch({
			type: 'POST_RECIPE',
			recipe: recipe.data,
			userId: recipe.id,
			prepTime: recipe.prepTime,
		    cookTime: recipe.cookTime,
		    cookTemp: recipe.cookTemp,
		    deg: recipe.deg,
		    servingAmount: recipe.servingAmount,
		    servingType: recipe.servingType,
		    photo: recipe.photo,
		    recipeType: recipe.recipeType,


		})
})
}
export function postUsers(user) {
	axios.post('http://localhost:3001/users',{user}).then(user=>{
		store.dispatch({
			type: 'POST_USERS',
			user: user.data,
			
		})
	})
}
export function postSteps(recipeId, directions, stepId) {
	axios.post('http://localhost:3001/steps',{recipeId, directions, stepId}).then(step=>{
		console.log(step)
		store.dispatch({
			type: 'POST_STEPS',
			recipeId: step.data.recipeId,
			directions: step.data.directions,
			stepId: step.data.stepId,
			
			
		})
	})
}
export function postIngredients(ingredients,stepId,  amount, unit) {
	axios.post('http://localhost:3001/ingredients',{ingredients, stepId, amount, unit}).then(ingredient=>{
		console.log(ingredient)
		store.dispatch({
			type: 'POST_INGREDIENTS',
			ingredient: ingredient.data.ingredients,
			stepId: ingredient.data.stepId,
			unit: ingredient.data.unit,
			amount: ingredient.data.amount
		})
	})
}
