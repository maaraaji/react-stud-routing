import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'; //named exports must be imported within curly braces {}

import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
