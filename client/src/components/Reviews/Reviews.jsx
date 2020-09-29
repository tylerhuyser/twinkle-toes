import React from 'react';

const Reviews = (props) => {
    console.log(props)
    const { reviews } = props
    console.log(reviews)
    const REVIEW = reviews.map((review, idx) => {
        // if(review.rating = 1 ) {
        //     return ///// using https://www.w3schools.com/howto/howto_css_star_rating.asp as a reference
        // }
        return (
            
                <div>
                    <h4 className="review" >{review.author}</h4>
                    <h6 className="review">{review.rating}</h6>
                    {console.log(review.description)}
                    <h6 className="review">{review.description}</h6> 
                </div>
                
            
        )
    })
    return (
        <div className="reviews">
            <h5>Reviews:</h5>
                {REVIEW}  
        </div>
    );
};

export default Reviews;