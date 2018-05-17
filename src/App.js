import React, { Component } from 'react';
import Screen from './Screen'
import Header from './Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Screen />
      </div>
    );
  }
}

export default App;
