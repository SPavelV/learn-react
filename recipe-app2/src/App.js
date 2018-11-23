import React, { Component } from 'react';
import Menu from './components/Menu';
import data from './data/recipes';
import Summary from './components/Summary';



class App extends Component {
  render() {
    return (
     /* <Menu recipes={data} /> */
      <Summary title="Peanut Butter and Jelly"
               ingredients={3}
               steps={5} />

    );
  }
}

export default App;
