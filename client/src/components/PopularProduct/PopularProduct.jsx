import React from 'react';
import { Link } from 'react-router-dom'

const PopularProduct = (props) => {
  return (
    <>
      <Link className="product" to={`/products/${props._id}`} style={{

          maxWidth: "15vw",
          height: "auto",
          display: "flex",
          alignItems: "center",
          alignContent: "center",
          justifyContent: "center",
          padding: "5px",
          background: "#F7ECEC",
          borderRadius: "8px",
          border: "3px solid #D091C9"

          }}>
        <img className="product-image" src={props.imgURL} alt={props.name} style={{

            // flexGrow: "1",
            objectFit: "scale-down",
            maxWidth: "15vw",
            maxHeight: "15vh",
            borderRadius: "8px",

            }} />
      </Link>
    </>
  );
};

export default PopularProduct;