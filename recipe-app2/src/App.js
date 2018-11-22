import React, { Component } from 'react';
import Menu from './components/Menu';
import data from './data/recipes';


class App extends Component {
  render() {
    return (
      <Menu recipes={data} />
    );
  }
}

export default App;
