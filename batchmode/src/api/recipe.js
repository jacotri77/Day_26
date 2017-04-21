import axios from 'axios'
import store from '../store'

export function postRecipe(recipeName, userId, prepTime, cookTime, cookTemp, servingAmount, servingType, deg, photo, recipeType, personalNotes ) {
	axios.post('http://localhost:3001/recipes',{recipeName, userId, prepTime, cookTime, cookTemp, servingAmount, servingType,deg, photo, recipeType,personalNotes }).then(recipe=>{
		console.log('from postrecipe', recipe.userId)
		store.dispatch({
			type: 'POST_RECIPE',
			recipe: recipe.data,
			userId: recipe.data.userId,
			prepTime: recipe.data.prepTime,
		    cookTime: recipe.data.cookTime,
		    cookTemp: recipe.data.cookTemp,
		    deg: recipe.data.deg,
		    servingAmount: recipe.data.servingAmount,
		    servingType: recipe.data.servingType,
		    photo: recipe.data.photo,
		    recipeType: recipe.data.recipeType,
		    personalNotes: recipe.data.personalNotes,
			recipeName: recipe.data.recipeName,

		})
})
}
export function postUsers(user, recipeId) {
	axios.post('http://localhost:3001/users',{user, recipeId}).then(user=>{
		store.dispatch({
			type: 'POST_USERS',
			user: user.data,
			recipeId: user.data.recipeId
			
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
export function postIngredients(ingredients,stepId, amount, unit) {
	axios.post('http://localhost:3001/ingredients',{ingredients, stepId, amount, unit}).then(ingredient=>{
		
		store.dispatch({
			type: 'POST_INGREDIENTS',
			ingredient: ingredient.data.ingredients,
			stepId: ingredient.data.stepId,
			unit: ingredient.data.unit,
			amount: ingredient.data.amount
		})
	})
}

export function getRecipe(id, userId){
	axios.get('http://localhost:3001/recipes/' + id).then(recipe=>{
		console.log('from api',userId)
		store.dispatch({
			type:'GET_RECIPE',
			recipe:recipe.data,
			userId:recipe.data.userId

		})
	})
}

export function getUsers(id) {
	axios.get('http://localhost:3001/users' + id).then(user=>{
		store.dispatch({
			type: 'POST_USERS',
			user: user.data,
		})
	})
}
// export function getPhoto(photo) {
// 	axios.get('https://api.unsplash.com/search/photos?query=dessert',{photo}).then(photo=>{
// 		console.log(photo)
// 		store.dispatch({
// 			type: 'GET_PHOTO',
// 			photo: photo.data,
// 			applicationId: "{4f6e548d0b56144befd0b2196ef0a7a21881fbcdaff823ac67ba060bb5e04d9b}",
//   			secret: "{ba7d1e96898e3bac476772914fca9e88c427d3d8e484a476ddec437feac4637e}",
//   			callbackUrl: "{urn:ietf:wg:oauth:2.0:oob}",
			
// 		})
// 	})
// }

