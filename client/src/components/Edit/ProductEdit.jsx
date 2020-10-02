import React, { useState } from 'react';
// import './ProductEdit.css';
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

    <div
    className="edit-products-module-container"
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "white",
      maxHeight: "100vh",
      overflow: "scroll",
    }}
  >
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
        marginLeft: "10vw",
        width: "90vw",
      }}
    >
      Edit Product
    </h5>

    <div
      className="edit-product-container"
      style={{
        // Visual Props:
        // minHeight: "80vh",
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
          // padding: "10px 10px",

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
            justifyContent: "space-between",
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
              width: "9vw",
              maxHeight: "6vw",

              objectFit: "contain",
              // objectPosition: "50% 50%",

              border: "2px solid #D091C9",
              borderRadius: "12px",
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
              width: "9vw",
              maxHeight: "6vw",

              objectFit: "contain",
              // objectPosition: "50% 95%",

              border: "2px solid #D091C9",
              borderRadius: "12px",
              padding: "0px 0px 5px 0px",
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
              width: "10vw",
              maxHeight: "6vw",

              objectFit: "contain",
              // objectPosition: "50% 95%",

              border: "2px solid #D091C9",
              borderRadius: "12px",
              padding: "0px 0px 5px 0px",
            }}
          />
        </div>
      </div>

      <form
        className="edit-product-info-form"
        onSubmit={handleSubmit}
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
          className="edit-name"
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
            border: "none",

            margin: "5px",
            WebkitBoxShadow: "0 5px 5px -6px lightgray",
            MozBoxShadow: "0 5px 5px -6px lightgray",
            boxShadow: "0 5px 5px -6px lightgray",
          }}
        />

        <input
          className="edit-price"
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
            border: "none",

            margin: "5px",
            WebkitBoxShadow: "0 5px 5px -6px lightgray",
            MozBoxShadow: "0 5px 5px -6px lightgray",
            boxShadow: "0 5px 5px -6px lightgray",
          }}
        />

        <textarea
          className="edit-textarea-description"
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
            border: "none",

            margin: "5px",
            WebkitBoxShadow: "0 5px 5px -6px lightgray",
            MozBoxShadow: "0 5px 5px -6px lightgray",
            boxShadow: "0 5px 5px -6px lightgray",
          }}
        />

        <input
          className="edit-rating"
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
            border: "none",

            margin: "5px",
            WebkitBoxShadow: "0 5px 5px -6px lightgray",
            MozBoxShadow: "0 5px 5px -6px lightgray",
            boxShadow: "0 5px 5px -6px lightgray",
          }}
        />

        <select
          name="edit-tag"
          placeholder="Product Tag"
          className="create-tag"
          onChange={handleChange}
          value={product.tag}
          style={{
            fontFamily: "Roboto",
            fontSize: "18px",
            color: "#5F2758",
            fontWeight: "300",
            textAlign: "left",

            width: "100%",
            border: "none",

            margin: "5px",
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
          className="edit-image-link"
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
            border: "none",

            margin: "5px",
            WebkitBoxShadow: "0 5px 5px -6px lightgray",
            MozBoxShadow: "0 5px 5px -6px lightgray",
            boxShadow: "0 5px 5px -6px lightgray",
          }}
        />

        <input
          className="edit-image-link-2"
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
            border: "none",

            margin: "5px",
            WebkitBoxShadow: "0 5px 5px -6px lightgray",
            MozBoxShadow: "0 5px 5px -6px lightgray",
            boxShadow: "0 5px 5px -6px lightgray",
          }}
        />

        <input
          className="edit-image-link-3"
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
            border: "none",

            margin: "5px",
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
            onClick={(e) => handleSubmit(e)}
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
            Cancel
          </button>
        </div>
        </form>
        
    </div>
  </div>


    // <div className="edit-not-a-page">
    //   <div className="edit-component">

    //     <form className="edit-container" onSubmit={handleSubmit}>
    //       <div id="edit-photos-column">
    //         <div className="edit-input">Display Photo:
    //           <br />
    //           <img
    //             className="edit-photo-main"
    //             alt='primary-display'
    //             src={product.imgURL}
    //             name='imgURL'
    //           />
    //           <br />
    //           <input
    //             className="edit-image-link"
    //             placeholder="Primary Preview Link"
    //             value={product.imgURL}
    //             name='imgURL'
    //             required
    //             onChange={handleChange}
    //             type='text'
    //           />
    //         </div>
    //         <div className="edit-photos-row">
    //           <div className="edit-input">Products Page Sees:
    //             <br />
    //             <img
    //               className="edit-photo-mini"
    //               alt='mini-primary-display'
    //               src={product.imgURL}
    //               name='imgURL'
    //             />
    //           </div>

    //           <div className="edit-input">Second Angle:
    //             <br />
    //             <img
    //               className="edit-photo-mini"
    //               alt='mini-2-display'
    //               src={product.imgURL2}
    //               name='imgURL2'
    //             />
    //             <br />
    //             <input
    //               className="edit-image-link"
    //               placeholder='Angle Two'
    //               value={product.imgURL2}
    //               name='imgURL2'
    //               required
    //               onChange={handleChange}
    //             />
    //           </div>

    //           <div className="edit-input">Third Angle:
    //             <br />
    //             <img
    //               className="edit-photo-mini"
    //               alt='mini-3-display'
    //               src={product.imgURL3}
    //               name='imgURL3'
    //             />
    //             <br />
    //             <input
    //               className="edit-image-link"
    //               placeholder='Image Link'
    //               value={product.imgURL3}
    //               name='imgURL3'
    //               required
    //               onChange={handleChange}
    //             />
    //           </div>
    //         </div>
    //       </div>

    //       <article id="edit-right-column">
    //         <div className="edit-input">Shoe Name:
    //         <br />
    //           <input
    //             className="edit-name"
    //             placeholder='Product Name'
    //             value={product.name}
    //             name='name'
    //             required
    //             autoFocus
    //             onChange={handleChange}
    //           />
    //         </div>

    //         <div className="edit-input">Rating:
    //         <br />
    //           <input
    //             className="edit-rating"
    //             placeholder='Rated _/5'
    //             value={product.admin_rating}
    //             name='admin_rating'
    //             required
    //             onChange={handleChange}
    //             type='number'
    //             max="5"
    //             min="0"
    //           />
    //         </div>

    //         <div className="edit-input">Price:
    //         <br />
    //           $<input
    //             className="edit-price"
    //             placeholder='Price'
    //             value={product.price}
    //             name='price'
    //             required
    //             onChange={handleChange}
    //           />
    //         </div>

    //         <div className="edit-input">Description:
    //         <br />
    //           <textarea
    //             className="edit-description"
    //             rows={10}
    //             placeholder='Description'
    //             value={product.description}
    //             name='description'
    //             required
    //             onChange={handleChange}
    //           />
    //         </div>
    //       </article>
    //       <div className='edit-button-container'>
    //         <button type='submit' className="edit-update-button" onClick={(e) => handleSubmit(e)}>Update</button>
    //         <button type='cancel' className="edit-cancel-button" onClick={changeVisibility}>Cancel</button>
    //       </div>

    //     </form>
    //   </div>
    // </div >
  );
};

