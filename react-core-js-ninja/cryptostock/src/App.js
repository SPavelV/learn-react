import React, { Component } from 'react';
import './App.css';

import currencies from './currencies';

class App extends Component {

  state = {
    selectedPairs: []
  }

  handleCheckbox = currency => event =>{
    const { checked } = event.target;
  }

  render() {
    return (
      <div className="App">
        <aside>
          <ul className="currList">
            {currencies.map(curr => <li key={curr} className="currItem">
              <input type="checkbox" id={curr} onChange={this.handleCheckbox} />
              <label htmlFor={curr}>{curr.toUpperCase()}</label>
            </li>)}
          </ul>
        </aside>
      </div>
    );
  }
}

export default App;
