import React, { Component } from 'react'
import './Menu.css'
export class Menu extends Component {
  render() {
    return (
      <section className='menu'>
        <ul>
          <li>Categories</li>
          <li>Videos</li>
          <li>PHOTOS & GIFS</li>
          <li>HOTTEST</li>
          <li>STARS</li>
        </ul>
        <ul>
          <li>GET PREMIUM</li>
        </ul>
      </section>
    )
  }
}

export default Menu;
