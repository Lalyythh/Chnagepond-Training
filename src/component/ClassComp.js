import React, {Component} from "react";

class ClassComp extends Component{
    render(){
        return(
            <div>
         <h2> This is class Component</h2>
        <p>My name is <strong>{this.props.ename}</strong></p>
        <p>I am a <strong>{this.props.epost}</strong></p>
        </div>
        )
    }
}
export default ClassComp;
