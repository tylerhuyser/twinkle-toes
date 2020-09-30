import React from 'react';
import { FaStar } from 'react-icons/fa'

const StarRating = (props) => {
  
  return (
    <div className="review-stars-container">
      {[...Array(5)].map((star, idx) => {
        if (idx < props.rating) {
          return (
            <span className="review-star" key={idx}><FaStar color="#F4A2B6" /></span>
          )
        } else {
          return (
            <span className="review-star" key={idx}><FaStar color="#C7C7CC" /></span>
          )
        }
      })}
    </div>
  );
};

export default StarRating;