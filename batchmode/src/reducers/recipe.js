const initialState = {
	recipes:[],
	steps:[],
	"public": true,
    "recipeType":"",
    "prepTime": '',
    "cookTime":'',
    "cookTemp":'',
    "deg": "",
    "servingAmount":'',
    "servingType":"",
}


export default function(state=initialState, action) {

	console.log('from reducer ', action.userId)
	switch (action.type) {
		case 'POST_RECIPE': 
			return {...state, recipes:[...state.recipes, action.recipes]} 
		case 'POST_INGREDIENTS':
			return {...state, ingredients: [...state.ingredients, action.ingredients],amount:[...state.amount, action.amount], unit: [...state.unit, action.unit]}
		case 'POST_USERS':
			return {...state, user: [...state.user, action.user], recipeId: [...state.recipeId, action.recipeId]}
		case 'POST_STEPS':
			return {...state,  steps: [...state.steps, action.steps]}
		case 'GET_RECIPE':
			return {...state, recipe: [...state.recipe, action.recipe], userId:[...state.userId, action.userId]}
		default:
			return state
	}
}



// id:{...action.id},prepTime: {...action.prepTime}, cookTemp:{...action.cookTemp}, cookTime: {...action.cookTime}, deg: {...action.deg}, servingAmount: {...action.servingAmount}, servingType: {...action.servingType}, photo: {...action.photo}, recipeType: {...action.recipeType}, personalNotes: {...action.personalNotes}}