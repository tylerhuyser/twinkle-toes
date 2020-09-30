import React from 'react';
import { Link } from 'react-router-dom'

const PopularProduct = (props) => {

  return (
    <>
      <Link className="product" to={`/products/${props._id}`} style={{

          background: "#F7ECEC",
          maxWidth: "15vw",
          height: "auto",
          padding: "10px",
          margin: "10px",
          border: "3px solid #D091C9",
          borderRadius: "12px",
          
          display: "flex",
          alignItems: "center",
          alignContent: "center",
          justifyContent: "center",
          
          textDecoration: "none",
          

        }}>
        <div className="popular-image-container" style={{

          background: "white",
          borderRadius: "20px",
          
        }}>
          <img className="product-image" src={props.imgURL} alt={props.name} style={{

              // flexGrow: "1",
              objectFit: "scale-down",
              width: "100%",
              height: "188px",
              maxWidth: "15vw",
              maxHeight: "15vh",
              borderRadius: "20px",
              paddingTop: "2px",

            }} />
          </div>
      </Link>
    </>
  );
};

export default PopularProduct;