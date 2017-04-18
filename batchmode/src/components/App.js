import React from 'react';
import NewRecipe from '../components/newRecipe'
import RecipeDisplay from '../components/recipeDisplay'
import Header from '../components/header'
import LeftNav from '../components/leftNav'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'

export default React.createClass({

  render() {
    injectTapEventPlugin()
    return (
    	<MuiThemeProvider>
        <Router>
        	<div>
          <Header />
          <LeftNav />
          <NewRecipe />
          </div>
        </Router>
      </MuiThemeProvider>
    )
  }

})


          // <Route path="/photo/:photosId" component={Photo} />
          // <Route exact={true} path="/" component={NewRecipe}/>
          // <Route path="/recipeDisplay/:recipeId" component={RecipeDisplay} />