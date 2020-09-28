import React, { useState } from 'react'
import './ProductCreate.css'
import Layout from '../../components/shared/Layout/Layout'
import { Redirect } from 'react-router-dom'
import { createProduct } from '../../services/products'

const ProductCreate = (props) => {

  const [product, setProduct] = useState({
    name: "",
    imgURL: "",
    imgURL2: "",
    imgURL3: "",
    description: "",
    price: "",
    rating: "",
    reviews: [{
      author: String,
      rating: Number,
      description: String
    }]
  });

  const [isCreated, setCreated] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setProduct({
      ...product,
      [name]: value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const created = await createProduct(product)
    setCreated({ created })
  }
  console.log(product)
  if (isCreated) {
    return <Redirect to={`/products`} />
  }
  return (
    <Layout user={props.user}>
      <form className="create-form" onSubmit={handleSubmit}>
        <input
          className="input-image-link"
          placeholder="Primary Preview Link"
          value={product.imgURL}
          name='imgURL'
          required
          onChange={handleChange}
          type='text'
        />
        <input
          className="input-image-link"
          placeholder='Image Link'
          value={product.imgURL2}
          name='imgURL2'
          required
          onChange={handleChange}
        />
        <input
          className="input-image-link"
          placeholder='Image Link'
          value={product.imgURL3}
          name='imgURL3'
          required
          onChange={handleChange}
        />
        <input
          className="input-name"
          placeholder='Product Name'
          value={product.name}
          name='name'
          required
          autoFocus
          onChange={handleChange}
        />
        <input
          className="input-price"
          placeholder='Price'
          value={product.price}
          name='price'
          required
          onChange={handleChange}
        />
        <textarea
          className="textarea-description"
          rows={10}
          placeholder='Description'
          value={product.description}
          name='description'
          required
          onChange={handleChange}
        />
        <input
          className="input-rating"
          placeholder='Rated _/5'
          value={product.rating}
          name='rating'
          required
          onChange={handleChange}
          type='number'
        />
        <div className="review-container">Initial Review
        <input
            className="review-author"
            placeholder='Author'
            value={product.reviews.author}
            name='review-author'
            required
            onChange={handleChange}
          />
          <input
            className="review-rating"
            placeholder='Rated _/5'
            value={product.reviews.rating}
            name='review-rating'
            required
            onChange={handleChange}
          />
          <textarea
            className="review-description"
            rows={5}
            placeholder='Your opinion of these shoes.'
            value={product.reviews.description}
            name='review-description'
            required
            onChange={handleChange}
          />


        </div>

        <button type='submit' className="submit-button">SUBMIT</button>
      </form>
    </Layout>
  )
}

export default ProductCreate