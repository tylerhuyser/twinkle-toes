import React, { useState } from 'react'

import './Nav.css'
import { Link } from 'react-router-dom'
import Search from '../../Search/Search.jsx'

const Nav = (props) => {

  const { allProducts, setAllProducts } = props;

  const [searchVisibility, setSearchVisibility] = useState(false);
  const [menuVisibility, setMenuVisibility] = useState(false);

  const changeMenuVisibility = (e) => {
    e.preventDefault();
    setMenuVisibility(!menuVisibility);
  };

  const changeSearchVisibility = (e) => {
    e.preventDefault();
    setSearchVisibility(!searchVisibility);
  };


  return (
    <nav className="nav-container">
    
      <div className="desktop-nav">

        <div className="logo-containers">
          <Link to="/">
            <img src="https://i.imgur.com/LUBayko.png" alt="Logo" className="logo" />
          </Link>

          <Link className="site-name-link" to="/">

            <p className="site-name">TWINKLE TOES
            </p>

          </Link>
        </div>


        <Search classname="search"
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          handleChange={props.handleChange}
          handleSubmit={props.handleSubmit}
        />

        <div className="header-links">
          <Link className="products-link" to="/products">Products</Link>
          <Link className="add-products-link" to="/add-product">Add Product</Link>
        </div>
      </div>

      <div className={searchVisibility ? "mobile-nav-hidden" : "mobile-nav-visible"} id="mobile-nav">
        <i className="fas fa-bars" onClick={(e) => changeMenuVisibility(e)}></i>

        <div className="logo-containers">
          <Link to="/">
            <img src="https://i.imgur.com/LUBayko.png" alt="Logo" className="logo" />
          </Link>

          <Link className="site-name-link" to="/">

            <p className="site-name">TWINKLE TOES
            </p>

          </Link>
        </div>

        <i className="fas fa-search" onClick={(e) => changeSearchVisibility(e)}></i>
      </div>

      <div id="mobile-menu" className={menuVisibility ? "mobile-menu-visible" : "mobile-menu-hidden"}>
    
        <Link className="mobile-products-link" to="/products">Products</Link>
        <Link className="mobile-add-products-link" to="/add-product">Add Product</Link>

      </div>

      
      <div id="mobile-search-menu" className={searchVisibility ? "mobile-search-menu-visible" : "mobile-search-menu-hidden"}>
        <img src="https://i.imgur.com/LUBayko.png" alt="Logo" className="search-logo" />  
        
        <Search classname="search"
            allProducts={allProducts}
            setAllProducts={setAllProducts}
            handleChange={props.handleChange}
            handleSubmit={props.handleSubmit}
        />
        
        <i className="fas fa-times" onClick={(e) => changeSearchVisibility(e)}></i>
      </div>
      

    </nav>
  )

}

export default Nav