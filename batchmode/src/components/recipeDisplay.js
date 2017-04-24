import React from 'react'
import {getRecipe} from '../api/recipe'
import {getUsers} from '../api/recipe'
import store from '../store'


class RecipeDisplay extends React.Component{
 
  constructor() {
    super()
    this.state ={
      recipe:{
        recipeName:'',
        user:'',
        cookTemp: '',
        prepTime:'',
        cookTime:''

      },
      
    }
    console.log('from class', this.state.recipe)
  }
   componentWillMount(){
     this.unsubscribe = store.subscribe(()=>{
       const appState = store.getState()
       console.log('from recDis Mount', appState)
        this.setState({
          recipe: appState.recipe,
          user: appState.user       
      })
    })
      getRecipe(this.props.match.params.recipeId)
      getUsers(this.props.match.params.user)
  }
  componentWillUnMount(){
    this.unsubscribe()
  }
render(){
   console.log('from h1',this.state.recipe)
return(
  <div>
    <div>
        <div key={this.state.recipe.id+1}>
           <h1>{this.state.recipe.recipeName}</h1>
            <h6> {this.state.recipe.user}</h6>
         </div>
    </div>
    <div id="bigPicture">
      <img src="#" alt="bigPic"/>
    </div>
      <div> {this.state.recipe.recipeType}</div>
      <div> Prep time{this.state.recipe.prepTime} </div>
      <div> Cook Time {this.state.recipe.cookTime}</div>
      <div> Cook Temp {this.state.recipe.cookTemp}</div>
      <div> Ingredient List</div>
        <ul>
          <li> ingredient 1{this.state.recipe.ingredient}</li>
          <li> ingredient 2</li>
        </ul>
    </div>
    )
   
}
 
}
export default RecipeDisplay


 // {this.state.recipe.map(action=>(
    //    <h1 key={action.id+ 1}>{action.by}</h1>
    
    // ))}