import React from "react";

class CompLifecycle extends Component{


    shouldComponentUpdate(){
        return true;
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        document.getElementById("beforeupdate").innerHTML="My favourite color: "

    }

    componentDidUpdate(){
        document.getElementById("afterupdate").innerHTML="My Favourite colour ater update is: "
    }

    changeColor=()=>{
        this.setState((prevState)=>({clor:"Blue"}))
    }

    render(){
        return(
            <div>
                <h2>This is Class Lifcycle Coponent</h2>
                <p>Color is: {this.shouldComponentUpdate.colour}</p>


            </div>

        )
    }
}