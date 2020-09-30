import React, { useState, useEffect } from "react";
import Reviews from "../../components/Reviews/Reviews";
import "./ProductDetail.css";
import Layout from "../../components/shared/Layout/Layout";
import { getProduct, deleteProduct } from "../../services/products";
import { useParams, Redirect } from "react-router-dom";
import ProductEdit from "../../components/Edit/ProductEdit.jsx";
import SimilarItems from "../../components/SimilarItems/SimilarItems.jsx";

const ProductDetail = (props) => {
  const { allProducts, setAllProducts } = props;
  const [product, setProduct] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();
  const [editVisibility, setEditVisibility] = useState(false);
  const [isUpdated, setUpdated] = useState(false);
  const [review, setReview] = useState({
    author: '',
    rating: '',
    description: ''
  })

  const [primaryImage, setPrimaryImage] = useState("")

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct(id);
      setProduct(product);
      setLoaded(true);
      setPrimaryImage(product.imgURL)
    };
    fetchProduct();
  }, [id]);

  const changeVisibility = (e) => {
    e.preventDefault();
    setEditVisibility(!editVisibility);
  };

  const loadUpdate = () => {
    setUpdated(!isUpdated);
  };

  //Documentation for code below ::: https://upmostly.com/tutorials/how-to-refresh-a-page-or-component-in-react#:~:text=If%20set%20to%20true%2C%20the,cached%20version%20of%20the%20page.&text=import%20React%20from%20'react'%3B,refreshPage%7D%3EClick%20to%20reload!\
  if (isUpdated) {
    window.location.reload(false);
  }

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }


  return (

    <Layout
      handleChange={props.handleChange}
      handleSubmit={props.handleSubmit}>
      <div className="product-details-wrapper">
        {/* styles product images, buttons,description etc.. */}
        <div id="edit-box" className={editVisibility ? "edit-visible" : "edit-hidden"}>
          <ProductEdit
            imgURL={product.imgURL}
            imgURL2={product.imgURL2}
            imgURL3={product.imgURL3}
            name={product.name}
            rating={product.rating}
            price={product.price}
            description={product.description}
            id={id}
            changeVisibility={changeVisibility}
            loadUpdate={loadUpdate}
          />
        </div>

        <div className="product-detail">

          <img className="primary-product-detail-image" src={primaryImage} alt="primary-image" />

          <div className="product-detail-images">

            <div className="product-detail-image-container">
              <img
                className="product-detail-image"
                src={product.imgURL}
                alt="image-1"
                onClick={() => setPrimaryImage(product.imgURL)}
              />
            </div>
            <div className="product-detail-image-container">
              <img
                className="product-detail-image"
                src={product.imgURL2}
                alt="image-2"
                onClick={() => setPrimaryImage(product.imgURL2)}
              />
            </div>
            <div className="product-detail-image-container">
              <img
                className="product-detail-image"
                src={product.imgURL3}
                alt="image-3"
                onClick={() => setPrimaryImage(product.imgURL3)}
              />
            </div>
          </div>

          <div className="detail">
            <div className="name">{product.name}</div>
            <div className="rating">{product.admin_rating}</div>
            <div className="price">{`${product.price}`}</div>
            <div className="description">{product.description}</div>
            <div className="button-container">
              <button
                className="edit-button"
                onClick={(e) => changeVisibility(e)}
              >
                EDIT
              </button>
              <button
                className="delete-button"
                onClick={() => deleteProduct(product._id)}
              >
                DELETE
              </button>
            </div>
          </div>
          <div className="similarItems">
            <h5>SIMILAR ITEMS</h5>

          </div>
          <Reviews reviews={product.reviews} />
        </div>
      </div>

      <div className="similarItems">
        <h5>SIMILAR ITEMS</h5>
        <SimilarItems allProducts={allProducts} tag={product.tag} id={id} />
      </div>
      <Reviews reviews={product.reviews} product={product} id={id} />
    </Layout>
  );
};

export default ProductDetail;
