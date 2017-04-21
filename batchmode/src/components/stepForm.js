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
                <input type="text" onChange={this.Input} className="smallText" value={this.state.amount} name="amount" placeholder="amount"/> 
                <input type="text" onChange={this.Input} value={this.state.unit} name="unit" placeholder="unit" className="smallText" />
                <input type="text" onChange={this.Input} className="textLoaves" value={this.state.ingredients} name="ingredients" placeholder="ingredient"/>
                <input type="text" onChange={this.Input} className="bigTextArea" name="directions" value={this.state.directions} placeholder="Directions"/>
             </div>
        )
    }
}

export default StepForm
