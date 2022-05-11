import React, { Component } from 'react'

class DogShow extends Component {
  render() {
    let { dog } = this.props
    return(
      <>
        <h2>Dog Show</h2>
        <p>{dog.name}</p>
        <p>{dog.age}</p>
        <p>{dog.enjoys}</p>
        <img src={dog.image} width="200px"/>
      </>
    )
  }
}
export default DogShow