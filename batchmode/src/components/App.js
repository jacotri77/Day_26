import React from 'react';
import NewRecipe from '../components/newRecipe'
import RecipeDisplay from '../components/recipeDisplay'
import Header from '../components/header'
import LeftNav from '../components/leftNav'
import {Link, Route} from 'react-router-dom'



class App extends Component{
  handleClick = (e) => {
    e.preventDefault()
    this.props.history.push('/addRecipe')
  }
  render() {
    return (
        	<div>
            <Link to="/">Home Page</Link><br />
            <button onClick={this.handleClick}>Add Recipe</button>
            <Header />
            <LeftNav />
            <Route exact={true} path="/" component={Home}/>
            <Route path="/addRecipe" component={newRecipe} />
           <Route path="/recipeDisplay/:recipeId" component={RecipeDisplay} />
          </div>
    )
  }
})
export default App


         
          
         