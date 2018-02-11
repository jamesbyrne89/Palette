import React, { Component } from 'react';
import './styles/styles.css';
import base from './db/base';
import Colour from './components/Colour';
import AddColour from './components/AddColour';

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
      <main className="App">
        <AddColour addColour={this.addColour} />
        <div className="colours">
        <h1 className="App-title">Colours</h1>
          <div className="colour-list">
          
            {colours.map((col, i) => <Colour key={i} colour={col} />)}
          </div>
        </div>
      </main>
    );
  }
}

export default App;
