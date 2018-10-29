import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';

import Home from './Home/Home.jsx';

class App extends Component {
  render() {
    return <BrowserRouter>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/posts" component={Home} />
          <Route path="/articles" component={Home} />
          <Route path="/posts/:post_id" component={Home} />
          <Route exact path="/auth" component={Home} />
        </div>
      </BrowserRouter>;
  }
}

export default App;
