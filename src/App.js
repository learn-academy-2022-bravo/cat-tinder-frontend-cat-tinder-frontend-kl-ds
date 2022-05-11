import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Switch } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/Home'
import CatIndex from './pages/CatIndex'
import CatShow from './pages/CatShow'
import CatNew from './pages/CatNew'
import CatEdit from './pages/CatEdit'
import NotFound from './pages/NotFound'
import './mockCats'
import Header from './components/Header'
import Footer from './components/Footer'
import cats from './mockCats'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cats: cats
    }
  }
  render() {
    return (
     
       <Router>
         <Header/> 
         <Switch>
           <Route exact path="/" component={Home} />
          <Route
            path="/catindex"
            render={(props) => <CatIndex cats={this.state.cats} />}
          />
           <Route 
            path="/catshow/:id" 
            render={(props) => {
              let id = +props.match.params.id
              let cat = this.state.cats.find(catObject => catObject.id === id)
              return <CatShow cat={cat}/>
            }}
          />
           <Route path="/catnew" component={CatNew} />
           <Route path="/catedit" component={CatEdit} />
           <Route component={NotFound}/> 
        </Switch>  
        <Footer/>
      </Router>
    
    )
  }
}
