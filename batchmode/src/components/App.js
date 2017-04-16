import React from 'react';
import AddRecipe from '../components/addRecipe'
import Header from '../components/header'
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
          <AddRecipe />
          </div>
        </Router>
      </MuiThemeProvider>
    )
  }

})
