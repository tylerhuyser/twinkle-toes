import React from 'react';

import './PopularProduct.css'
import { Link } from 'react-router-dom'

const PopularProduct = (props) => {

  return (
    <>
      <Link className="popular-product-container" to={`/products/${props._id}`}>
        <div className="popular-product-image-container">
          <img className="popular-product-image" src={props.imgURL} alt={props.name} />
        </div>
      </Link>
    </>
  );
};

export default PopularProduct;