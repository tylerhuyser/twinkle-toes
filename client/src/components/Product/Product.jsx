import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";

const Product = (props) => {
  
  const rating = props.rating

  function createReviewStars() {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars[i] =
          <i class="fas fa-star" style={{
            
          color: "pink",

        }}></i>
      }
      if (i >= rating) {
        stars[i] =
        <i class="fas fa-star"></i>
      }
    }
    return stars
  }
  
const reviewStars = createReviewStars()

  return (
    <>
      <Link className="product" to={`/products/${props._id}`}>
        <div className="product-image-container">
          <img className="product-image" src={props.imgURL} alt={props.name} />
        </div>
        <div className="product-rating">{reviewStars}</div>
        <div className="product-name">{props.name}</div>
        <div className="product-price">{`${props.price}`}</div>
      </Link>
    </>
  );
};

export default Product;
