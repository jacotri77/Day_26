import React, {Component} from 'react'
import {getRecipe} from '../api/recipe'

class Home extends Component {
    
    render(){
        return (
           <div> 
                <div id="myRecipes"> My Recipes </div>
                <div id="publicRecipes"> Public Recipes </div>
                <div id="popularRecipes"> Popular Recipes </div>
                <div id="myFavRecipes"> My Favorite Recipes </div>
                <div id="myPantry"> My Pantry </div>
            </div>
        )
    }
}

export default Home