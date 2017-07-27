import React, { Component } from 'react';
class Label extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return ( 
            <div>
                <label>{this.props.str}</label>
            </div>
        )
    }
}
export default Label;