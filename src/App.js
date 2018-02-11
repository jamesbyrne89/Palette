import React, { Component } from 'react';
import './App.css';
import base from './db/base';

class App extends Component {
  constructor() {
    super()
    this.state = {
      colours: []
    }
    this.addColour = this.addColour.bind(this);
    console.log(this.state)
  }

  componentWillMount() {
    base.syncState('colours', {
      context: this,
      state: 'colours',
      asArray: true,
      onFailure: function(){
        console.log("Failed!");
      }
    })
    console.log(  base.syncState('colours', {
      context: this,
      state: 'colours',
      asArray: true
    }))
  }

  // componentWillUnmount() {
  //   base.removeBinding(this.ref);
  // }

  addColour() {
    const { newColourName, newColourHex, newColourRgb } = this.refs;
    const newColour = {};
    
    newColour['name'] = newColourName.value;
    newColour['hex'] = newColourHex.value;
    newColour['rgb'] = newColourRgb.value;

    let newColourList = this.state.colours.concat(newColour);
    this.setState({
      colours: newColourList
    })
  }

  removeColour(index) {
    let newColourList = this.state.colours.slice(index, index++);
    this.setState({
      colours: newColourList
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">

        </header>
        <main className="colours">
          <h1 className="App-title">Colours will go here</h1>
          <ul>
            <li>
              <div>Colour name: </div>
              <div>Colour hex: </div>
              <div>Colour RGB: </div>
              <div></div>
            </li>
          </ul>
          <div>
            <label htmlFor="new-colour-name">Name:</label><input type="text" name="new-colour-name" ref="newColourName" />
            <label htmlFor="new-colour-hex">Hex:</label><input type="text" name="new-colour-hex" ref="newColourHex" />
            <label htmlFor="new-colour-rgb">RGB:</label><input type="text" name="new-colour-rgb" ref="newColourRgb" />
            <button value="Add" onClick={this.addColour}>Add</button>
          </div>
          <div>Currently storing {this.state.colours.length} colours</div>
        </main>
      </div>
    );
  }
}

export default App;
