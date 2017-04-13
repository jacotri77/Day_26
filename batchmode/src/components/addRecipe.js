import React from 'react'
import {postRecipe, postUsers, postSteps, postIngredients, patchDirections} from '../api/recipe'
import Jquery from 'jquery'


export default React.createClass({
	getInitialState(){
		return{
		recipe: '',
		user: '',
		step:'',
		ingredient:'',
		directions: '',
		id:1,
		prepTime: "",
    cookTime: "",
    cookTemp: '',
    ForC: "",
    servingAmount: "",
    servingType: "",
    photo: ""
}
},

	handleSubmit(e){
		e.preventDefault()
		postRecipe(this.state.recipe, this.state.id, this.state.prepTime, this.state.cookTime, this.state.prepTime, this.state.ForC, this.state.servingAmount, this.state.servingType)
		postUsers(this.state.user)
		postSteps(this.state.step, this.state.id, this.state.directions)
		postIngredients(this.state.ingredient, this.state.id)
		patchDirections(this.state.directions, this.state.step)
		this.setState({
			recipe:'',
			user:'',
			step:'',
			ingredient:'',
			id: this.state.id + 1,
			prepTime: "",
      cookTime: "",
      cookTemp: '',
      ForC: "",
      servingAmount: "",
      servingType: "",
      photo: "",
      directions: ''
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
				<input type="text" id={this.state.id} onChange={this.handleChange} placeholder="Recipe Name" name="recipe" value={this.state.recipe} />
				<input type="text" id={this.state.id} onChange={this.handleChange} placeholder="By" name="user" value={this.state.user} />
				<input type="text" id={this.state.id} onChange={this.handleChange} placeholder="Step" name="step" value={this.state.step} />
				<input type="text" id={this.state.id} onChange={this.handleChange} placeholder="Ingredient" name="ingredient" value={this.state.ingredient} />
				<input type="text" id={this.state.id} onChange={this.handleChange} placeholder="Prep Time" name="prepTime" value={this.state.prepTime} />
				<input type="text" id={this.state.id} onChange={this.handleChange} placeholder="Cook Time" name="cookTime" value={this.state.cookTime} />
				<input type="text" id={this.state.id} onChange={this.handleChange} placeholder="Cook Temp" name="cookTemp" value={this.state.cookTemp} />
				<input type="text" id={this.state.id} onChange={this.handleChange} placeholder="Degrees F or C" name="ForC" value={this.state.ForC} />
				<input type="text" id={this.state.id} onChange={this.handleChange} placeholder="Serving Amount" name="servingAmount" value={this.state.servingAmount} />
				<input type="text" id={this.state.id} onChange={this.handleChange} placeholder="Serving Type" name="servingType" value={this.state.servingType} />
				<input type="textarea" name="directions" value={this.state.directions} onChange={this.handleChange} placeholder="Directions" id={this.state.id} />
				<button type="submit">Submit</button>
			</form>
		</div>

	)
}


})
