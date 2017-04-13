const initialState = {
	reicpe:[],
	step: [],
	ingredient:[],
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
}


export default function(state=initialState, action) {
	switch (action.type) {
		case 'POST_RECIPE': 
			return {...state, recipe: {...action.recipe}, directions: {...action.directions}, step: {...action.step}, ingredient: {...action.ingredient}, user: {...action.user}, id:{...action.id},prepTime: {...action.prepTime}, cookTemp:{...action.cookTemp}, cookTime: {...action.cookTime}, ForC: {...action.ForC}, servingAmount: {...action.servingAmount}, servingType: {...action.servingType}, photo: {...action.photo} }
		default:
			return state
	}
}