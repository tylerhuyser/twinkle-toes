import React from 'react'
import './Nav.css'
import { NavLink } from 'react-router-dom'
// import Search from '../Search/Search.jsx'

const Nav = () => {

  return (
    <nav>
      <div className="nav">
        <NavLink className="logo" to="/">
          <img src="https://i.imgur.com/F522Y7n.jpg" alt="Logo"></img>
        </NavLink>
        {/* <Search /> */}
        <div className="links">
          <NavLink className="link" to="/products">Products</NavLink>
          <NavLink className="link" to="/add-product">Add Product</NavLink>
        </div>
      </div>
    </nav>
  )

}

export default Nav