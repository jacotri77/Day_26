import React, {Component} from 'react'
import {postRecipe} from '../api/recipe'
import StepForm from './stepForm'

class NewRecipe extends Component {
  constructor(props){
    super()
    this.state = {
        "recipeName":"",
        "user":"",
        "steps":[
            {
              "directions":"",
              "amount":'',
              "unit":"",
              "ingredients":""
             }
         ]
       }
    }
handleChange = (e) => {
  this.setState({
    [e.target.name]:e.target.value,
  })
}

updateStep = (index,directions, amount, unit) => {
  this.setState({
    steps: this.state.steps.map((step, i) => {
        if (i === index){
            return {directions, amount, unit}
        } else {
            return step
           }
       })
    })
} 
addStep = (e) =>{
  this.setState({
    steps: [...this.state.steps, {"directions": "", "amount":"", "unit":"", "ingredients":""}]
  })
}

handleSubmit = (e) => {
    postRecipe(this.state)
    this.setState({
        "recipes":[{
           "recipeName": "",
        }
        ],
        "user":"",
        "steps": [
          {
            "directions":"",
            "amount":'',
            "unit":"",
            "ingredients":""
          }
        ]
    })
  }


render() {
  return(
	<div id="formContainer" >
    <form id="firstForm" >
        <p>Basic Info -------------------------------</p>
        <div id="buttonPlus">
          <button onClick={this.handlePhoto} type="button" className="plusButton">+ Add Photo</button>
		      <input onChange={this.handleChange} type="text" placeholder="Recipe Name" name="recipeName" value={this.state.recipeName} className="firstBloc"/>
		      <input onChange={this.handleChange} type="text" className="firstBloc" placeholder="By" name="user" value={this.state.user} />
    		  <input type="checkbox" id="makeItPub" name="Make it Public" value={this.state.public}/>
            <label htmlFor="makeItPub">Make it Public</label>
    		  <input type="checkbox" label="Keep it Private" id="keepItPriv" value={this.state.public} />
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
          <input type="text" onChange={this.Input} id="text-field-default" placeholder="Cook Time" name="cookTime" value={this.state.cookTime} className="textSmall"/>
          <input type="text" onChange={this.Input} id="text-field-default" placeholder="Cook Temp" name="cookTemp" value={this.state.cookTemp} className="textSmall"/>
        <select name="deg" onChange={this.handleChange} value={this.state.deg} id="degreesSelectType">
          <option value='Degrees' name="degrees" >Degrees</option>
          <option value='F' name="degrees" >F</option>
          <option value="C" name="degrees" >C</option>
	      </select>
      <div id="amountSpan">
        <span> This recipe makes: </span>
        <input type="text" onChange={this.Input} id="text-field-default" placeholder="Amount" name="servingAmount" value={this.state.servingAmount} className="textSmall"/>
        <input type="text" onChange={this.Input} id="text-field-default" placeholder="Cookies, loaves, etc...." name="recipeType" value={this.state.recipeType} className="textLoaves"/>
      </div>
    </form>
      <div id="secondForm"><p>Step 1 --------------------------------</p>
      {this.state.steps.map((step, i) => (
        <StepForm key={this.state.recipeId +1} step={step} index={i} updateStep={this.updateStep}/>
      ))}
         <button onClick={this.addStep} className="bigButtons">Add Another Step</button>
      </div>
    <div id="thirdForm"><p> Personal Notes ----------------------------</p>
      <form>
        <input type="text" onChange={this.handleChange} className="bigTextArea" name="personalNotes" value={this.state.personalNotes} placeholder="Personal Notes" />
      </form>
        <button  type="submit" onClick={this.handleSubmit} className="bigButtons" id="saveRecipe">Save this Recipe!</button>
    </div>
  </div>
    
    )
  }
}

export default NewRecipe

//  <form onSubmit={this.pushSteps}>

// {this.state.inputs.map(input => 
        //    <div key={input} id="dynamicInput">
        //       <div>
        //         <input type="text"onChange={this.Input} className="smallText" value={this.state.amount} name="amount" placeholder="amount"/> 
        //         <input type="text" onChange={this.Input} value={this.state.unit} name="unit" placeholder="unit" className="smallText" />
        //         <input type="text" onChange={this.Input} className="textLoaves" value={this.state.ingredients} name="ingredients" placeholder="ingredient"/>
        //         <button type="button"onClick={ () => this.appendInput() } className="smallText">+</button>
        //         <input type="text" onChange={this.Input} className="bigTextArea" name="directions" value={this.state.directions} placeholder="Directions"/>
        //       </div>
        //     </div>)}


// appendInput = (e) => {
//   var newInput = `input-${this.state.inputs.length}`
//   this.setState({ 
//     inputs: this.state.inputs.concat([newInput]),
//   })
// }