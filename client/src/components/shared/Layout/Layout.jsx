import React from 'react'

import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'

const Layout = (props) => {

  const { allProducts, setAllProducts } = props;

  return (
    <div className='layout' style={{
      
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      minHeight: "100vh",
      width: "100vw",

    }}>
      
      <Nav
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        handleChange={props.handleChange}
        handleSubmit={props.handleSubmit}
      />
      <div className="layout-children" style={{
        
        flexGrow: "1",
      }}>
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout