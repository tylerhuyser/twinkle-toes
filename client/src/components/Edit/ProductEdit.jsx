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
    className="edit-products-modual-container"
      style={{
      
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "white",
      minHeight: "80vh",
      minWidth: "100vw",
      maxWidth: "100vw",
      
    }}
    >
      
      <div className="floater" style={{

        minHeight: "100px",
        padding: "20px, 0px",
        width: "95vw",

      }}></div>


    <div className="edit-modual-header" style={{

      width: "95vw",
      height: "100px",
      padding: "20px 0px",
      backgroundColor: "white",
      position: "fixed",
      top: "0",
      zIndex: "9",
      
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",

    }}>
      <h5
        className="edit-product-title"
          style={{
          
          fontFamily: "Roboto",
          fontSize: "32px",
          color: "#9A7395",
          letterSpacing: "0.9px",
          textAlign: "left",
          fontWeight: "300",

          margin: "20px 0px",
          width: "80vw",
          flexGrow: "1",
        }}
      >
          Edit Product
      </h5>
        
        <i className="fas fa-times" style={{
        
          fontSize: "48px",
          margin: "20px 0px",

      }} onClick={changeVisibility}></i>
        
    </div>

    <div
      className="edit-product-container"
      style={{
        // Visual Props:
        // minHeight: "100vh",
        margin: "20px 0px",

        // Container Properties:
        display: "flex",
        flexDirection: "row",

        // Item Properties:
        flexGrow: "1",
      }}
    >
      <div
        className="product-images-container-edit"
          style={{
          
          // Visual Properties:
          width: "45vw",

          // Container Properties:
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",

        }}
      >
        <div
          className="primary-product-image-edit-container"
          style={{
            width: "35vw",

            backgroundColor: "#F7ECEC",
            border: "3px solid #D091C9",
            borderRadius: "12px",
            padding: "0px 10px",

            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            className="primary-product-image-preview-edit"
            src={product.imgURL}
            alt="primary-edit"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://www.flaticon.com/svg/static/icons/svg/1103/1103496.svg";
            }}
            style={{
              borderRadius: "12px",
              width: "30vw",
              height: "30vw",
              objectFit: "cover",
              objectPosition: "50% 55%",
              margin: "20px 10px",
            }}
          />
        </div>

        <div
          className="alternate-product-images-container-edit"
          style={{
            width: "35vw",

            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            margin: "10px 0px",
          }}
        >
          <img
            className="product-image-preview-edit"
            src={product.imgURL}
            alt="1"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://www.flaticon.com/svg/static/icons/svg/1837/1837526.svg";
            }}
            style={{
              minWidth: "10vw",
              minHeight: "6vw",

              maxWidth: "10vw",
              maxHeight: "6vw",

              objectFit: "contain",

              border: "2px solid #D091C9",
              borderRadius: "10px",
              margin: "20px 10px",
              padding: "5px 0px",
            }}
          />

          <img
            className="product-image-preview-edit"
            src={product.imgURL2}
            alt="2"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://www.flaticon.com/svg/static/icons/svg/1837/1837526.svg";
            }}
            style={{
              minWidth: "10vw",
              minHeight: "6vw",

              maxWidth: "10vw",
              maxHeight: "6vw",

              objectFit: "contain",
              // objectPosition: "50% 95%",

              border: "2px solid #D091C9",
              borderRadius: "10px",
              margin: "20px 10px",
              padding: "5px 0px",
            }}
          />

          <img
            className="product-detail-image-edit"
            src={product.imgURL3}
            alt="3"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://www.flaticon.com/svg/static/icons/svg/1837/1837526.svg";
            }}
            style={{
              minWidth: "10vw",
              minHeight: "6vw",

              maxWidth: "10vw",
              maxHeight: "6vw",

              objectFit: "contain",
              // objectPosition: "50% 95%",

              border: "2px solid #D091C9",
              borderRadius: "10px",
              margin: "20px 10px",
              padding: "5px 0px",
            }}
          />
        </div>
      </div>

      <form
        className="edit-product-info-form"
        onSubmit={validateForm}
        style={{
          // Visual Properties:
          width: "45vw",
          padding: "10px 10px 20px 10px",

          // Container Properties:
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <h4
          className="edit-info-title"
          style={{
            fontSize: "18px",
            letterSpacing: "0.9px",
            textAlign: "left",
            fontWeight: "300",

            width: "100%",
            margin: "0px 0px 25px 0px",
          }}
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
          autoFocus
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
          style={{
            fontSize: "18px",
            letterSpacing: "0.9px",
            textAlign: "left",
            fontWeight: "300",

            width: "100%",
            margin: "25px 0px",
          }}
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
          autoFocus
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
          className="button-container"
          style={{
            width: "45vw",

            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <button
            className="submit-button"
            onClick={validateForm}
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

          <button
            className="submit-button"
            onClick={changeVisibility}
            style={{
              background: "#DB93D3",
              width: "20vw",
              height: "35px",
              borderRadius: "15px",
              margin: "50px 0px",

              color: "#FFFFFF",
              fontFamily: "Source Sans Pro",
              fontSize: "18px",
              textAlign: "center",
              letterSpacing: "0.75px",
              border: "none",

              cursor: "pointer",

            }}
          >
            Cancel
          </button>
        </div>
        </form>
        
    </div>
  </div>
  );
};

