import React, { Component } from 'react';
import './styles/styles.css';
import base from './db/base';
import Header from './components/Header';
import LoadingIcon from './components/LoadingIcon';
import ColourList from './components/ColourList';
import AddColourInput from './components/AddColourInput';
import styled from 'styled-components';


const body = document.querySelector('body');

body.addEventListener('mousemove', () => body.classList.add('mouse-enabled'))

const AppStyles = styled.div `
min-height: 100vh;
background: linear-gradient( -45deg, var(--backgroundColour) 0%, var(--backgroundColour) 50%, var(--backgroundColourSecondary) 50%, var(--backgroundColourSecondary) 100%);
color: var(--textColour);
font-family: var(--bodyFont);
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-pack: center;
-ms-flex-pack: center;
justify-content: center;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
`

const Container = styled.main `
display: grid;
margin: 100px auto;
grid-template-columns: auto minMax(600px, 1000px) auto;
`
const Title = styled.h1 `
font-size: 3rem;
font-family: var(--headerFont);
font-weight: 300;
margin-left: 0;
`

const ColumnMain = styled.div `
position: relative;
`

const Column  = styled.div `
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
height: calc(100vh - 200px);
`


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


  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

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
      <AppStyles>
      <Header />
        <Container>
        <Column>
          <AddColourInput addColour={this.addColour} previewColour={this.previewColour} colourToAdd={colourToAdd} />
    </Column>
          <ColumnMain>
            <div className="colours">
              <Title>Colours</Title>
              <ColourList colours={colours} removeColour={this.removeColour} handleLoading={this.handleLoading} />
            </div>
          </ColumnMain>
        </Container>
      </AppStyles>
    );
  }
}

export default App;
