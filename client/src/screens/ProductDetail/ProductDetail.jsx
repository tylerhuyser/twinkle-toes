import React, { useState, useEffect } from "react";
import { getProduct, deleteProduct } from "../../services/products";
import { useParams, Redirect } from "react-router-dom";

import Layout from "../../components/shared/Layout/Layout";
import ProductEdit from "../../components/Edit/ProductEdit.jsx";
import Reviews from "../../components/Reviews/Reviews";
import StarRating from '../../components/StarRating/StarRating';

import './ProductDetail.css';

const ProductDetail = (props) => {


    const [product, setProduct] = useState(null);
    const [isLoaded, setLoaded] = useState(false);
    const { id } = useParams();
    const [editVisibility, setEditVisibility] = useState(false);
    const [isUpdated, setUpdated] = useState(false);

    
    const [primaryImage, setPrimaryImage] = useState("") 
    
    useEffect(() => {
        const fetchProduct = async () => {
            const product = await getProduct(id);
            setProduct(product);
            setPrimaryImage(product.imgURL)
            console.log(product)
            setLoaded(true);
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

      <div id="edit-box" className={editVisibility ? "edit-visible" : "edit-hidden"} style={{

        position: "fixed",
        top: "50",
        left: '50',

      }}>
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

      <div className="product-details-page-container" style={{
        
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",

      }}>

        <div className="product-details-container" style={{
          
          // Visual Props:
          // minHeight: "80vh",
          margin: "20px 0px",
          
          // Container Properties:
          display: "flex",

          // Item Properties:
          flexGrow: '1',
          
          }}>

          <div className="product-detail-images-container" style={{
              
            // Visual Properties:
            width: "45vw",
            // padding: "10px 10px",
            
              // Container Properties:
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            
            }}>
            
            <div className="primary-product-image-container" style={{

              width: "35vw",
              
              backgroundColor: "#F7ECEC",
              border: "3px solid #D091C9",
              borderRadius: "12px",
              padding: "0px 10px",

              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              
              }}>
            
              <img className="primary-product-detail-image" src={primaryImage} alt="primary-image" style={{
                

                borderRadius: "12px",
                maxWidth: "30vw",
                height: "30vw",
                objectFit: "cover",
                // objectPosition: "50% 95%",
                margin: "20px 10px",
              
                }} />
            
            </div>

            <div className="alternate-product-detail-images" style={{
              
              width: "35vw",

              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              margin: "10px 0px"
            }}>
              
              <img className="product-detail-image" src={product.imgURL} alt="image-1" onClick={() => setPrimaryImage(product.imgURL)} style={{
                  
                width: "9vw",
                maxHeight: "6vw",

                objectFit: "cover",
                objectPosition: "50% 95%",

                border: "2px solid #D091C9",
                borderRadius: "12px",
                padding: "0px 0px 5px 0px",
                
                }} />
              
                <img className="product-detail-image" src={product.imgURL2} alt="image-2" onClick={() => setPrimaryImage(product.imgURL2)} style={{
                  
                  width: "9vw",
                  maxHeight: "6vw",
  
                  objectFit: "cover",
                  objectPosition: "50% 95%",
  
                  border: "2px solid #D091C9",
                  borderRadius: "12px",
                  padding: "0px 0px 5px 0px",
                  
                  }} />
              
                <img className="product-detail-image" src={product.imgURL3} alt="image-3" onClick={() => setPrimaryImage(product.imgURL3)} style={{
                  
                  width: "10vw",
                  maxHeight: "6vw",
  
                  objectFit: "cover",
                  objectPosition: "50% 95%",
  
                  border: "2px solid #D091C9",
                  borderRadius: "12px",
                  padding: "0px 0px 5px 0px",
                  
                  }} />
              
              </div>

            </div>

          <div className="details-container" style={{
              
             // Visual Properties:
            width: "45vw",
            padding: "20px 10px",
            
            // Container Properties:
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            
            }}>
              <div className="name" style={{
                
                fontFamily: "Roboto",
                fontSize: "18px", 
                color: "#5F2758",
                fontWeight: "500",
                textAlign: "left",
                
                marginBottom: "5px",
              
              }} > {product.name}</div>
            
            <StarRating rating={product.rating} style={{
                
                margin: "5px",
              
              }} />
            
              <div className="price" style={{
                
                fontFamily: "Roboto",
                color: "#5F2758",
                fontWeight: "500",
                textAlign: "left",
                
                marginBottom: "5px",
              
              }} >{`${product.price}`}</div>
              <div className="description"  style={{
                
                fontFamily: "Source Sans Pro",
                color: "#5F2758",
                fontWeight: "500",
                textAlign: "left",
                
                marginBottom: "5px",
              
              }} >{product.description}</div>
            
            <div className="button-container" style={{
              
              width: "45vw",

              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",

              }}>
                <button className="edit-button" onClick={(e) => changeVisibility(e)} style={{
                  
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

                }}>Edit</button>
                <button className="delete-button" onClick={() => deleteProduct(product._id)} style={{
                  
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

                }}>Delete</button>
              </div>
            </div>
        </div>

        <div className="similarItems" style={{
            
          width: "90vw",
          display: "flex",
          flexDirection: "column",
          margin: "25px",
          
          }}>
            <h5 style={{
             
            fontFamily: "Roboto", 
            fontSize: "32px",  
            color: "#9A7395",
            letterSpacing: "0.9px",
            textAlign: "left",
            fontWeight: "300",
            margin: "0px",

            }}>SIMILAR ITEMS</h5>
          
            <div className="similar-items-carousel" style={{
             
              display: "flex",
              justifyContent: "space-between",
              
            }}>
            
            </div>

        </div>
        
          <Reviews reviews={product.reviews} product={product} id={id} />
        
        </div>
      
        </Layout>
    );
};

export default ProductDetail;
