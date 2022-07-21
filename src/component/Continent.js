import React, { Component } from 'react'

class Continent extends Component {
  render() {
    return (
        <p className='conts'>{this.props.name}</p>    
    )
  }
}

export default Continent