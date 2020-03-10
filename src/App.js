import React, { Component } from 'react';
import Palette from './Palette';

import seedColors from './seedColors';
import './App.css';
import { generatePalette } from './colorHelper';
import { Route, Switch } from 'react-router-dom';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPalletteForm from './NewPalletteForm';

class App extends Component {
  constructor(props) {
    super(props);
    let savedPalettes = window.localStorage.getItem('palettes');
    console.log(savedPalettes);
    this.state = {
      palettes: savedPalettes ? JSON.parse(savedPalettes) : seedColors
    };
  }

  findPalette(id) {
    return this.state.palettes.find(function(palette) {
      return palette.id === id;
    });
  }

  savePalette = newPalette => {
    console.log(newPalette);
    this.setState(
      { palettes: [...this.state.palettes, newPalette] },
      this.setLocalStorage
    );
  };

  deletePalette = id => {
    this.setState(
      { palettes: this.state.palettes.filter(p => p.id !== id) },
      this.setLocalStorage
    );
  };
  setLocalStorage = () => {
    const palettesToSet = JSON.stringify(this.state.palettes);
    localStorage.setItem('palettes', palettesToSet);
  };

  render() {
    console.log(this.state);
    return (
      <div className='App'>
        <Switch>
          <Route
            exact
            path='/palette/new'
            render={routeProps => (
              <NewPalletteForm
                savePalette={this.savePalette}
                palettes={this.state.palettes}
                {...routeProps}
              />
            )}
          />

          <Route
            exact
            path='/'
            render={routeProps => (
              <PaletteList
                paletteList={this.state.palettes}
                handleDelete={this.deletePalette}
                {...routeProps}
              />
            )}
          />

          <Route
            exact
            path='/palette/:id'
            render={routeProps => (
              <Palette
                palette={generatePalette(
                  this.findPalette(routeProps.match.params.id)
                )}
              />
            )}
          />

          <Route
            exact
            path='/palette/:paletteId/:colorId'
            render={routeProps => (
              <SingleColorPalette
                palette={generatePalette(
                  this.findPalette(routeProps.match.params.paletteId)
                )}
                colorId={routeProps.match.params.colorId}
              />
            )}
          />
        </Switch>
      </div>
      // <div>  <Palette palette={generatePalette(seedColors[4])} /></div>
    );
  }
}

export default App;
