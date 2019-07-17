import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  constructor(props) {
    super(props);
    this.state = { x: 0, y:0 };
  }

  handleMouseMove = (event) => {
     this.setState({ x: event.clientX, y: event.clientY });
     return drawChromeBoiAtCoords(this.state.x, this.state.y);
  }

   handleClick = e => toggleCycling();

   handleKeyPress = e => resize({ a: '+', s: '-' }[e.key]);

  render() {
    const { x, y } = this.state;
    return (
      <canvas
        onMouseMove={this.handleMouseMove}
        onClick={this.handleClick}
        onKeyPress={this.handleKeyPress}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
