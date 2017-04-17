import React from 'react'
import TextField from 'material-ui/TextField'
import Checkbox from 'material-ui/Checkbox'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import {postRecipe, postUsers, postSteps, postIngredients} from '../api/recipe'

const styles = {
  block: {
    maxWidth: 200,
  },
  checkbox: {
    marginBottom: 16,
  },
}
const items = [
  <MenuItem key={1} value="Breaky" name="servingType" primaryText="Breaky"  />,
  <MenuItem key={2} value="Snach" name="servingType" primaryText="Snack" />,
  <MenuItem key={3} value="After Da Club" name="servingType" primaryText="After Da Club" />,
  <MenuItem key={4} value="Munchies" name="servingType" primaryText="Munchies" />,

];

const degrees = [
	<MenuItem value="F" key={5} name="degrees" primaryText="F" />,
	<MenuItem value="C" key={6} name="degrees" primaryText="C" />,
];


export default React.createClass({
  getInitialState(){
    return{
    recipe: '',
    user: '',
    step:[],
    ingredients:[],
    directions: '',
    id:1,
    prepTime: "",
    cookTime: "",
    cookTemp: '',
    servingAmount: "",
    servingType: "",
    photo: "",
    inputs: ['inputs-0'],
    amount: '',
    unit:'',
    deg:'',
    recipeType:'',
}
},

handleChange(event, index, servingType){
  this.setState({
    servingType: servingType
  })
},

handleDegrees(event, index, deg){
 this.setState({
    deg:deg
  })
},

handleSubmit(e){
    e.preventDefault()
    postRecipe(this.state.recipe, this.state.userId, this.state.prepTime, this.state.cookTime, this.state.cookTemp, this.state.servingAmount, this.state.servingType,this.state.deg, this.state.photo, this.state.recipeType)
    postUsers(this.state.user)
    this.setState({
      recipe:'',
      user:'',
      step:this.state.steps,
      ingredients:this.state.ingredients,
      id: this.state.id + 1,
      prepTime: "",
      cookTime: "",
      cookTemp: '',
      servingAmount: "",
      servingType: this.state.servingType,
      photo: "",
      deg:this.state.deg,
      recipeType:'',

    })

  },
Input(e){
  this.setState({
  [e.target.name]: e.target.value
  
  })
},
appendInput() {
  var newInput = `input-${this.state.inputs.length}`
  this.setState({ 
    inputs: this.state.inputs.concat([newInput]),
    amount:'',
    directions:'',
    unit:'',
    ingredients:[],

  })

},
pushSteps(e){
  e.preventDefault()
  postIngredients(this.state.id,this.state.ingredients, this.state.amount, this.state.unit)
  postSteps(this.state.id, this.state.directions)
  this.setState({
      step:[],
      ingredients:[],
      directions: '',
      amount: '',
      unit:'',
  
    })
},

render(){
return(
	<div id="formContainter">
    <form onSubmit={this.handleSubmit}>
		<div>
			<button type="button" id="picBox">+ Add Photo</button>
		</div>
		<TextField onChange={this.Input} id="text-field-default" placeholder="Recipe Name" name="recipe" value={this.state.recipe}/>
		<TextField onChange={this.Input} id="text-field-default" placeholder="By" name="user" value={this.state.user}/>
		<div style={styles.block}>
    		<Checkbox label="Make it Public" style={styles.checkbox} />
    		<Checkbox label="Keep it Private" style={styles.checkbox}/>
    	</div>
    	 <SelectField onChange={this.handleChange} name="servingType"  value={this.state.servingType} floatingLabelText="Recipe Type"  floatingLabelStyle={{color: 'red'}}>
        {items}
        </SelectField>
      	<TextField onChange={this.Input} id="text-field-default" placeholder="Prep Time" name="prepTime" value={this.state.prepTime}/>
      	<TextField onChange={this.Input} id="text-field-default" placeholder="Cook Time" name="cookTime" value={this.state.cookTime}/>
      	<TextField onChange={this.Input} id="text-field-default" placeholder="Cook Temp" name="cookTemp" value={this.state.cookTemp} />
      	<SelectField value={this.state.deg} name="deg" onChange={this.handleDegrees} floatingLabelText="Degrees"  floatingLabelStyle={{color: 'red'}}>
      		{degrees}
	    </SelectField>
      <div id="amountSpan">
        <span> This recipe makes: </span>
        <TextField onChange={this.Input} id="text-field-default" placeholder="Amount" name="servingAmount" value={this.state.servingAmount}/>
        <TextField onChange={this.Input} id="text-field-default" placeholder="Cookies, loaves, etc...." name="recipeType" value={this.state.recipeType}/>
      </div>
      <form onSubmit={this.pushSteps}>
        {this.state.inputs.map(input => 
             <div key={input} id="dynamicInput">
                  <div>
                    <TextField onChange={this.Input} id="text-field-default" value={this.state.amount} name="amount" placeholder="amount"  /> 
                    <TextField onChange={this.Input} id="text-field-default"value={this.state.unit} name="unit" placeholder="unit" />
                    <TextField onChange={this.Input} id="text-field-default" value={this.state.ingredients} name="ingredients" placeholder="ingredient"/>
                    <TextField onChange={this.Input} id="text-field-default" name="directions" value={this.state.directions} placeholder="Directions" multiLine={true}/>
                  </div>
              </div>)}
           <button type="button" onClick={ () => this.appendInput() }>+</button>
         <button type="submit">Add Another Step</button>
      </form>
      <button type="submit">Save this Recipe!</button>
    </form>
	</div>

 
)

}
})
