import React, { useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import './ProductEdit.css';
import { updateProduct } from '../../services/products.js';
import Layout from '../shared/Layout/Layout.jsx';

export default function ProductEdit(props) {

  const {
    imgURL,
    imgURL2,
    imgURL3,
    name,
    rating,
    price,
    description,
    id
  } = props;

  const handleChange = (e) => {
    const { name, value } = e.target
    setProduct({
      ...product,
      [name]: value
    })
  }

  const [product, setProduct] = useState({
    name: name,
    imgURL: imgURL,
    imgURL2: imgURL2,
    imgURL3: imgURL3,
    description: description,
    price: price,
    rating: rating
  })

  const [isUpdated, setUpdated] = useState(false)
  if (isUpdated) {
    return <Redirect to={`/products/${props.id}`} />
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const updated = await updateProduct(id, product)
    setUpdated(updated)
  }


  return (

    <div>
      <form className="edit-container" onSubmit={handleSubmit}>
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
          max="5"
          min="0"
        />
        <button type='submit' className="update-button">Update</button>
      </form>
    </div>

  );
};
