import React from 'react';
import './Product.css'
import StarRating from '../StarRating/StarRating'
import { Link } from 'react-router-dom'

const Product = (props) => {

  const rating = props.rating

  function createReviewStars() {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars[i] =
          <i class="fas fa-star" style={{

            color: "#F4A2B6",

          }}></i>
      }
      if (i >= rating) {
        stars[i] =
          <i class="fas fa-star" style={{

            color: "#C7C7CC",

          }}></i>
      }
    }
    return stars
  }

  const reviewStars = createReviewStars()

  return (
    <>
      <Link className="product" to={`/products/${props._id}`}>
        <img className="product-image" src={props.imgURL} alt={props.name} />
        <StarRating rating={props.rating} />
        <div className="product-name">{props.name}</div>
        <div className="product-price">{`${props.price}`}</div>
      </Link>
    </>
  );
};

export default Product;
