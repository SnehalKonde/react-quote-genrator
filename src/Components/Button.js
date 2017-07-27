import React, { Component } from 'react';
class Button extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return ( 
            <div className={this.props.className}>
                <button type="button" className="button">GO</button>
            </div>
        )
    }
}
export default Button;