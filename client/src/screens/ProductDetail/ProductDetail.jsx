import React, { useState, useEffect } from "react";
import { getProduct, deleteProduct } from "../../services/products";
import { useParams, useHistory } from "react-router-dom";
import Layout from "../../components/shared/Layout/Layout";
import ProductEdit from "../../components/Edit/ProductEdit.jsx";
import Reviews from "../../components/Reviews/Reviews";
import StarRating from '../../components/StarRating/StarRating';
import './ProductDetail.css';
import SimilarItems from "../../components/SimilarItems/SimilarItems.jsx";

const ProductDetail = (props) => {

  const { allProducts } = props;
  const [product, setProduct] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();
  const [editVisibility, setEditVisibility] = useState(false);
  const [isUpdated, setUpdated] = useState(false);
  const [primaryImage, setPrimaryImage] = useState("")
  const history = useHistory();

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct(id);
      setProduct(product);
      setPrimaryImage(product.imgURL)
      setLoaded(true);
      console.log("here 1")
      console.log({id})
    };
    fetchProduct();
    window.scrollTo(0, 0)
  }, [id]);

  const changeVisibility = (e) => {
    e.preventDefault();
    setEditVisibility(!editVisibility);
  };

  const loadUpdate = () => {
    setUpdated(!isUpdated);
  };

  // Documentation for below: https://www.freecodecamp.org/news/how-to-work-with-react-the-right-way-to-avoid-some-common-pitfalls-fc9eb5e34d9e/
  const loadDelete = async () => {
    await deleteProduct(product._id)
    console.log("here 2")
    history.push('/products')
  }


  //Documentation for code below ::: https://upmostly.com/tutorials/how-to-refresh-a-page-or-component-in-react#:~:text=If%20set%20to%20true%2C%20the,cached%20version%20of%20the%20page.&text=import%20React%20from%20'react'%3B,refreshPage%7D%3EClick%20to%20reload!\
  if (isUpdated) {
    window.location.reload(false);
  }

  if (!isLoaded) {
    return <div className="loader"></div>
  }

  return (

    <Layout
      handleChange={props.handleChange}
      handleSubmit={props.handleSubmit}>

      <div id="edit-products-modual" className={editVisibility ? "edit-visible" : "edit-hidden"}>

        <ProductEdit
          imgURL={product.imgURL}
          imgURL2={product.imgURL2}
          imgURL3={product.imgURL3}
          name={product.name}
          admin_rating={product.admin_rating}
          price={product.price}
          description={product.description}
          id={id}
          changeVisibility={changeVisibility}
          loadUpdate={loadUpdate}
        />

      </div>

      <div className="product-details-page-container" id={editVisibility ? "product-details-page-container-nonscroll" : "product-details-page-scrollable"}>

        <div className="product-details-container">

          <div className="product-detail-images-container">

            <div className="primary-product-image-container">

              <img className="primary-product-detail-image" src={primaryImage} alt="primary" />

            </div>

            <div className="alternate-product-detail-images">

              <img className="product-detail-image" src={product.imgURL} alt="1" onClick={() => setPrimaryImage(product.imgURL)}/>

              <img className="product-detail-image" src={product.imgURL2} alt="2" onClick={() => setPrimaryImage(product.imgURL2)}/>

              <img className="product-detail-image" src={product.imgURL3} alt="3" onClick={() => setPrimaryImage(product.imgURL3)}/>

            </div>

          </div>

          <div className="details-container">
            <div className="name" style={{

              fontFamily: "Roboto",
              fontSize: "18px",
              color: "#5F2758",
              fontWeight: "500",
              textAlign: "left",

              marginBottom: "10px",

            }} > {product.name}</div>

              <div className="star-rating-container" style={{

              width: "100%",
              display: "flex",
              justifyContent: "flex-start",

              }}>

                <StarRating rating={product.admin_rating} style={{

                  margin: "10px 0px 20px 0px",

                  }} />
              
            </div>

            <div className="price" style={{

              fontFamily: "Roboto",
              color: "#5F2758",
              fontWeight: "500",
              textAlign: "left",

              margin: "10px 0px"

            }} >{`$${product.price}`}</div>
            <div className="description" style={{

              fontFamily: "Source Sans Pro",
              color: "#5F2758",
              fontWeight: "500",
              textAlign: "left",

              marginBottom: "5px",

            }} >{product.description}</div>

            <div className="button-container">
              <button className="product-detail-buttons" id="edit-button" onClick={(e) => changeVisibility(e)}>Edit</button>
              <button className="product-detail-buttons" id="delete-button" onClick={() => loadDelete(product.id)}>Delete</button>
            </div>
          </div>
        </div>

        {allProducts.length > 1 ?
        
          <div className="similar-items-container">
            <h5 style={{

              fontSize: "36px",
              color: "rgb(154, 115, 149)",
              letterSpacing: "0.9px",
              textAlign: "left",
              fontWeight: "300",
              
            }}>SIMILAR ITEMS</h5>
          
            <div className="similar-items-carousel">
            
              <SimilarItems allProducts={allProducts} tag={product.tag} id={id} />
            
            </div>

          </div>
          
          :
          
          <div className="no-similar-products"></div>
          
        }
        
          <Reviews reviews={product.reviews} product={product} id={id} loadUpdate={loadUpdate} />
        
        </div>
      
        </Layout>
    );
};

export default ProductDetail;
