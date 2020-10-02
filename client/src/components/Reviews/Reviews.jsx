import React from 'react';
import './Reviews.css';

import ReviewForm from "../ReviewForm/ReviewForm";
import StarRating from '../StarRating/StarRating';


const Reviews = (props) => {
    
  const averageRating = props.product.rating;

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
          margin: "25px",
                        
        }}>{review.author}</h4>

        <div className="star-rating-container" style={{

          width: "100%",

          display: "flex",
          alignContent: "flex-start",

        }}>
            
          <StarRating rating={review.rating} />

        </div>
            
        <h6 className="review-copy" style={{
                
          fontFamily: "Source Sans Pro",
          fontSize: "12px",
          color: "#5F2758",
          fontWeight: "500",
          textAlign: "left",
                
          margin: "5px 0px 25px 0px",
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
            // padding: "0px 25px",

          }}>
            <div className="no-reviews-message" style={{

              fontSize: "18px",
              letterSpacing: "0.9px",
              textAlign: "left",
              fontWeight: "300",
    
              width: "100%",
              margin: "25px 0px",
                            
            }}>
              
              No Reviews for this Product.
               
          </div>
          
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
            // padding: "0px 25px",
            // padding: "10px 10px",
                        
            // Container Properties:
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
  
          }} >

            <div className="average-reviews-star-rating-container-virtual" style={{

            width: "100%",

            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",

            }}>

              <p className="average-reviews-title" style={{

                fontFamily: "Roboto",
                fontSize: "18px",
                color: "#5F2758",
                fontWeight: "300",
                
              }}>Average User Rating:</p>
              
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
