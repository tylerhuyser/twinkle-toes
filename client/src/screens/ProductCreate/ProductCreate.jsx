import React, { useState } from 'react';
import './ProductCreate.css';
import Layout from '../../components/shared/Layout/Layout';
import { Redirect } from 'react-router-dom';
import { createProduct } from '../../services/products';

const ProductCreate = (props) => {

  const [product, setProduct] = useState({
    name: "",
    imgURL: "",
    imgURL2: "",
    imgURL3: "",
    description: "",
    price: "",
    rating: "",
    tag: "street",
    reviews: []
  });

  const [review, setReview] = useState({
    author: "",
    rating: "",
    description: ""
  });

  const [isCreated, setCreated] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setProduct({
      ...product,
      [name]: value
    })
  }

  const handleChange2 = (event) => {
    const { name, value } = event.target
    setReview({
      ...review,
      [name]: value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const created = await createProduct(product)
    setCreated({ created })
  }

  console.log(product)
  console.log(review)

  if (isCreated) {
    return <Redirect to={`/products`} />
  }
  return (
    <Layout user={props.user}
      handleChange={props.handleChange}
      handleSubmit={props.handleSubmit}>
      <div className="whole-page-container">
        <form className="create-form" onSubmit={handleSubmit}>
          Photos:
        <input
            className="create-image-link"
            placeholder="Primary Preview Link"
            value={product.imgURL}
            name='imgURL'
            required
            onChange={handleChange}
            type='text'
            autoFocus
          />
          <input
            className="create-image-link"
            placeholder='Image Link'
            value={product.imgURL2}
            name='imgURL2'
            required
            onChange={handleChange}
          />
          <input
            className="create-image-link"
            placeholder='Image Link'
            value={product.imgURL3}
            name='imgURL3'
            required
            onChange={handleChange}
          />
        Shoe Name:
        <input
            className="create-name"
            placeholder='Product Name'
            value={product.name}
            name='name'
            required
            onChange={handleChange}
          />
        Price:
        <input
            className="create-price"
            placeholder='Price'
            value={product.price}
            name='price'
            required
            onChange={handleChange}
          />
        Description:
        <textarea
            className="create-textarea-description"
            rows={10}
            placeholder='Description'
            value={product.description}
            name='description'
            required
            onChange={handleChange}
          />
        Rating:
        <input
            className="create-rating"
            placeholder='Rated _/5'
            value={product.rating}
            name='rating'
            required
            onChange={handleChange}
            type='number'
            max="5"
            min="0"
          />
        Tag/Type: (for similar products)
        <select name="tag"
            className="create-tag"
            onChange={handleChange}
            value={product.tag}>
            <option value="street">Street</option>
            <option value="formal">Formal</option>
          </select>
          <div className="create-review-container">Initial Review
        <input
              className="create-review-author"
              placeholder='Author'
              value={review.author}
              name='author'
              required
              onChange={handleChange2}
              type="text"
            />
            <input
              className="create-review-rating"
              placeholder='Rated _/5'
              value={review.rating}
              name='rating'
              required
              onChange={handleChange2}
              type="number"
              max="5"
              min="0"
            />
            <textarea
              className="create-review-description"
              rows={5}
              placeholder='Your opinion of these shoes.'
              value={review.description}
              name='description'
              required
              onChange={handleChange2}
              type="text"
            />


          </div>

          <button type='submit' className="create-submit-button">SUBMIT</button>
        </form>

        <div className="create-preview">
          Photos:
           <br />
          Main Photo
          <img className="create-img-preview" src={product.imgURL}></img>
          <br />
          <div className="create-img-angles">
            Second Angle
             <br />
            <img className="create-img-preview2" src={product.imgURL2}></img>
          Third Angle
            <br />
            <img className="create-img-preview2" src={product.imgURL3}></img>
          </div>
          <br />
          <br />
          <br />
          Name-{product.name}
          <br />
          Price-{product.price}
          <br />
          Description-{product.description}
          <br />
          Rating-{product.rating}
          <br />
          Tag-{product.tag}
          <br />
          <br />
        Review:
        <br />
          <br />
          Review Author-{review.author}
          <br />
          Review Rating-{review.rating}
          <br />
          Review Description-{review.description}
        </div>
      </div>
    </Layout>
  )
}

export default ProductCreate