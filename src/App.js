import React, { Component } from 'react';
import './styles/styles.css';
import base from './db/base';
import Colour from './components/Colour';
import AddColourInput from './components/AddColourInput';


const body = document.querySelector('body');

body.addEventListener('mousemove', () => body.classList.add('mouse-enabled'))

class App extends Component {
  constructor() {
    super()
    this.state = {
      colours: [],
      newColour: {}
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

  addColour(newColour) {
    this.setState({
      newColour: newColour
    });
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
        <AddColourInput addColour={this.addColour} />
        <div className="colours">
        <h1 className="App-title">Colours</h1>
          <div className="colour-list">
          
            {colours.map((col, i) => <Colour key={i} colour={col} />)}
            <button className="colour-add">
            +
          </button>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
