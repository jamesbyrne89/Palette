import React, { Component } from 'react';
import './styles/styles.css';
import base, { connectedRef } from './db/base';
import Header from './components/Header';
import Title from './components/Title';
import ViewHeader from './components/ViewHeader';
import LoadingIcon from './components/LoadingIcon';
import AddColourInput from './components/AddColourInput';
import styled from 'styled-components';
import ConnectionStatusBar from './components/ConnectionStatusBar';
import PalettesContainer from './components/PalettesContainer';
import { AddPaletteButton } from './components/Buttons/Buttons';

const body = document.querySelector('body');

body.addEventListener('mousemove', () => body.classList.add('mouse-enabled'));

const AppStyles = styled.div`
  position: relative;
  min-height: 100vh;
  background: var(--backgroundColour);
  // background: linear-gradient(
  //   -45deg,
  //   var(--backgroundColour) 0%,
  //   var(--backgroundColour) 50%,
  //   var(--backgroundColourSecondary) 50%,
  //   var(--backgroundColourSecondary) 100%
  // );
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
      palettes: [
        {
          name: 'Warehouse',
          colours: []
        },
        {
          name: 'My Palette',
          colours: [
            {
              hex: '#b4d455',
              rgb: '1,1,1'
            }
          ]
        }
      ],
      loading: true,
      online: true,
      showStatusBar: false
    };
    this.addColour = this.addColour.bind(this);
    this.addPalette = this.addPalette.bind(this);
    this.removeColour = this.removeColour.bind(this);
    this.handleLoading = this.handleLoading.bind(this);
  }

  componentWillMount() {
    base.syncState('palettes', {
      context: this,
      state: 'palettes',
      asArray: true,
      then: function() {
        this.setState({ loading: false });
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

  addPalette() {}

  removeColour(index) {
    let newColourList = this.state.colours;
    this.state.colours.splice(index, 1);

    this.setState({
      colours: newColourList
    });
  }

  render() {
    const { colours, colourToAdd, palettes } = this.state;

    return (
      <AppStyles>
        <Header />
        <Container>
          <AddColourInput
            colours={colours}
            previewColour={this.previewColour}
            colourToAdd={colourToAdd}
          />
          <ColumnMain>
            <div className="colours">
              <ViewHeader>
                <Title title={'Colours'} />
                <AddPaletteButton />
              </ViewHeader>
              <PalettesContainer
                palettes={palettes}
                addColour={this.addColour}
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
