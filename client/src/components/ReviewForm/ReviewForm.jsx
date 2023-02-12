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
    <form className="review-create-form" onSubmit={(e) => handleSubmit(e)}>
      <h5
        className="review-form-title"
      >
        THOUGHTS?
      </h5>

      <input
        className="review-input-author"
        placeholder="Name..."
        value={review.author}
        name="author"
        required
        onChange={(e) => handleChange(e)}
        style={{

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
          WebkitBoxShadow: "0 5px 5px -6px lightgray",
          MozBoxShadow: "0 5px 5px -6px lightgray",
          boxShadow: "0 5px 5px -6px lightgray",
        }}
      />
      <button
        type="submit"
        className="review-submit-button"
        onSubmit={handleSubmit}
        >
        Submit
      </button>
    </form>
  );
};

export default ReviewForm;
