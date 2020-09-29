import React from 'react'
import { Link } from 'react-router-dom'
import Search from '../../Search/Search.jsx'

const Nav = (props) => {

  const { allProducts, setAllProducts } = props;

  return (
    <nav>
      <div className="nav" style={{

        // Physical Properties
        width: "100vw",
        height: "100px",
        padding: "20px 50px",

        // Position Properties
        zIndex: "5",
        top: "0",

        // Container Properties
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",

      }}>

        <div className="logo-containers" style={{

          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
          width: "30vw",

        }}>
          <Link to="/">
            <img src="https://i.imgur.com/LUBayko.png" alt="Logo" style={{

              maxWidth: "5vw",
              maxHeight: "50px",
              margin: "0px 30px"

            }} />
          </Link>

          <Link className="site-name" to="/" style={{

            backgroundColor: "transparent",

            display: "flex",
            justifyContent: "center",
            alignContent: "center",

            textDecoration: "none",
            textdecorationLine: "none",
            maxWidth: "25vw",

          }}>

            <p style={{

              color: "#E67CDA",
              fontSize: "18px",
              letterSpacing: "-1px",
              minWidth: "150px",

            }}>TWINKLE TOES
            </p>

          </Link>
        </div>


        <Search classname="search"
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          handleChange={props.handleChange}
          handleSubmit={props.handleSubmit}
        />

        <div className="links" style={{

          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          margin: "30px",
          width: "30vw",

        }}>
          <Link className="link" to="/products" style={{

            textDecoration: "none",
            textdecorationLine: "none",
            fontSize: "14px",
            color: "#E67CDA",
            textAlign: "right",

          }}>Products</Link>
          <Link className="link" to="/add-product" style={{

            textDecoration: "none",
            textdecorationLine: "none",
            fontSize: "14px",
            color: "#E67CDA",
            textAlign: "right",
            margin: "0px 30px",

          }}>Add Product</Link>
        </div>
      </div>
    </nav>
  )

}

export default Nav