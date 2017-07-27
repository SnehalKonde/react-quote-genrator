import React, { Component } from 'react';
class TextView extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return ( 
            <div className={this.props.className}>
                <input type="text" placeholder={this.props.placeholder} id={this.props.id}/>
            </div>
        )
    }
}
export default TextView;