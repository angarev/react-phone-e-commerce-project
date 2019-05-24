import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import ProductList from './components/ProductList/ProductList';
import Details from './components/Details/Details';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Cart from './components/Cart/Cart';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar/>        
        <Switch>    
          <Route exact path="/" component = {ProductList}/>
          <Route path="/details" component = {Details}/>
          <Route path="/cart" component = {Cart}/>
          <Route component = {PageNotFound}/>
        </Switch>
    </React.Fragment>
    )
  }
}

export default App;
