import React from 'react'
import './Nav.css'
import { NavLink } from 'react-router-dom'
import Search from '../../Search/Search.jsx'

const Nav = (props) => {

  const { allProducts, setAllProducts } = props;

  return (
    <nav>
      <div className="nav">

        <img src="https://i.imgur.com/LUBayko.png" alt="Logo" to="/"></img>

        <NavLink className="website-name" to="/">TWINKLE TOES</NavLink>
        <Search classname="search"
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          handleChange={props.handleChange}
          handleSubmit={props.handleSubmit}
        />
        <div className="links">
          <NavLink className="inner-link" to="/products">Products</NavLink>
          <NavLink className="inner-link" to="/add-product">Add Product</NavLink>
        </div>
      </div>
    </nav>
  )

}

export default Nav