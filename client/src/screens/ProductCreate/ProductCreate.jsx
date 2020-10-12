import React, { useState } from "react";
import "./ProductCreate.css";
import Layout from "../../components/shared/Layout/Layout";
import { Redirect } from "react-router-dom";
import { createProduct } from "../../services/products";

export default function ProductCreate(props) {

  const [product, setProduct] = useState({
    name: "",
    imgURL: "",
    imgURL2: "",
    imgURL3: "",
    description: "",
    price: "",
    admin_rating: "",
    tag: ""
  });

  const [nameError, setNameError] = useState(false)
  const [descriptionError, setDescriptionError] = useState(false)
  const [priceError, setPriceError] = useState(false)
  const [admin_ratingError, setAdmin_RatingError] = useState(false)
  const [tagError, setTagError] = useState(false)
  const [imgURLError, setImgURLError] = useState(false)
  const [imgURL2Error, setImgURL2Error] = useState(false)
  const [imgURL3Error, setImgURL3Error] = useState(false)

  const [isCreated, setCreated] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const created = await createProduct(product);
    setCreated({ created });
  };

  if (isCreated) {
    return <Redirect to={`/products`} />;
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
    <Layout
      user={props.user}
      handleChange={props.handleChange}
      handleSubmit={props.handleSubmit}
    >
      <div
        className="create-products-page-container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h5
          className="create-product-title"
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
          CREATE A NEW PRODUCT
        </h5>

        <div
          className="create-products-container"
          style={{
            // Visual Props:
            margin: "20px 0px",

            // Container Properties:
            display: "flex",
            flexDirection: "row",

            // Item Properties:
            flexGrow: "1",
          }}
        >
          <div
            className="product-detail-images-container"
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
              className="primary-product-image-upload-container"
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
              {product.imgURL === "" ? <i class="fas fa-upload primaryUploadIcon" style={{

                display: "flex",
                alignItems: "center",
                justifyContent: "center",

              }}></i> :

                <img
                  className="primary-product-detail-image-preview"
                  src={product.imgURL}
                  alt="primary"
                  // onError={(e) => {
                  //   e.target.onerror = null;
                  //   e.target.src =
                  //     "https://www.flaticon.com/svg/static/icons/svg/1103/1103496.svg";
                  // }}
                  style={{
                    borderRadius: "12px",
                    width: "30vw",
                    height: "30vw",
                    objectFit: "cover",
                    objectPosition: "50% 55%",
                    margin: "20px 10px",
                  }}
                />
              }
            </div>

            <div
              className="alternate-product-detail-images-container"
              style={{
                width: "35vw",

                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                margin: "10px 0px",
              }}
            >

              {product.imgURL === "" ? <i class="fas fa-upload miniUploadIcon" style={{

                display: "flex",
                alignItems: "center",
                justifyContent: "center",

              }}></i> :

                <img
                  className="product-detail-image-preview"
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
                    // objectPosition: "50% 95%",

                    border: "2px solid #D091C9",
                    borderRadius: "12px",
                    margin: "20px 10px",
                    padding: "5px 0px",
                  }}
                />
              }

              {product.imgURL2 === "" ? <i class="fas fa-upload miniUploadIcon" style={{

                display: "flex",
                alignItems: "center",
                justifyContent: "center",

              }}></i> :
        
                <img
                  className="product-detail-image-preview"
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
                    borderRadius: "12px",
                    margin: "20px 10px",
                    padding: "5px 0px",
                  }}
                />
              }

              {product.imgURL3 === "" ? <i class="fas fa-upload miniUploadIcon" style={{

                display: "flex",
                alignItems: "center",
                justifyContent: "center",

              }}></i> :

                <img
                  className="product-detail-image"
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
                    borderRadius: "12px",
                    margin: "20px 10px",
                    padding: "5px 0px",
                  }}
                />
              }
            </div>
          </div>

          <form
            className="create-new-product-form"
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
              className="review-author-name"
              style={{
                fontSize: "18px",
                letterSpacing: "0.9px",
                textAlign: "left",
                fontWeight: "300",

                width: "100%",
                margin: "0px 0px 25px 0px",
              }}
            >
              PRODUCT INFO
            </h4>

            <input
              className={nameError ? "create-name invalid" : "create-name valid"}
              placeholder="Product Name"
              value={product.name}
              name="name"
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
              className={priceError ? "create-price invalid" : "create-price valid"}
              placeholder="Product Price"
              value={product.price}
              name="price"
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
              className={descriptionError ? "create-description invalid" : "create-description valid"}
              rows={10}
              placeholder="Product Description..."
              value={product.description}
              name="description"
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
              className={admin_ratingError ? "create-rating invalid" : "create-rating valid"}
              placeholder="Product Rating (1-5)..."
              value={product.admin_rating}
              name="admin_rating"
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
              name="tag"
              placeholder="Product Tag"
              className={tagError ? "create-tag invalid" : "create-tag valid"}
              onChange={handleChange}
              value={product.tag}
              style={{
                fontFamily: "Roboto",
                fontSize: "18px",
                color: "gray",
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
              className="product-image-links-title"
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
              className={imgURLError ? "create-image-link invalid" : "create-image-link valid"}
              placeholder="Primary Preview Link"
              value={product.imgURL}
              name="imgURL"
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
              className={imgURL2Error ? "create-image-link invalid" : "create-image-link valid"}
              placeholder="Image Link"
              value={product.imgURL2}
              name="imgURL2"
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
              className={imgURL3Error ? "create-image-link invalid" : "create-image-link valid"}
              placeholder="Image Link"
              value={product.imgURL3}
              name="imgURL3"
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
                onSubmit={validateForm}
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
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
