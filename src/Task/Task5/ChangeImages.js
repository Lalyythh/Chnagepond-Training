import React, {Component} from 'react';
import ConstImage from '../../shared/constant/ConstImage';

class ChangeImage extends Component{
    constructor(){
        super();
        this.state={
            show:ConstImage.spiderman,name:"Spider man"
        };
    }
    hero1=()=>{
        this.setState({
            show: ConstImage.spiderman,
            name: "Spider man"
        });
    }
    hero2=()=>{
        this.setState({
            show: ConstImage.batman,
            name: "Bat man"
        });
    }
    hero3=()=>{
        this.setState({
            show: ConstImage.ironman,
            name: "Iron man"
        });
    }

    render(){
        return (
            <div>
                <h1>This is Task 5 - Changing Images </h1>
                <div style={{ textAlign: 'center' }}>
                    <h2>{this.state.name}</h2>
                    <img
                        src={this.state.show}
                        alt={this.state.name}
                        style={{ width: 300, height: 'auto', display: 'block', margin: '0 auto' }}
                    />
                    <div style={{ marginTop: 20 }}>
                        <button onClick={this.hero1}>Spider man</button>
                        <button onClick={this.hero2} style={{ marginLeft: 8 }}>Bat man</button>
                        <button onClick={this.hero3} style={{ marginLeft: 8 }}>Iron man</button>
                    </div>
                </div>
            </div>
        )
    }


}

export default ChangeImage;