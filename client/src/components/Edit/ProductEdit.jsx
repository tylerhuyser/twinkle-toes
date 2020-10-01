import React, { useState } from 'react';
import './ProductEdit.css';
import { updateProduct } from '../../services/products.js';

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
    <div className="edit-not-a-page">
      <div className="edit-component">

        <form className="edit-container" onSubmit={handleSubmit}>
          <div id="edit-photos-column">
            <div className="edit-input">Display Photo:
              <br />
              <img
                className="edit-photo-main"
                alt='This is the display photo.'
                src={product.imgURL}
                name='imgURL'
              />
              <br />
              <input
                className="edit-image-link"
                placeholder="Primary Preview Link"
                value={product.imgURL}
                name='imgURL'
                required
                onChange={handleChange}
                type='text'
              />
            </div>
            <div className="edit-photos-row">
              <div className="edit-input">Products Page Sees:
                <br />
                <img
                  className="edit-photo-mini"
                  alt='This is the display photo.'
                  src={product.imgURL}
                  name='imgURL'
                />
              </div>

              <div className="edit-input">Second Angle:
                <br />
                <img
                  className="edit-photo-mini"
                  alt='Angle Two.'
                  src={product.imgURL2}
                  name='imgURL2'
                />
                <br />
                <input
                  className="edit-image-link"
                  placeholder='Angle Two'
                  value={product.imgURL2}
                  name='imgURL2'
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="edit-input">Third Angle:
                <br />
                <img
                  className="edit-photo-mini"
                  alt='Angle Three.'
                  src={product.imgURL3}
                  name='imgURL3'
                />
                <br />
                <input
                  className="edit-image-link"
                  placeholder='Image Link'
                  value={product.imgURL3}
                  name='imgURL3'
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <article id="edit-right-column">
            <div className="edit-input">Shoe Name:
            <br />
              <input
                className="edit-name"
                placeholder='Product Name'
                value={product.name}
                name='name'
                required
                autoFocus
                onChange={handleChange}
              />
            </div>

            <div className="edit-input">Rating:
            <br />
              <input
                className="edit-rating"
                placeholder='Rated _/5'
                value={product.admin_rating}
                name='admin_rating'
                required
                onChange={handleChange}
                type='number'
                max="5"
                min="0"
              />
            </div>

            <div className="edit-input">Price:
            <br />
              <input
                className="edit-price"
                placeholder='Price'
                value={product.price}
                name='price'
                required
                onChange={handleChange}
              />
            </div>

            <div className="edit-input">Description:
            <br />
              <textarea
                className="edit-description"
                rows={10}
                placeholder='Description'
                value={product.description}
                name='description'
                required
                onChange={handleChange}
              />
            </div>
          </article>
          <div className='edit-button-container'>
            <button type='submit' className="edit-update-button" onClick={(e) => handleSubmit(e)}>Update</button>
            <button type='cancel' className="edit-cancel-button" onClick={changeVisibility}>Cancel</button>
          </div>

        </form>
      </div>
    </div >
  );
};

