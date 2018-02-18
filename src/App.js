import React, { Component } from 'react';
import './styles/styles.css';
import base from './db/base';
import Header from './components/Header';
import LoadingIcon from './components/LoadingIcon';
import ColourList from './components/ColourList';
import AddColourInput from './components/AddColourInput';


const body = document.querySelector('body');

body.addEventListener('mousemove', () => body.classList.add('mouse-enabled'))


class App extends Component {
  constructor() {
    super()
    this.state = {
      colours: [],
      loading: true
    }
    this.addColour = this.addColour.bind(this);
    this.removeColour = this.removeColour.bind(this);
    this.handleLoading = this.handleLoading.bind(this);
  }

  componentWillMount() {
    base.syncState('colours', {
      context: this,
      state: 'colours',
      asArray: true,
      then: function () {
        this.setState({ loading: false })
        console.info("Syncing with Firebase");
      },
      onFailure: function () {
        console.error("Failed to sync state with Firebase");
      }
    })
  }


  // componentWillUnmount() {
  //   base.removeBinding(this.ref);
  // }

  handleLoading() {
    if (this.state.loading) {
      return (
        <LoadingIcon />
      )
    }
    else {
      return null;
    }
  }

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
    
    let newColourList = this.state.colours;
    this.state.colours.splice(index, 1);
    
    this.setState({
      colours: newColourList
    })
  }


  render() {

    const { colours, colourToAdd } = this.state;

    return (
      <div className="app">
      <Header />
        <main className="container">
        <div className="col">
          <AddColourInput addColour={this.addColour} previewColour={this.previewColour} colourToAdd={colourToAdd} />
    </div>
          <div className="content-col">
            <div className="colours">
              <h1 className="app-title">Colours</h1>
              <ColourList colours={colours} removeColour={this.removeColour} handleLoading={this.handleLoading} />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
