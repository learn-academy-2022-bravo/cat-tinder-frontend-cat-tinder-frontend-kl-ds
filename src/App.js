import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import DogIndex from './pages/DogIndex'
import DogShow from './pages/DogShow'
import DogNew from './pages/DogNew'
import DogEdit from './pages/DogEdit'
import NotFound from './pages/NotFound'
import Header from './components/Header'
import Footer from './components/Footer'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dogs: []
    }
  }

  componentDidMount() {
    this.readDog()
  }

  readDog = () => {
    fetch('http://localhost:3000/dogs')
    .then(response => response.json())
    .then(payload => this.setState({dogs: payload}))
    .catch(errors => console.log("Dog read errors:", errors))
  }

  createDog = (newlyCreatedDog) => {
    fetch('http://localhost:3000/dogs', {
      body: JSON.stringify(newlyCreatedDog),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then(response => response.json())
    .then(() => this.readDog())
    .then(errors => console.log("Dog create errors:", errors))
  }
  render() {
    return (
     
       <Router>
         <Header/> 
         <Switch>
           <Route exact path="/" component={Home} />
          <Route
            path="/dogindex"
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
            path="/dognew"
            render={() => {
              return <DogNew createDog={this.createDog}/>
            }}
          />
           <Route path="/dogedit" component={DogEdit} />
           <Route component={NotFound}/> 
        </Switch>  
        <Footer/>
      </Router>
    
    )
  }
}
