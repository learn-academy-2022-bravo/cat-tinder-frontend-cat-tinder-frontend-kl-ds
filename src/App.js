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


export default class App extends Component {
  render() {
    return (
     
       <Router>
         <Switch>
           <Header/>
            <Route exact path="/" component={Home} />
            <Route path="/dogindex" component={CatIndex} />
            <Route path="/catshow" component={CatShow} />
            <Route path="/catnew" component={CatNew} />
            <Route path="/catedit" component={CatEdit} />
            <Route component={NotFound}/> 
            <Footer/>
         </Switch>
       </Router>
    
    )
  }
}
