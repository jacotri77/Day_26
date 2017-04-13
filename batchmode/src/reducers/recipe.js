const initialState = {
	reicpe:[],
	step: [],
	ingredient:[],
	user:[]
}

export default function(state=initialState, action) {
	switch (action.type) {
		case 'POST_RECIPE': 
			return {...state, recipe: {...action.recipe}, step: {...action.step}, ingredient: {...action.ingredient}, user: {...action.user} }
		default:
			return state
	}
}