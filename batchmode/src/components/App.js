import React from 'react';
import NewRecipe from '../components/newRecipe'
import Header from '../components/header'
import LeftNav from '../components/leftNav'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {BrowserRouter as Router} from 'react-router-dom'
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
