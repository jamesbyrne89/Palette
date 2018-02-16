import React, { Component } from 'react';
import './styles/styles.css';
import base from './db/base';
import Colour from './components/Colour';
import AddColourInput from './components/AddColourInput';


const body = document.querySelector('body');
body.addEventListener('keyDown', function (e) {
  console.log(e.keyCode)
})

body.addEventListener('mousemove', () => body.classList.add('mouse-enabled'))

class App extends Component {
  constructor() {
    super()
    this.state = {
      colours: [],
      colourToAdd: null
    }
    this.previewColour = this.previewColour.bind(this);
    this.addColour = this.addColour.bind(this);
  }

  componentWillMount() {
    base.syncState('colours', {
      context: this,
      state: 'colours',
      asArray: true,
      onFailure: function () {
        console.error("Failed to sync state with Firebase");
      }
    })
  }

  previewColour(newColour) {
    this.setState({ colourToAdd: newColour })
    console.log('set new colour to add');
  }
  // componentWillUnmount() {
  //   base.removeBinding(this.ref);
  // }

  addColour(newColour) {

    const alreadyExists = this.state.colours.filter(colour => colour.hex === newColour.hex || colour.rgb === newColour.rgb).length > 0;

    if (alreadyExists) {
      console.error('Colour already exists!')
      alert('Colour already exists!')
    }
    else {
      this.setState({ colours: this.state.colours.concat([newColour]) });
    }
  }

  removeColour(index) {
    let newColourList = this.state.colours.splice(index, index++);
    this.setState({
      colours: newColourList
    })
  }


  render() {

    const { colours, colourToAdd } = this.state;

    return (
      <div className="app">
        <main className="container">
          <AddColourInput addColour={this.addColour} previewColour={this.previewColour} colourToAdd={this.state.colourToAdd} />

          <div className="content-col">
            <div className="colours">
              <h1 className="app-title">Colours</h1>
              <div className="colour-list">
                {colours.map((col, i) => <Colour key={i} colour={col} />)}
              </div>
              <button className="colour-add">
                +
          </button>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
