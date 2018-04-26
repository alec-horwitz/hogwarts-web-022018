import React, { Component } from 'react';
import Tile from './Tile'

class AllTiles extends Component {
  constructor () {
    super()
    this.state = {
    }
  }
  allHogs () {
    return this.props.hogs.map(hog => < Tile
      name={hog.name}
      specialty={hog.specialty}
      greased={hog.greased}
      hma={hog['highest medal achieved']}
      poop={hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}/>)
  }
  render() {
    return (
      <div className="AllTiles">
        {this.allHogs()}

      </div>
    )
  }
}

export default AllTiles;
