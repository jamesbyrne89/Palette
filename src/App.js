import React, { Component } from 'react';
import './styles/styles.css';
import base from './db/base';
import Colour from './components/Colour';
import AddColourInput from './components/AddColourInput';


const body = document.querySelector('body');
body.addEventListener('keyDown', function(e) {
  console.log(e.keyCode)
})

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
  }


  // componentWillUnmount() {
  //   base.removeBinding(this.ref);
  // }

  addColour(newColour) {
    if (newColour.hex && newColour.rgb) {
    this.state.colours.filter((colour) => {
      colour.rgb == newColour.rgb && colour.hex == newColour.hex
    }).length > 0 ? console.error('Colour already exists!') : console.log('New colour will be added here');
  }
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


  render() {

    const { colours, newColour } = this.state;

    return (
      <main className="App">
        <AddColourInput addColour={this.addColour} newColour={newColour} />
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
