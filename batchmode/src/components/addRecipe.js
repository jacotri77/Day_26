import React from 'react'
import {postRecipe, postUsers, postSteps, postIngredients} from '../api/recipe'

export default React.createClass({
	getInitialState(){
		return{
		recipe: '',
		user: '',
		step:[],
		ingredients:[],
		directions: '',
		id:1,
		stepId:1,
		prepTime: "",
    cookTime: "",
    cookTemp: '',
    ForC: "",
    servingAmount: "",
    servingType: "",
    photo: "",
    inputs: ['inputs-0'],
    amount: '',
    unit:'',
    
  
}
},

	handleSubmit(e){
		e.preventDefault()
		postRecipe(this.state.recipe, this.state.userId, this.state.prepTime, this.state.cookTime, this.state.ForC, this.state.servingAmount, this.state.servingType)
		postUsers(this.state.user)
		this.setState({
			recipe:'',
			user:'',
			step:this.state.steps,
			stepId:1,
			id: this.state.id + 1,
		  prepTime: "",
      cookTime: "",
      cookTemp: '',
      ForC: "",
      servingAmount: "",
      servingType: "",
      photo: "",
      directions: '',
     	inputs: ['inputs-0'],
    	 amount: '',
    	 unit:'',
    	 ingredients:this.state.ingredients,


		})

	},
	handleChange(e){
		this.setState({
		[e.target.name]: e.target.value
		})
	},
	appendInput(e) {
    var newInput = `input-${this.state.inputs.length}`
    this.setState({ inputs: this.state.inputs.concat([newInput]) })

},
pushSteps(e){
	e.preventDefault()
	postIngredients(this.state.ingredients,this.state.id, this.state.amount, this.state.unit, this.state.stepId)
	postSteps(this.state.id, this.state.directions, this.state.stepId)
	this.setState({
			step:[],
			stepId:this.state.id + 1,
			ingredients:[],
			directions: '',
      amount: '',
      unit:'',
  
    })
},

render(){
	return(
		<div id="fullContainer">
		<div id="leftMenu">
			<ul>
				<li>My Recipes</li>
				<li>Public Recipes</li>
				<li>Popular Recipes</li>
				<li>My Favorite Recipes</li>
				<li>My Pantry</li>
			</ul>
		</div>
		<div id="formContainer">
		<div>
			<form onSubmit={this.handleSubmit}>
				<input type="text" id={this.state.id} onChange={this.handleChange} placeholder="Recipe Name" name="recipe" value={this.state.recipe} />
				<input type="text" id={this.state.id} onChange={this.handleChange} placeholder="By" name="user" value={this.state.user} />
				<input type="text" id={this.state.id} onChange={this.handleChange} placeholder="Prep Time" name="prepTime" value={this.state.prepTime} />
				<input type="text" id={this.state.id} onChange={this.handleChange} placeholder="Cook Time" name="cookTime" value={this.state.cookTime} />
				<input type="text" id={this.state.id} onChange={this.handleChange} placeholder="Cook Temp" name="cookTemp" value={this.state.cookTemp} />
				<input type="text" id={this.state.id} onChange={this.handleChange} placeholder="Degrees F or C" name="ForC" value={this.state.ForC} />
				<input type="text" id={this.state.id} onChange={this.handleChange} placeholder="Serving Amount" name="servingAmount" value={this.state.servingAmount} />
				<input type="text" id={this.state.id} onChange={this.handleChange} placeholder="Serving Type" name="servingType" value={this.state.servingType} />
				<button type="submit">Save this Recipe!</button>
			</form>
			</div>
			<br/>
			<br/>
			<div>
     	<form onSubmit={this.pushSteps}>
		     {this.state.inputs.map(input => 
		         <div key={input} id="dynamicInput">
		             	<div>
		             	<input type="text" value={this.state.amount} name="amount"onChange={this.handleChange} placeholder="amount"  /> 
		             	<input  type="text" value={this.state.unit} name="unit"onChange={this.handleChange} placeholder="unit" />
		             	<input  type="text" value={this.state.ingredients} name="ingredients" onChange={this.handleChange} placeholder="ingredient"/>
		             	<input type="text" id={this.state.id} onChange={this.handleChange} placeholder="Step" name="step" value={this.state.step} />
		             	</div>
		             <input type="textarea" name="directions" value={this.state.directions} onChange={this.handleChange} placeholder="Directions" id={this.state.id} />
		         </div>)}
		     	 <button type="button" onClick={ () => this.appendInput() }>+</button>
		     <button type="submit">Add Another Step</button>
     	</form>
     </div>
    </div>
    </div>

    
	)
}
})
