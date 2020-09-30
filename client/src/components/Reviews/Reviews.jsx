import React from 'react';
import "./Reviews.css"
import ReviewForm from "../ReviewForm/ReviewForm"
const Reviews = (props) => {
    
    const { reviews } = props
    
    const REVIEW = reviews.map((review, idx) => {
    
        return (
                <div className="review-container" key={idx}>
                    <h4 className="review-name" >{review.author}</h4>
                    <h6 className="review-rating">{review.rating}</h6>
                    <h6 className="review-descr">{review.description}</h6> 
                </div>
        )
    })
    return (
        <div className="reviews">
            <h5 className="review-title">REVIEWS:</h5>
                {REVIEW} 
                <ReviewForm/> 
        </div>
    );
};

export default Reviews;