import React, {Component} from 'react';
import NewRecipe from '../components/newRecipe'
import RecipeDisplay from '../components/recipeDisplay'
import Header from '../components/header'
import LeftNav from '../components/leftNav'
import {Link, Route} from 'react-router-dom'



class App extends Component{
  render() {
    return (
        	<div>
            <Link to="/">Home Page</Link><br />
            <Link to="/addRecipe">Add Recipe</Link>
            <Header />
            <LeftNav />
            <Route path="/addRecipe" component={NewRecipe} />
           <Route path="/recipeDisplay/:recipeId" component={RecipeDisplay} />
          </div>
        )
      }
    }
export default App

// <Route exact={true} path="/" component={Home}/>


         
          
         