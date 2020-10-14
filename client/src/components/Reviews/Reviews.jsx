import React from 'react';
import './Reviews.css';

import ReviewForm from "../ReviewForm/ReviewForm";
import StarRating from '../StarRating/StarRating';


const Reviews = (props) => {
    
  const averageRating = props.product.rating;

  const { reviews } = props
    
  const REVIEW = reviews.map((review, idx) => {
    

    return (
      <div className="review-container" key={idx}>

        <h4 className="review-author-name">{review.author}</h4>

        <div className="star-rating-container-details">
            
          <StarRating rating={review.rating} />

        </div>
            
          <h6 className="review-copy">{review.description}</h6>

      </div>
    )
  })
  
  if (reviews.length === 0) {
    return (
      <>
        <div className="reviews-container">
          
        <h5 className="review-title">REVIEWS</h5>
          
          <div className="reviews-content">

            <div className="no-reviews-message">
              
              No Reviews for this Product.
               
          </div>
          
            <ReviewForm product={props.product} id={props.id} />
          </div>
        </div>
      </>
    )
  } else {
    return (
      <div className="reviews-container">

        <h5 className="review-title">REVIEWS</h5>

        <div className="reviews-content">

          <div className="reviews-list">

            <div className="average-reviews-star-rating-container-virtual">

              <p className="average-reviews-title">AVERAGE USER RATING:</p>
              
              <StarRating rating={averageRating} />

            </div>


              {REVIEW} 
            </div>
          
            <ReviewForm product={props.product} id={props.id} loadUpdate={props.loadUpdate} /> 
          </div>
      </div>
    );
  };
}
export default Reviews;
