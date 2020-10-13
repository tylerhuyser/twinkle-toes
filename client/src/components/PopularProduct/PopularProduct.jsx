import React from 'react';

import './PopularProduct.css'
import { Link } from 'react-router-dom'

const PopularProduct = (props) => {

  return (
    <>
      <Link className="popular-product" to={`/products/${props._id}`}>
        <div className="popular-image-container">
          <img className="popular-product-image" src={props.imgURL} alt={props.name} />
        </div>
      </Link>
    </>
  );
};

export default PopularProduct;