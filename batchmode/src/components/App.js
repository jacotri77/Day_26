import React from 'react';
import NewRecipe from '../components/newRecipe'
import RecipeDisplay from '../components/recipeDisplay'
import Header from '../components/header'
import LeftNav from '../components/leftNav'
import {BrowserRouter as Router, Route} from 'react-router-dom'



export default React.createClass({

  render() {
   
    return (
    
        <Router>
        	<div>
          <Header />
          <LeftNav />
          <NewRecipe />
          <Route path="/recipeDisplay/:recipeId" component={RecipeDisplay} />
          </div>
        </Router>
  
    )
  }

})


          // <Route path="/photo/:photosId" component={Photo} />
          // <Route exact={true} path="/" component={NewRecipe}/>
          // <Route path="/recipeDisplay/:recipeId" component={RecipeDisplay} />