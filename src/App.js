import React, { Component } from 'react';
import './styles/styles.css';
import base from './db/base';
import Colour from './components/Colour';

class App extends Component {
  constructor() {
    super()
    this.state = {
      colours: []
    }
    this.addColour = this.addColour.bind(this);
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
    const { newColourHex, newColourRgb } = this.refs;
    const newColour = {};
    
    newColour['hex'] = newColourHex.value || null;
    newColour['rgb'] = newColourRgb.value || null;

    if (!newColour['hex'] && !newColour['rgb']) {
      this.handleInputErrors()
      return;
    }

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

  handleInputErrors() {
  const { newColourHex, newColourRgb } = this.refs;
    newColourHex.classList.add('invalid');
    newColourRgb.classList.add('invalid');
  }

  render() {

    const { colours } = this.state;

    return (
      <div className="App">
        <main className="colours">
          <h1 className="App-title">Colours</h1>

          <div className="add-colour">
          <h2>Add a colour:</h2>
            <label htmlFor="new-colour-hex">Hex:</label><input type="text" name="new-colour-hex" ref="newColourHex" />
            <label htmlFor="new-colour-rgb">RGB:</label><input type="text" name="new-colour-rgb" ref="newColourRgb" />
            <button value="Add" className="submit-btn" onClick={this.addColour}>Add</button>
          </div>
          <ul>
            {colours.map((col, i) => <Colour key={i} colour={col} />)}
          </ul>
        </main>
      </div>
    );
  }
}

export default App;
