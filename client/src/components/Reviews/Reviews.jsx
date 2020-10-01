import React from 'react';
import './Reviews.css';

import ReviewForm from "../ReviewForm/ReviewForm";
import StarRating from '../StarRating/StarRating';


const Reviews = (props) => {
    
  const { reviews } = props
    
  const REVIEW = reviews.map((review, idx) => {
    

    return (
      <div className="review-container" key={idx} style={{
          
        // Visual Properties:
        width: "45vw",
        // padding: "10px 10px",
                          
        // Container Properties:
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
    
      }}>

        <h4 className="review-author-name" style={{

          fontSize: "18px",
          letterSpacing: "0.9px",
          textAlign: "left",
          fontWeight: "300",

          width: "100%",
          marginTop: "0px",
                        
        }}>{review.author}</h4>
            
        <StarRating rating={review.rating} style={{
                
          margin: "5px",
          width: "100%",

          display: "flex",
          alignContent: "flex-start",
              
        }} />
            
        <h6 className="review-copy" style={{
                
          fontFamily: "Source Sans Pro",
          fontSize: "12px",
          color: "#5F2758",
          fontWeight: "500",
          textAlign: "left",
                
          marginBottom: "25px",
          paddingRight: "10px",
              
              
        }} >{review.description}</h6>
      </div>
    )
  })
  
  if (reviews.length === 0) {
    return (
      <>
        <div className="reviews-container" style={{
       
          width: "90vw",

          display: "flex",
          flexDirection: "column",
          color: "#5F2758",
          margin: "25px",
       
        }}>
          
        <h5 className="review-title" style={{
        
          fontFamily: "Roboto",
          fontSize: "32px",
          color: "#9A7395",
          letterSpacing: "0.9px",
          textAlign: "left",
          fontWeight: "300",
              
          margin: "20px 0px",
        
          }}>REVIEWS</h5>
          
          <div className="reviews-content" style={{

            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",

}}>
          <div>No Reviews for this Product</div>
          
          <ReviewForm product={props.product} id={props.id} />
          </div>
        </div>
      </>
    )
  } else {
    return (
      <div className="reviews-container" style={{
       
        width: "90vw",

        display: "flex",
        flexDirection: "column",
        margin: "25px",
        
      }}>

        <h5 className="review-title" style={{
        
          fontFamily: "Roboto",
          fontSize: "32px",
          color: "#9A7395",
          letterSpacing: "0.9px",
          textAlign: "left",
          fontWeight: "300",
              
          margin: "20px 0px",
        
        }}>REVIEWS</h5>

        <div className="reviews-content" style={{

          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          
        }}>
          <div className="reviews-list" style={{
          
            // Visual Properties:
            width: "45vw",
            padding: "0px 10px",
            // padding: "10px 10px",
                        
            // Container Properties:
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
  
          }} >
            {REVIEW}
          </div>
          
          <ReviewForm product={props.product} id={props.id} />
        </div>
      </div>
    );
  };
}
export default Reviews;
