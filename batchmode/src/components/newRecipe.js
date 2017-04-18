import React from 'react'
import {postRecipe, postUsers, postSteps, postIngredients} from '../api/recipe'

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

handleChange(e){
  this.setState({
    servingType: e.target.value,
  })
},

handleDegrees(e){
 this.setState({
    deg:this.state.deg
  })
},

handleSubmit(e){
    e.preventDefault()
    postRecipe(this.state.recipe, this.state.userId, this.state.prepTime, this.state.cookTime, this.state.cookTemp, this.state.servingAmount, this.state.servingType,this.state.deg, this.state.photo, this.state.recipeType, this.state.personalNotes)
    postUsers(this.state.user)
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
  postIngredients(this.state.ingredients,this.state.Id, this.state.amount, this.state.unit)
  postSteps(this.state.id, this.state.directions)
  this.setState({
      step:[],
      ingredients:'',
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
    <form id="firstForm" >
      
        <p>Basic Info -------------------------------</p>
        <div id="buttonPlus">
          <button onClick={this.handlePhoto} type="button" className="plusButton">+ Add Photo</button>
		      <input onChange={this.Input} type="text" placeholder="Recipe Name" name="recipe" value={this.state.recipe} className="firstBloc"/>
		      <input onChange={this.Input} type="text" className="firstBloc" placeholder="By" name="user" value={this.state.user} />
    		  <input type="checkbox" id="makeItPub" name="Make it Public" />
            <label htmlFor="makeItPub">Make it Public</label>
    		  <input type="checkbox" label="Keep it Private" id="keepItPriv" />
            <label htmlFor="keepItPriv">Keep it Private</label>
        </div>
  

    	<select onChange={this.handleChange} value={this.state.servingType} name="servingType" id="recipeTypeSelect">
        <option value="Recipe Type" name="servingType" >Recipe Type</option>
        <option value="Breaky" name="servingType" >Breaky</option>
        <option value="Snack"name="servingType">Snack</option>
        <option value="After Da Club" name="servingType">After Da Club</option>
        <option value="Munchies" name="servingType">Munchies</option>
      </select>
      <input type="text" onChange={this.Input} id="text-field-default" placeholder="Prep Time" name="prepTime" value={this.state.prepTime} className="textSmall"/>
      <input type="text"onChange={this.Input} id="text-field-default" placeholder="Cook Time" name="cookTime" value={this.state.cookTime} className="textSmall"/>
      <input type="text" onChange={this.Input} id="text-field-default" placeholder="Cook Temp" name="cookTemp" value={this.state.cookTemp} className="textSmall"/>
      <select name="deg" onChange={this.handleDegrees} id="degreesSelectType">
        <option value={this.state.deg} name="degrees" >F or C</option>
        <option value={this.state.deg} name="degrees" >F</option>
        <option value={this.state.deg} name="degrees" >C</option>
	     </select>
      <div id="amountSpan">
        <span> This recipe makes: </span>
        <input type="text" onChange={this.Input} id="text-field-default" placeholder="Amount" name="servingAmount" value={this.state.servingAmount} className="textSmall"/>
        <input type="text" onChange={this.Input} id="text-field-default" placeholder="Cookies, loaves, etc...." name="recipeType" value={this.state.recipeType} className="textLoaves"/>
      </div>
       <button onSubmit={this.handleSubmit} type="submit" className="bigButtons" id="saveRecipe">Save this Recipe!</button>
    </form>
      <div id="secondForm"><p>Step 1 --------------------------------</p>
      <form onSubmit={this.pushSteps}>
        {this.state.inputs.map(input => 
           <div key={input} id="dynamicInput">
              <div>
                <input type="text"onChange={this.Input} className="smallText" value={this.state.amount} name="amount" placeholder="amount"/> 
                <input type="text" onChange={this.Input} value={this.state.unit} name="unit" placeholder="unit" className="smallText" />
                <input type="text" onChange={this.Input} className="textLoaves" value={this.state.ingredients} name="ingredients" placeholder="ingredient"/>
                <button type="button"onClick={ () => this.appendInput() } className="smallText">+</button>
                <input type="text" onChange={this.Input} className="bigTextArea" name="directions" value={this.state.directions} placeholder="Directions"/>
              </div>
            </div>)}
         <button type="submit" className="bigButtons">Add Another Step</button>
        </form>
      </div>
    <div id="thirdForm"><p> Personal Notes ----------------------------</p>
      <form>
        <input type="text" onChange={this.Input} className="bigTextArea" name="personalNotes" value={this.state.personalNotes} placeholder="Personal Notes" />
      </form>
    </div>
  </div>
    

 
)

}
})
