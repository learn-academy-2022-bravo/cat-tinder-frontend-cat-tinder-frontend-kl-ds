import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class DogIndex extends Component {
  render() {
    return(
      <>
        <h2>Dog Index</h2>
        {this.props.dogs && this.props.dogs.map(dog => {
          return <div>
              <NavLink className="nav-spacing" to={`/dogshow/${dog.id}`} key={dog.id}>{dog.name}</NavLink>
          </div>
                
        })}
      </>
    )
  }
}
export default DogIndex
