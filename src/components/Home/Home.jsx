import React, { Component } from 'react'
import Header from '../Header';
import Menu from "../Menu";
import VideosList from '../VideosList'
class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Menu />
        <VideosList  />
      </div>
    )
  }
}

export default Home;
