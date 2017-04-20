import React from 'react'
import {getRecipe} from '../api/recipe'
import store from '../store'


class RecipeDisplay extends React.Component{
  constructor(props) {
    super(props)
    this.state ={
      recipe:[]
    }
  }
   componentWillMount(){
     this.unsubscribe = store.subscribe(()=>{
       const appState = store.getState()
       console.log(appState)
     this.setState({
       recipe: appState.recipe

     })
     })
     getRecipe()
   }

   componentWillUnMount(){
     this.unsubscribe()
   }
render(){
return(
  <div>
    <div>
    {this.state.recipe.map(action=>(
       <h1 key={action.id}>{action.by}</h1>
    
    ))}
      <h1></h1>
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