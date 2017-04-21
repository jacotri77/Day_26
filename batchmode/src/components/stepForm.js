import React, {Component} from 'react'

class StepForm extends Component{
   constructor(props){
       super(props)
       this.state = {
           directions: "",
       }
   }
   
    Input = (e) => {
        this.setState({
        [e.target.name]: e.target.value
     })
}
    render(){
        return(
            <div>
                <input type="text" onChange={this.Input} className="smallText" value={this.state.amount} name="amount" placeholder="amount"/> 
                <input type="text" onChange={this.Input} value={this.state.unit} name="unit" placeholder="unit" className="smallText" />
                <input type="text" onChange={this.Input} className="textLoaves" value={this.state.ingredients} name="ingredients" placeholder="ingredient"/>
                <button type="button" className="smallText">+</button>
                <input type="text" onChange={this.Input} className="bigTextArea" name="directions" value={this.state.directions} placeholder="Directions"/>
             </div>
        )
    }
}

export default StepForm