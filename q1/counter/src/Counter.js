import React , {Component} from 'react';
import Button from './Button';

class Counter extends Component{
    constructor(props){
        super(props);
        this.state={
            counter:0
                   
}
    this.dec="decrease"
    this.inc="increase"
}
increase= ()=>{
    this.setState({ counter: this.state.counter+1 })
    
}
decrease=()=>{
    if(this.state.counter>0){
        this.setState({ counter: this.state.counter-1 })
       
    }
}

render(){
    return(
    <div style={{margin:"30px"}}>
    <h1>{this.state.counter}</h1>
    <Button title={this.dec} clickHandler={this.decrease}/>
    <Button title={this.inc} clickHandler={this.increase}/>
    </div>
       
    )
}}

export default Counter;