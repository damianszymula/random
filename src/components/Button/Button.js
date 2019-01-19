import React, { Component } from 'react';



class Button extends Component {

   
   generateNumber = () => {

    console.log('generated');

    this.props.generate();


       
   } 
    render () {
        return (
            <button onClick={this.generateNumber}>Losuj liczbe</button>
        )
    }
}

export default Button;