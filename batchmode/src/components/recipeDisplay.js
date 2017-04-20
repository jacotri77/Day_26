import React from 'react'
import {getRecipe} from '../api/recipe'
import store from '../store'


class RecipeDisplay extends React.Component{
  constructor() {
    super()
    this.state ={
      recipe:[],
      recipeName:''
      
    }
  }
   componentWillMount(){
     this.unsubscribe = store.subscribe(()=>{
       const appState = store.getState()

       console.log('from recDis Mount', appState)

     this.setState({
       recipe: appState.recipe,
       recipeName: appState.recipe.recipeName
         
     })
     })
     getRecipe()
     console.log('from getRecipe',getRecipe)
   }

   componentWillUnMount(){
     this.unsubscribe()
   }
render(){
   console.log('from h1',this.state.recipe.recipeName)
return(
  <div>
    <div>
   
      <h1>{this.state.recipe.recipeName}</h1>
     
      <h6> this is who it is by</h6>
    </div>
    <div id="bigPicture">
      <img src="#" alt="bigPic"/>
    </div>
      <div> Recipe Type</div>
      <div> Prep time </div>
      <div> Cook Time </div>
      <div> Cook Temp </div>
      <div> Ingredient List</div>
        <ul>
          <li> ingredient 1</li>
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