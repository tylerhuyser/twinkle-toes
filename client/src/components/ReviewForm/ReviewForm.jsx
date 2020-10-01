import React, { useState } from 'react'
import './ReviewForm.css'
import {updateProduct} from "../../services/products.js"

const ReviewForm = (props) => {
    const {product, id } = props

    const [product1, setProduct] = useState({
        name: '',
        description: '',
        imgURL: '',
        price: '',
        reviews: []
    })
    const handleChange = (event) => {
        const { name, value } = event.target
        setReview({
            ...review,
            [name]: value
        })
    }
    const [review, setReview] = useState({
        author: '',
        rating: '',
        description: ''
    })
    const handleSubmit = async (event) => {
        event.preventDefault()
        product.reviews.push(review)
        setProduct(product)
        await updateProduct(id, product)
    }
    //ref star rating and create star rating.
    return (
        <form className="review-create-form" onSubmit={(e) => handleSubmit(e)}>
            <input
                className="review-input-author"
                placeholder="Name"
                value={review.author}
                name='author'
                required
                autoFocus
                onChange={(e) =>  handleChange(e)}
            />
            <input
                className="review-input-rating"
                placeholder="Rating (1-5)"
                value={review.rating}
                name="rating"
                required
                onChange={(e) =>  handleChange(e)}
            />
            <textarea
                className="review-textarea-description"
                rows={10}
                placeholder="Write your review..."
                value={review.description}
                name="description"
                required
                onChange={(e) => handleChange(e)}
            />
            <button type='submit' className="review-submit-button" onSubmit={handleSubmit}>Submit</button>
        </form>
    )
}

export default ReviewForm