const initialState = {
	recipe:{},
	recipeName:'',
	step: [],
	ingredients:'',
	user:'',
	userId:'',
	id:'',
	stepId:'',
	prepTime: '',
    cookTime: '',
    cookTemp: '',
    deg: "",
    servingAmount: "",
    servingType: "",
    directions:'',
    photo: '',
    amount:'',
    unit:'',
    inputs:['inputs-0'],
    recipeType: '',
    personalNotes:'',
}


export default function(state=initialState, action) {

	console.log('from reducer ', action.userId)
	switch (action.type) {
		case 'POST_RECIPE': 
			return {...state,  recipe: {...action.recipe}, userId: {...action.userId}, id:{...action.id},prepTime: {...action.prepTime}, cookTemp:{...action.cookTemp}, cookTime: {...action.cookTime}, deg: {...action.deg}, servingAmount: {...action.servingAmount}, servingType: {...action.servingType}, photo: {...action.photo}, recipeType: {...action.recipeType}, personalNotes: {...action.personalNotes}}
		case 'POST_INGREDIENTS':
			return {...state, ingredients: {...action.ingredients},amount:{...action.amount}, unit: {...action.unit}}
		case 'POST_USERS':
			return {...state, user: {...action.user}, recipeId: {...action.recipeId}}
		case 'POST_STEPS':
			return {...state,  step: {...action.step}}
		case 'GET_RECIPE':
			return {...state, recipe: {...action.recipe}, userId:{...action.userId}}
		default:
			return state
	}
}