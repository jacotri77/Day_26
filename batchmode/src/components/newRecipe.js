import React from 'react'
import TextField from 'material-ui/TextField'
import Checkbox from 'material-ui/Checkbox'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'
import {postRecipe, postUsers, postSteps, postIngredients} from '../api/recipe'

const styles = {
  // block: {
  //   maxWidth: 200,
  // },
  checkbox: {
    marginBottom: 16,
    maxWidth: 200,
    display:'inline-block'

  },
  button: {
    margin: 12,
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
  selectedField:{
    height:70,
    width: 150,
    fontSize: 14,

  },
  textFieldSmall:{
    width: 150,
    height: 75,

  },
  textArea:{
    height: 200,
    width: 300,
     border:'1px solid black',
  }
  
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
    userId:'',
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
    personalNotes:'',
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
    postRecipe(this.state.recipe, this.state.userId, this.state.prepTime, this.state.cookTime, this.state.cookTemp, this.state.servingAmount, this.state.servingType,this.state.deg, this.state.photo, this.state.recipeType, this.state.personalNotes)
    postUsers(this.state.recipeId,this.state.user)
    this.setState({
      recipe:'',
      user:'',
      userId:this.state.userId,
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
      personalNotes:'',

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

// handlePhoto(e){
//   e.preventDefault()
//   newUnsplash()
//   this.setState({
//     photo: unsplash,

//   })
// },

render(){
return(
	<div id="formContainter">
    <form id="firstForm">
      <div id="firstBloc" >
      <button onClick={this.handlePhoto} type="submit" value={this.state.photo}  style={styles.button} className="plusButton">+ Add Photo</button>
		  <TextField onChange={this.Input} id="text-field-default" placeholder="Recipe Name" name="recipe" value={this.state.recipe} className="textFieldSmall"/>
		  <TextField onChange={this.Input} id="text-field-default" placeholder="By" name="user" value={this.state.user} className="textFieldSmall"/>
    
		
    		<Checkbox label="Make it Public" style={styles.checkbox} />
    		<Checkbox label="Keep it Private" style={styles.checkbox}/>
    	</div>
    	<SelectField onChange={this.handleChange} name="servingType"  value={this.state.servingType} floatingLabelText="Recipe Type"  floatingLabelStyle={{color: '#448AFF'}} autoWidth={false} style={styles.selectedField}>
        {items}
      </SelectField>
      <TextField onChange={this.Input} id="text-field-default" placeholder="Prep Time" name="prepTime" value={this.state.prepTime} className="textFieldSmall"/>
      <TextField onChange={this.Input} id="text-field-default" placeholder="Cook Time" name="cookTime" value={this.state.cookTime} className="textFieldSmall"/>
      <TextField onChange={this.Input} id="text-field-default" placeholder="Cook Temp" name="cookTemp" value={this.state.cookTemp} className="textFieldSmall" />
      <SelectField value={this.state.deg} name="deg" onChange={this.handleDegrees} floatingLabelText="Degrees"  floatingLabelStyle={{color: '#448AFF'}} style={styles.selectedField}>{degrees}
	   </SelectField>
      <div id="amountSpan">
        <span> This recipe makes: </span>
        <TextField onChange={this.Input} id="text-field-default" placeholder="Amount" name="servingAmount" value={this.state.servingAmount} className="textFieldSmall"/>
        <TextField onChange={this.Input} id="text-field-default" placeholder="Cookies, loaves, etc...." name="recipeType" value={this.state.recipeType} className="textFieldSmall"/>
      </div>
    </form>
      <div id="secondForm"><p>Step 1 ---------------------------</p>
      <form onSubmit={this.pushSteps}>
        {this.state.inputs.map(input => 
             <div key={input} id="dynamicInput">
                  <div>
                    <TextField onChange={this.Input} id="text-field-default" value={this.state.amount} name="amount" placeholder="amount" className="textFieldSmall" /> 
                    <TextField onChange={this.Input} id="text-field-default"value={this.state.unit} name="unit" placeholder="unit" className="textFieldSmall" />
                    <TextField onChange={this.Input} id="text-field-default" value={this.state.ingredients} name="ingredients" placeholder="ingredient"/>
                    <TextField onChange={this.Input} id="text-field-default" name="directions" value={this.state.directions} placeholder="Directions" multiLine={true} textareaStyle={styles.textArea}/>
                  </div>
              </div>)}
           <RaisedButton type="button" label="+" onClick={ () => this.appendInput() } style={styles.button}/>
         <RaisedButton type="submit" label="Add Another Step" style={styles.button} />
        </form>
      </div>
    <div id="thirdForm"><p> Personal Notes ----------------------------</p>
      <form>
        <TextField onChange={this.Input} id="text-field-default" name="personalNotes" value={this.state.personalNotes} placeholder="Personal Notes" multiLine={true} textareaStyle={styles.textArea}/>
      </form>
    </div>
    <RaisedButton  onSubmit={this.handleSubmit} type="submit" label="Save this Recipe!" id="fourthForm" style={styles.button} />
	</div>

 
)

}
})
