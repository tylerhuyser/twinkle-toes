import React, { useState } from "react";
import './ReviewForm.css';

import { updateProduct } from "../../services/products.js";

const ReviewForm = (props) => {
  const { product, id } = props;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setReview({
      ...review,
      [name]: value,
    });
  };

  const [review, setReview] = useState({
    author: "",
    rating: "",
    description: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    product.reviews.push(review);
    await updateProduct(id, product);
    props.loadUpdate();
  };

  return (
    <form
      className="review-create-form"
      onSubmit={(e) => handleSubmit(e)}
    >
      <h5
        className="review-form-title"
        style={{
          fontFamily: "Roboto",
          fontSize: "18px",
          color: "#5F2758",
          letterSpacing: "0.9px",
          textAlign: "left",
          fontWeight: "300",

          width: "100%",
          margin: "25px 0px 25px 0px",
        }}
      >
        THOUGHTS?
      </h5>

      <input
        className="review-input-author"
        placeholder="Name..."
        value={review.author}
        name="author"
        required
        autoFocus
        onChange={(e) => handleChange(e)}
        style={{
          fontFamily: "Roboto",
          fontSize: "18px",
          color: "#5F2758",
          fontWeight: "300",
          textAlign: "left",

          width: "100%",
          border: "none",

          margin: "5px",
          WebkitBoxShadow: "0 5px 5px -6px lightgray",
          MozBoxShadow: "0 5px 5px -6px lightgray",
          boxShadow: "0 5px 5px -6px lightgray",
        }}
      />
      <input
        className="review-input-rating"
        placeholder="Rating (1-5)..."
        value={review.rating}
        name="rating"
        required
        onChange={(e) => handleChange(e)}
        style={{
          fontFamily: "Roboto",
          fontSize: "18px",
          color: "#5F2758",
          fontWeight: "300",
          textAlign: "left",

          width: "100%",
          border: "none",

          margin: "5px",
          WebkitBoxShadow: "0 5px 5px -6px lightgray",
          MozBoxShadow: "0 5px 5px -6px lightgray",
          boxShadow: "0 5px 5px -6px lightgray",
        }}
      />
      <textarea
        className="review-textarea-description"
        rows={10}
        placeholder="Leave a review..."
        value={review.description}
        name="description"
        required
        onChange={(e) => handleChange(e)}
        style={{
          fontFamily: "Roboto",
          fontSize: "18px",
          color: "#5F2758",
          fontWeight: "300",
          textAlign: "left",

          width: "100%",
          border: "none",
          flexGrow: "1",

          margin: "5px",

          WebkitBoxShadow: "0 5px 5px -6px lightgray",
          MozBoxShadow: "0 5px 5px -6px lightgray",
          boxShadow: "0 5px 5px -6px lightgray",
        }}
      />
      <button
        type="submit"
        className="review-submit-button"
        onSubmit={handleSubmit}
        style={{
          background: "#DB93D3",
          width: "20vw",
          height: "35px",
          borderRadius: "15px",
          margin: "50px auto",

          color: "#FFFFFF",
          fontFamily: "Source Sans Pro",
          fontSize: "18px",
          textAlign: "center",
          letterSpacing: "0.75px",
          border: "none",

          cursor: "pointer",
          
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default ReviewForm;
