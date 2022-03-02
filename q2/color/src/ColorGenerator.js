import React, { Component } from 'react';
export default class ColorGenerator extends Component{

    constructor(props) {
        super(props);
        this.state = {   
            colors: []
        }
        
    }

    randomColor = () => {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const newColor = "#" + randomColor;
        this.setState({ colors: [...this.state.colors, newColor] })
      }


      
      render()
      {

        return(
            <div style={{margin:"20px"}}>
            <button onClick={this.randomColor}>add Color</button>
            <ul>  
                {this.state.colors.map(color => <li style={{display:"flex"}}> <div style={{backgroundColor: color, height:"10px",width:"10px"}}></div><div>{color}</div> </li>)}
            </ul>
            </div>
        )
      }


}