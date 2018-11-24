import React, {Component} from 'react';
import AddColorForm from './components/AddColorForm'


const logColor = (title, color) =>
  console.log(`New Color: ${title} | ${color}`);

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddColorForm onNewColor={(title, color) => {
          console.log(`TODO: add new ${title} and ${color} to the list`);
          console.log(`TODO: render UI with new Color`)
        }}/>
      </div>
    );
  }
}

export default App;
