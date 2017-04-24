import React, {Component} from 'react'

class StepForm extends Component{
   constructor(props){
       super(props)
       this.state = {
           directions: this.props.directions,
           amount: this.props.amount,
           unit: this.props.unit,
           ingredients: this.props.ingredients
       }
   }
   
    Input = (e) => {
        this.setState({
        [e.target.name]: e.target.value
     })
     this.props.updateStep(this.props.index, this.state.directions, this.state.amount, this.state.unit, this.state.ingredients)
}
    render(){
        return(
            <div>
                <input type="text" onChange={this.Input} className="smallText" value={this.state.amount} name="amount" placeholder="Amount"/> 
                <input type="text" onChange={this.Input} className="smallText" value={this.state.unit} name="unit" placeholder="Unit"  />
                <input type="text" onChange={this.Input} className="textLoaves" value={this.state.ingredients} name="ingredients" placeholder="Ingredient"/>
                <input type="text" onChange={this.Input} className="bigTextArea" value={this.state.directions} name="directions"  placeholder="Directions"/>
             </div>
        )
    }
}

export default StepForm
