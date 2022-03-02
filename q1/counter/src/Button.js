import React,{Component} from "react";
export default class Button extends Component{

    render() {
        return (
             <button style={{color:'black'}} onClick={this.props.clickHandler}>{this.props.title}</button>
        );
    }
}
