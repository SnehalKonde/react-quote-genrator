import React, { Component } from 'react';
class TextArea extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return ( 
            <div>
                <textarea rows={this.props.rows} cols={this.props.cols} placeholder={this.props.placeholder}>
                </textarea>
            </div>
        )
    }
}
export default TextArea;