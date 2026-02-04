import React, {Component} from "react";

class StateComp extends Component{

    constructor(){
        super();
        this.state={
            ename:'Kishore',
            esalary:20000
        };

        setTimeout(()=>{
            //this.setState({ename:"Lalith Kishore",esalary:this.state.esalary+3000});
            this.setState((prevState)=>({ename:'Nickson',esalary:prevState.esalary+3000}))
        },2000)
    }
    render(){
        return(
            <div>
         <h2> This is State Component</h2>
        <p>My name is <strong>{this.state.ename}</strong></p>
        <p>I earn <strong>{this.state.esalary}</strong></p>
        </div>
        )
    }
}
export default StateComp;