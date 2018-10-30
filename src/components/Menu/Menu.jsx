import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'
export default class Menu extends Component {
  render() {
    return (
      <section className='menu'>
        <nav>
        <Link className="menu_item" to='/categories'>Categories</Link>
        <Link className="menu_item" to='/videos'>Videos</Link>
        <Link className="menu_item" to='/photos+gifs'>Photos gifs</Link>
        <Link className="menu_item" to='/hottest'>Hottest</Link>
        <Link className="menu_item" to='/stars'>Stars</Link>
        </nav>
      


        <li>GET PREMIUM</li>

      </section>
    )
  }
}


