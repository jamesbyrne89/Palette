import React, { Component } from 'react';
import './styles/styles.css';
import base from './db/base';
import Header from './components/Header';
import Title from './components/Title';
import LoadingIcon from './components/LoadingIcon';
import ColourList from './components/ColourList';
import AddColourInput from './components/AddColourInput';
import styled from 'styled-components';

const body = document.querySelector('body');

body.addEventListener('mousemove', () => body.classList.add('mouse-enabled'));

const AppStyles = styled.div`
  min-height: 100vh;
  background: linear-gradient(
    -45deg,
    var(--backgroundColour) 0%,
    var(--backgroundColour) 50%,
    var(--backgroundColourSecondary) 50%,
    var(--backgroundColourSecondary) 100%
  );
  color: var(--textColour);
  font-family: var(--bodyFont);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`;

const Container = styled.main`
display: grid;
margin: 100px auto;
grid-template-columns: 300px minMax(600px, 1000px) auto;
grid-template-areas: "add-colour-sidebar main-column gutter";
@media (max-width: 1024px) {
  padding: 0 1rem;
  grid-template-columns: auto;
}
  @media (max-width: 768px) {
    grid-template-areas: "add-colour-sidebar gutter gutter"
  "main-column main-column main-column";
  width: 90%;
  }
  @media (max-width: 414px) {
    margin: 24px auto;
    grid-template-areas: "add-colour-sidebar"
  "main-column";    
  }
}
`;

const ColumnMain = styled.div`
  position: relative;
  grid-area: main-column;
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      colours: [] || localStorage.getItem('colours'),
      loading: true
    };
    this.addColour = this.addColour.bind(this);
    this.removeColour = this.removeColour.bind(this);
    this.handleLoading = this.handleLoading.bind(this);
  }

  componentWillMount() {
    base.syncState('colours', {
      context: this,
      state: 'colours',
      asArray: true,
      then: function() {
        this.setState({ loading: false });
        var cached = JSON.stringify(this.state.colours);
        localStorage.setItem('colours', cached);
      },
      onFailure: () => {
        console.error('Failed to sync state with Firebase');
      }
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  handleLoading() {
    if (this.state.loading) {
      return <LoadingIcon />;
    } else {
      return null;
    }
  }

  addColour(newColour) {
    const alreadyExists =
      this.state.colours.filter(
        colour => colour.hex === newColour.hex || colour.rgb === newColour.rgb
      ).length > 0;

    if (alreadyExists) {
      alert('Colour already exists!');
    } else {
      this.setState({ colours: this.state.colours.concat([newColour]) });
    }
  }

  removeColour(index) {
    let newColourList = this.state.colours;
    this.state.colours.splice(index, 1);

    this.setState({
      colours: newColourList
    });
  }

  render() {
    const { colours, colourToAdd } = this.state;

    return (
      <AppStyles>
        <Header />
        <Container>
          <AddColourInput
            colours={colours}
            addColour={this.addColour}
            previewColour={this.previewColour}
            colourToAdd={colourToAdd}
          />
          <ColumnMain>
            <div className="colours">
              <Title>Colours</Title>
              <ColourList
                colours={colours}
                removeColour={this.removeColour}
                handleLoading={this.handleLoading}
              />
            </div>
          </ColumnMain>
        </Container>
      </AppStyles>
    );
  }
}

export default App;
