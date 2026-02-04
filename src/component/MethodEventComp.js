import React, { Component } from "react";

class MethodEventComp extends Component{

    constructor(){
        super();
        this.state={
            salary:2000
        }
    }

    updateSal=()=>{
        this.setState((prevSal)=>({salary:prevSal.salary+1000}))

    }

    greet = () => {
        window.alert("Good Morning Guys")

    }
    welcome=(...std)=>{
        window.alert(`Welcome You ${std} in my React Sesson. `)
    }
    render(){
        return <div>
            <h2>This is Method Event Component</h2>
            <button type ="button" onClick={this.greet}>Greet</button>
            <button type ="button" onClick={()=>this.greet()}>Greet 2</button>
            <button type ="button" onClick={()=>this.welcome("Girish","Balaji")}>Welcome</button>
            <h2 onMouseOver={()=>this.welcome("Balu","Sankar")}>Hover Mouse Over Me</h2>
            <p>Salary is <strng>{this.state.salary}</strng></p>
            <button type="button" onClick={()=>this.updateSal}>Update Salary</button>
        </div>
    }
}

export default MethodEventComp;