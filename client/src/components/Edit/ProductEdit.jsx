import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import './ProductEdit.css';
import { updateProduct } from '../../services/products.js';
import { set } from 'mongoose';

export default function ProductEdit(props) {

  const {
    imgURL,
    imgURL2,
    imgURL3,
    name,
    rating,
    price,
    description,
    id,
    changeVisibility,
    loadUpdate
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




  const handleSubmit = async (event) => {
    event.preventDefault()
    await updateProduct(id, product)
    loadUpdate()
  }


  return (

    <div>
      <form className="edit-container" onSubmit={handleSubmit}>
        <div>Primary Photo:
         <br />
          <input
            className="input-image-link"
            placeholder="Primary Preview Link"
            value={product.imgURL}
            name='imgURL'
            required
            onChange={handleChange}
            type='text'
          />
        </div>

        <div>Second Angle:
        <br />
          <input
            className="input-image-link"
            placeholder='Image Link'
            value={product.imgURL2}
            name='imgURL2'
            required
            onChange={handleChange}
          />
        </div>

        <div>Third Angle:
        <br />
          <input
            className="input-image-link"
            placeholder='Image Link'
            value={product.imgURL3}
            name='imgURL3'
            required
            onChange={handleChange}
          />
        </div>

        <div>Name:
        <br />
          <input
            className="input-name"
            placeholder='Product Name'
            value={product.name}
            name='name'
            required
            onChange={handleChange}
          />
        </div>

        <div>Price:
        <br />
          <input
            className="input-price"
            placeholder='Price'
            value={product.price}
            name='price'
            required
            onChange={handleChange}
          />
        </div>

        <div>Description:
        <br />
          <textarea
            className="textarea-description"
            rows={10}
            placeholder='Description'
            value={product.description}
            name='description'
            required
            onChange={handleChange}
          />
        </div>

        <div>Rating:
        <br />
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
        </div>

        <div className='edit-button-container'>
          <button type='submit' className="edit-update-button" onClick={(e) => handleSubmit(e)}>Update</button>
          <button type='cancel' className="edit-cancel-button" onClick={changeVisibility}>Cancel</button>
        </div>
      </form>
    </div>

  );
};
