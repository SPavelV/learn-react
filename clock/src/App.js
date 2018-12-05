import React, { Component } from 'react';
import { getClockTime } from "./lib";
const target = document.getElementById('App');

class App extends Component {
  constructor() {
    super();
    this.state = getClockTime();
  }
  
  
  componentDidMount() {
    console.log('Starting Clock');
    this.ticking = setInterval( () =>
      this.setState(getClockTime())
      , 1000)
  }
  
  componentWillUnmount() {
    clearInterval(this.ticking);
    console.log("Stopping clock");
  }
  
  render() {
    const { hours, minutes, seconds, timeOfDay } = this.state;
    return (
      <div className="App">
        <span>{hours}</span>
        <span>:</span>
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
        <span>{timeOfDay}</span>
        <button onClick={this.props.onClose}>x</button>
      </div>
    );
  }
}

export default App;
