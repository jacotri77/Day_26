import React, {Component} from 'react'

class Header extends Component{
 render(){
   return(
  <div id="headerMenu">
    <p>Hello</p>
    <ul>
        <li><i className="fa fa-plus fa-2x" aria-hidden="true"></i></li>
        <li><i className="fa fa-cog fa-2x" aria-hidden="true"></i></li>
        <li><i className="fa fa-user fa-2x" aria-hidden="true"></i></li>  
      </ul>
  
  </div>
)
}
}
export default Header
