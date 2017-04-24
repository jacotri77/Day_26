import React, {Component} from 'react'
import {getRecipe} from '../api/recipe'
import {getUsers} from '../api/recipe'
import store from '../store'

class Home extends Component {
    constructor() {
        super()
            this.state ={
           recipes:[
		    {
                "recipeType":"",
                "prepTime": '',
                "cookTime":'',
                "cookTemp":'',
                "deg": "",
                "servingAmount":'',
                "servingType":"",
                }
            ],
                users:'',
                steps:[],
                "public": true,
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
        return (
           <div> 
                <div id="myRecipes"> My Recipes </div>
                    {this.state.recipeName}
                <div id="publicRecipes"> Public Recipes </div>
                <div id="popularRecipes"> Popular Recipes </div>
                <div id="myFavRecipes"> My Favorite Recipes </div>
                <div id="myPantry"> My Pantry </div>
            </div>
        )
    }
}

export default Home