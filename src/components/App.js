import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import AllTiles from './AllTiles'
import HOOGs from '../porkers_data.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        < Nav />
      < AllTiles hogs={HOOGs}/>


      </div>
    )
  }
}

export default App;
