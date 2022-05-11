import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class CatIndex extends Component {
  render() {
    return(
      <>
        <h2>Dog Index</h2>
        {this.props.cats && this.props.cats.map(cat => {
          return <div>
              <NavLink className="nav-spacing" to={`/catshow/${cat.id}`} key={cat.id}>{cat.name}</NavLink>
          </div>
                
        })}
      </>
    )
  }
}
export default CatIndex
