import React, { Component } from 'react';
import './styles/styles.css';
import base, { connectedRef } from './db/base';
import Header from './components/Header';
import ViewHeader from './components/ViewHeader';
import LoadingIcon from './components/LoadingIcon';
import styled from 'styled-components';
import ConnectionStatusBar from './components/ConnectionStatusBar';
import PalettesContainer from './components/PalettesContainer';
import NavBar from './components/Navigation/NavBar';
import { Provider } from 'react-redux';

const body = document.querySelector('body');

body.addEventListener('mousemove', () => body.classList.add('mouse-enabled'));

const AppStyles = styled.div`
  position: relative;
  min-height: 100vh;
  background: var(--backgroundColour);

  color: var(--textColour);
  font-family: var(--bodyFont);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  overflow: hidden;
  ::-moz-selection {
    color: red;
    background: yellow;
  }
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
      colours: [],
      palettes: [],
      favourites: [],
      loading: true,
      online: true,
      showStatusBar: false
    };
    this.addColour = this.addColour.bind(this);
    this.addPalette = this.addPalette.bind(this);
    this.removePalette = this.removePalette.bind(this);
    this.removeColour = this.removeColour.bind(this);
    this.handleLoading = this.handleLoading.bind(this);
    this.addToFavourites = this.addToFavourites.bind(this);
    this.removeFromFavourites = this.removeFromFavourites.bind(this);
  }

  componentWillMount() {
    base.syncState('palettes', {
      context: this,
      state: 'palettes',
      asArray: true,
      then: function() {
        setTimeout(() => this.setState({ loading: false }), 1000);
        var cached = JSON.stringify(this.state.colours);
        localStorage.setItem('colours', cached);
      },
      onFailure: () => {
        this.setState({ colours: JSON.parse(localStorage.getItem('colours')) });
        console.error('Failed to sync state with Firebase');
      }
    });
  }

  componentDidMount() {
    let _this = this;
    connectedRef.on('value', function(snap) {
      if (snap.val() === true) {
        _this.setState({ online: true });
      } else {
        _this.setState({ online: false });
      }
      if (snap.val() === _this.state.online) {
        _this.setState({ showStatusBar: true });
      } else {
        _this.setState({ showStatusBar: false });
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

  addToFavourites(colour) {
    this.setState({ favourites: [...this.state.favourites, colour] });
  }

  removeFromFavourites(colour) {
    this.setState({
      favourites: this.state.favourites.filter(fav => fav.hex !== colour.hex)
    });
  }

  addColour(newColour, paletteName) {
    const alreadyExists =
      this.state.colours.filter(
        colour => colour.hex === newColour.hex || colour.rgb === newColour.rgb
      ).length > 0;

    if (alreadyExists) {
      alert('Colour already exists!');
    } else {
      const updatedPalettes = this.state.palettes.map(palette => {
        palette.colours =
          palette.name === paletteName
            ? palette.colours.concat([newColour])
            : palette;
        return palette;
      });
      this.setState({ palettes: updatedPalettes });
    }
  }

  addPalette(name) {
    if (
      this.state.palettes.filter(palette => palette.name === name).length === 0
    ) {
      const newPalette = {
        name,
        colours: []
      };
      this.setState({ palettes: this.state.palettes.concat(newPalette) });
    }
  }

  removePalette(name) {
    this.setState({
      palettes: this.state.palettes.filter(palette => palette.name !== name)
    });
  }

  removeColour(paletteName, hex) {
    const matchingPalette = this.state.palettes.filter(
      palette => palette.name === paletteName
    )[0];

    const newColours = matchingPalette.colours.filter(
      colour => colour.hex === hex
    );

    const newState = this.state.palettes.map(item => {
      let newColoursArray;
      if (item.name === paletteName) {
        newColoursArray = item.colours.filter(colour => colour.hex !== hex);
        item.colours = newColoursArray;
      }
      return item;
    });
    this.setState({ palettes: newState });
  }

  render() {
    const { palettes, favourites } = this.state;

    return (
      <AppStyles>
        <Header />
        <NavBar {...this.state} />
        <Container>
          <ColumnMain>
            <div className="colours">
              <ViewHeader addPalette={this.addPalette} />
              <PalettesContainer
                palettes={palettes}
                favourites={favourites}
                addColour={this.addColour}
                removeColour={this.removeColour}
                removePalette={this.removePalette}
                loading={this.state.loading}
                addToFavourites={this.addToFavourites}
                removeFromFavourites={this.removeFromFavourites}
              />
            </div>
          </ColumnMain>
        </Container>
        <ConnectionStatusBar
          show={this.state.showStatusBar}
          connected={this.state.online}
        />
      </AppStyles>
    );
  }
}

export default App;
