const initialState = {
	reicpe:[],
	step: [],
	ingredients:[],
	user:[],
	id:'',
	prepTime: '',
    cookTime: '',
    cookTemp: '',
    ForC: "",
    servingAmount: "",
    servingType: "",
    directions:'',
    photo: '',
    amount:'',
    unit:'',
    inputs:['inputs-0']
}


export default function(state=initialState, action) {
	switch (action.type) {
		case 'POST_RECIPE': 
			return {...state,  recipe: {...action.recipe}, id:{...action.id},prepTime: {...action.prepTime}, cookTemp:{...action.cookTemp}, cookTime: {...action.cookTime}, ForC: {...action.ForC}, servingAmount: {...action.servingAmount}, servingType: {...action.servingType}, photo: {...action.photo} }
		case 'POST_INGREDIENTS':
			return {state, ingredients: {...action.ingredients},amount:{...action.amount}, unit: {...action.unit}}
		case 'POST_USERS':
			return {state, recipe: {...action.recipe}, user: {...action.user}}
		case 'POST_STEPS':
			return {state,  step: {...action.step}}
		case 'PATCH_DIRECTIONS':
			return {state, directions: {...action.directions}}
		default:
			return state
	}
}