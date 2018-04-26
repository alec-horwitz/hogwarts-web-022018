import React, { Component } from 'react';

class Tile extends Component {
  constructor () {
    super()
    this.state = {
      clicked: false
    }

  }

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }
  render() {
    return (
      <div className="Tile">
        <h3 onClick={this.handleClick}>{this.props.name}</h3>
        <img src={"../hog-imgs/"+((this.props.name).toLowerCase().replace(/ /g, "_"))+".jpg"} alt={this.props.name} onClick={this.handleClick}/>
        <div className="deets" style={{display: this.state.clicked ? 'block' : 'none' }}>
          <p>specialty: {this.props.specialty}</p>
          <p>greased: {this.props.greased ? "Yes" : "No"}</p>
          <p>highest medal achieved: {this.props.hma}</p>
          <p>weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water: {this.props.poop}</p>
        </div>
      </div>
    )
  }
}

export default Tile;
