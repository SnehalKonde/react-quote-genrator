import React, { Component } from 'react';
import TextArea from './Components/TextArea.js';
import Label from './Components/Label.js';
import Button from './Components/Button.js';
import TextView from './Components/TextView.js'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Quote Generator</h2>
        </div>
        <TextArea rows="8" cols="50" placeholder="Enter Your Quote"/>
        <TextView placeholder="Author" id="author-name" className="margin-t-10px"/>
        <Button className="margin-t-10px"/>       
      </div>
    );
  }
}

export default App;
