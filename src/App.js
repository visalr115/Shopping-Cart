import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
      <img className="logo" src="/image/main.png" alt="" />
      <input className="searchbar" type="text" placeholder="Search for natural, sustainable and handmade products" />
      <button className="green" type="submit"><i className="fa fa-search"></i></button>
      <i className="fa fa-user-circle-o" />
      <i className="fa fa-shopping-cart" />
        </header>
      </div>
    );
  }
}

export default App;
