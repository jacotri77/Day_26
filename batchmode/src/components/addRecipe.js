import React from 'react'
import {postRecipe, postUsers, postSteps, postIngredients} from '../api/recipe'


export default React.createClass({
	getInitialState(){
		return{
		recipe: '',
		user: '',
		step:'',
		ingredient:''
	}
},

	handleSubmit(e){
		e.preventDefault()
		postRecipe(this.state.recipe)
		postUsers(this.state.user)
		postSteps(this.state.step)
		postIngredients(this.state.ingredient)
		this.setState({
			recipe:'',
			user:'',
			step:'',
			ingredient:''
		})


	},
	handleChange(e){
		this.setState({
		[e.target.name]: e.target.value
		})
	},


render(){
	return(
		<div>
			<form onSubmit={this.handleSubmit}>
				<input type="text" onChange={this.handleChange} placeholder="Recipe Name" name="recipe" value={this.state.recipe} />
				<input type="text" onChange={this.handleChange} placeholder="By" name="user" value={this.state.user} />
				<input type="text" onChange={this.handleChange} placeholder="Step" name="step" value={this.state.step} />
				<input type="text" onChange={this.handleChange} placeholder="Ingredient" name="ingredient" value={this.state.ingredient} />
				<button type="submit">Submit</button>
			</form>
		</div>

	)
}


})
