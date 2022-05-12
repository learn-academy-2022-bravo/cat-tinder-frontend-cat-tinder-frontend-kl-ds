import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Switch } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/Home'
import DogIndex from './pages/DogIndex'
import DogShow from './pages/DogShow'
import DogNew from './pages/DogNew'
import DogEdit from './pages/DogEdit'
import NotFound from './pages/NotFound'
import Header from './components/Header'
import Footer from './components/Footer'
import dogs from './mockDogs'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dogs: dogs
    }
  }

  createDog = (newlyCreatedDog) => {
    console.log(newlyCreatedDog)
  }

  updateDog = (dog, id) => {
    console.log("dog:", dog)
    console.log("id:", id)
  }
  
  render() {
    return (
     
       <Router>
         <Header/> 
         <Switch>
           <Route exact path="/" component={Home} />
          <Route
            path="/DogIndex"
            render={(props) => <DogIndex dogs={this.state.dogs} />}
          />
           <Route 
            path="/dogshow/:id" 
            render={(props) => {
              let id = +props.match.params.id
              let dog = this.state.dogs.find(dogObject => dogObject.id === id)
              return <DogShow dog={dog}/>
            }}
          />
           <Route
            path="/DogNew"
            render={() => {
              return <DogNew createdog={this.createdog}/>
            }}
          />
           <Route path="/DogEdit" component={DogEdit} />
           <Route path="/DogEdit/:id" render={(props) => {
            let id = props.match.params.id
            let dog = this.state.dogs.find(dog => dog.id === +id)
            return <DogEdit updateDog={this.updateDog} dog={dog} />
          }} />
           <Route component={NotFound}/> 
        </Switch>  
        <Footer/>
      </Router>
    
    )
  }
}
