import React from 'react'
import './Nav.css'
import { NavLink } from 'react-router-dom'
import Search from '../../Search/Search.jsx'

const Nav = () => {

  return (
    <nav>
      <div className="nav">

        <img src="https://i.imgur.com/LUBayko.png" alt="Logo" to="/"></img>

        <NavLink className="site-name" to="/">TWINKLE TOES</NavLink>
        <Search classname="search" />
        <div className="links">
          <NavLink className="link" to="/products">Products</NavLink>
          <NavLink className="link" to="/add-product">Add Product</NavLink>
        </div>
      </div>
    </nav>
  )

}

export default Nav