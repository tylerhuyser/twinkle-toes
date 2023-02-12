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

  const [nameError, setNameError] = useState(false)
  const [descriptionError, setDescriptionError] = useState(false)
  const [priceError, setPriceError] = useState(false)
  const [admin_ratingError, setAdmin_RatingError] = useState(false)
  const [tagError, setTagError] = useState(false)
  const [imgURLError, setImgURLError] = useState(false)
  const [imgURL2Error, setImgURL2Error] = useState(false)
  const [imgURL3Error, setImgURL3Error] = useState(false)

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

  function validateForm(e) {
    e.preventDefault();

    if (product.name === "") {
      setNameError(true)
    }
    if (product.description === "") {
      setDescriptionError(true)
    }
    if (product.price === "") {
      setPriceError(true)
    }
    if (product.admin_rating === "") {
      setAdmin_RatingError(true)
    }
    if (product.tag === "") {
      setTagError(true)
    }
    if (product.imgURL === "") {
      setImgURLError(true)
    }
    if (product.imgURL2 === "") {
      setImgURL2Error(true)
    }
    if (product.imgURL3 === "") {
      setImgURL3Error(true)
    }
    if (nameError === false && descriptionError === false && priceError === false && admin_ratingError === false && tagError === false && imgURLError === false && imgURL2Error === false && imgURL3Error === false) {
      handleSubmit(e);
    }
  };

  return (

    <div
    className="edit-products-modual-container">
      
      <div className="floater"></div>


    <div className="edit-modual-header">
      <h5
        className="edit-product-title"
      >
          Edit Product
      </h5>
        
        <i className="fas fa-times" style={{
        
          fontSize: "48px",
          margin: "20px 0px",

      }} onClick={changeVisibility}></i>
        
    </div>

      <div className="edit-product-container">
        
      <div className="product-images-container-edit">

        <div
            className="primary-product-image-edit-container">
            
          <img
            className="primary-product-image-preview-edit"
            src={product.imgURL}
            alt="primary-edit"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://www.flaticon.com/svg/static/icons/svg/1103/1103496.svg";
              }} />
            
        </div>

        <div
            className="alternate-product-images-container-edit">
            
          <img
            className="product-image-preview-edit"
            src={product.imgURL}
            alt="1"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://www.flaticon.com/svg/static/icons/svg/1837/1837526.svg";
            }}/>

          <img
            className="product-image-preview-edit"
            src={product.imgURL2}
            alt="2"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://www.flaticon.com/svg/static/icons/svg/1837/1837526.svg";
            }}/>

          <img
            className="product-image-preview-edit"
            src={product.imgURL3}
            alt="3"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://www.flaticon.com/svg/static/icons/svg/1837/1837526.svg";
            }}/>
        </div>
      </div>

      <form
        className="edit-product-info-form"
        onSubmit={validateForm}>
        <h4
          className="edit-info-title"
        >
          EDIT PRODUCT INFO
        </h4>

        <input
          className={nameError ? "edit-name invalid" : "edit-name valid"}
          placeholder="Product Name"
          value={product.name}
          name="name"
          required
          onChange={handleChange}
          type="text"
          style={{
            fontFamily: "Roboto",
            fontSize: "18px",
            color: "#5F2758",
            fontWeight: "300",
            textAlign: "left",

            width: "100%",

            WebkitBoxShadow: "0 5px 5px -6px lightgray",
            MozBoxShadow: "0 5px 5px -6px lightgray",
            boxShadow: "0 5px 5px -6px lightgray",
          }}
        />

        <input
          className={priceError ? "edit-price invalid" : "edit-price valid"}
          placeholder="Product Price"
          value={product.price}
          name="price"
          required
          onChange={handleChange}
          style={{
            fontFamily: "Roboto",
            fontSize: "18px",
            color: "#5F2758",
            fontWeight: "300",
            textAlign: "left",

            width: "100%",

            WebkitBoxShadow: "0 5px 5px -6px lightgray",
            MozBoxShadow: "0 5px 5px -6px lightgray",
            boxShadow: "0 5px 5px -6px lightgray",
          }}
        />

        <textarea
          className={descriptionError ? "edit-description invalid" : "edit-description valid"}
          rows={10}
          placeholder="Product Description..."
          value={product.description}
          name="description"
          required
          onChange={handleChange}
          style={{
            fontFamily: "Roboto",
            fontSize: "18px",
            color: "#5F2758",
            fontWeight: "300",
            textAlign: "left",

            width: "100%",
 
            WebkitBoxShadow: "0 5px 5px -6px lightgray",
            MozBoxShadow: "0 5px 5px -6px lightgray",
            boxShadow: "0 5px 5px -6px lightgray",
          }}
        />

        <input
          className={admin_ratingError ? "edit-rating invalid" : "edit-rating valid"}
          placeholder="Product Rating (1-5)..."
          value={product.admin_rating}
          name="admin_rating"
          required
          onChange={handleChange}
          type="number"
          max="5"
          min="0"
          style={{
            fontFamily: "Roboto",
            fontSize: "18px",
            color: "#5F2758",
            fontWeight: "300",
            textAlign: "left",

            width: "100%",
 
            WebkitBoxShadow: "0 5px 5px -6px lightgray",
            MozBoxShadow: "0 5px 5px -6px lightgray",
            boxShadow: "0 5px 5px -6px lightgray",
          }}
        />

        <select
          name="edit-tag"
          placeholder="Product Tag"
          className={tagError ? "edit-tag invalid" : "edit-tag valid"}
          onChange={handleChange}
          value={product.tag}
          style={{
            fontFamily: "Roboto",
            fontSize: "18px",
            color: "#5F2758",
            backgroundColor: "transparent",
            fontWeight: "300",
            textAlign: "left",

            width: "100%",
 
            WebkitBoxShadow: "0 5px 5px -6px lightgray",
            MozBoxShadow: "0 5px 5px -6px lightgray",
            boxShadow: "0 5px 5px -6px lightgray",
          }}
        >
          <option disabled value="">
            Product Tag
          </option>
          <option value="street">Street</option>
          <option value="formal">Formal</option>
        </select>

        <h4
          className="edit-images-title"
        >
          PRODUCT IMAGES
        </h4>

        <input
          className={imgURLError ? "edit-image-link invalid" : "edit-image-link valid"}
          placeholder="Primary Preview Link"
          value={product.imgURL}
          name="imgURL"
          required
          onChange={handleChange}
          type="text"
          style={{
            fontFamily: "Roboto",
            fontSize: "18px",
            color: "#5F2758",
            fontWeight: "300",
            textAlign: "left",

            width: "100%",

            WebkitBoxShadow: "0 5px 5px -6px lightgray",
            MozBoxShadow: "0 5px 5px -6px lightgray",
            boxShadow: "0 5px 5px -6px lightgray",
          }}
        />

        <input
          className={imgURL2Error ? "edit-image-link invalid" : "edit-image-link valid"}
          placeholder="Image Link"
          value={product.imgURL2}
          name="imgURL2"
          required
          onChange={handleChange}
          style={{
            fontFamily: "Roboto",
            fontSize: "18px",
            color: "#5F2758",
            fontWeight: "300",
            textAlign: "left",

            width: "100%",

            WebkitBoxShadow: "0 5px 5px -6px lightgray",
            MozBoxShadow: "0 5px 5px -6px lightgray",
            boxShadow: "0 5px 5px -6px lightgray",
          }}
        />

        <input
          className={imgURL3Error ? "edit-image-link invalid" : "edit-image-link valid"}
          placeholder="Image Link"
          value={product.imgURL3}
          name="imgURL3"
          required
          onChange={handleChange}
          style={{
            fontFamily: "Roboto",
            fontSize: "18px",
            color: "#5F2758",
            fontWeight: "300",
            textAlign: "left",

            width: "100%",
 
            WebkitBoxShadow: "0 5px 5px -6px lightgray",
            MozBoxShadow: "0 5px 5px -6px lightgray",
            boxShadow: "0 5px 5px -6px lightgray",
          }}
        />

        <div
          className="button-container">
          <button
            className="edit-submit-buttons"
            onClick={validateForm}>
            Submit
          </button>

          <button
            className="edit-submit-buttons"
            onClick={changeVisibility}>
            Cancel
          </button>
        </div>
        </form>
        
    </div>
  </div>
  );
};

