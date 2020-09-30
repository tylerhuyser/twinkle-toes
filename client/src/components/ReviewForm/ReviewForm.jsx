import React from 'react'
import './ReviewForm.css'

const ReviewForm = ({ author, rating, description, onChange, onSubmit }) => {
    return (
        <form className="review-create-form" onSubmit={(e) => onSubmit(e)}>
            <input
                className="review-input-author"
                placeholder="Name"
                value={author}
                name='author'
                required
                autoFocus
                onChange={(e) => onChange(e)}
            />
            <input
                className="review-input-rating"
                placeholder="Rating (1-5)"
                value={rating}
                name="rating"
                required
                onChange={(e) => onChange(e)}
            />
            <textarea
                className="review-textarea-description"
                rows={10}
                placeholder="Write your review..."
                value={description}
                name="description"
                required
                onChange={(e) => onChange(e)}
            />
            <button type='submit' className="review-submit-button">Submit</button>
        </form>
    )
}

export default ReviewForm