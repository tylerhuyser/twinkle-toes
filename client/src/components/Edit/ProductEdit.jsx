import React, { useState } from 'react';
import { updateProduct } from '../../services/products.js';
// import { set } from 'mongoose';

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

    <div className="edit-container" style={{

      // Visual Properties:
      backgroundColor: "rgba(255,255,255,.8)",
      width: "100vw",
      minHeight: "100vh",
      // padding: "10px 10px",
                            
      // Container Properties:
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "0px 10px",
      
       }}>

      <form className="edit-form" onSubmit={handleSubmit} style={{

          backgroundColor: "white",
          width: "100vw",
          // padding: "10px 10px",
                                
          // Container Properties:
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          padding: "0px 10px",

        
      }}>

      <h5 className="edit-product-form-title" style={{
                
          fontFamily: "Roboto",
          fontSize: "18px", 
          color: "#5F2758",
          letterSpacing: "0.9px",
          textAlign: "center",
          fontWeight: "500",
                
          width: "60%",
          margin: "0px 0px 25px 0px",
          padding: "25px",
              
            }} >
          EDIT PRODUCT
        </h5>
        
        
          <input
          
            className="edit-name"
            placeholder='Product Name'
            value={product.name}
            name='name'
            required
            onChange={handleChange}
            
            style={{
                  
              fontFamily: "Roboto",
              fontSize: "18px", 
              color: "#5F2758",
              fontWeight: "300",
              textAlign: "left",

              width: "60%",
              border: "none",
              
              margin: "5px",
            
            }}
          />
 
          <input
            className="edit-price"
            placeholder='Price'
            value={product.price}
            name='price'
            required
            onChange={handleChange}
          
            style={{
                  
              fontFamily: "Roboto",
              fontSize: "18px", 
              color: "#5F2758",
              fontWeight: "300",
              textAlign: "left",

              width: "60%",
              border: "none",
              
              margin: "5px",
            
            }}
          />

          <textarea
            className="edit-description"
            rows={10}
            placeholder='Description'
            value={product.description}
            name='description'
            required
            onChange={handleChange}
            
            style={{
                  
              fontFamily: "Roboto",
              fontSize: "18px", 
              color: "#5F2758",
              fontWeight: "300",
              textAlign: "left",

              width: "60%",
              border: "none",
              
              margin: "5px",
            
            }}/>

          <input
            className="edit-rating"
            placeholder='Rated _/5'
            value={product.rating}
            name='rating'
            required
            onChange={handleChange}
            type='number'
            max="5"
            min="0"
            
            style={{
                  
              fontFamily: "Roboto",
              fontSize: "18px", 
              color: "#5F2758",
              fontWeight: "300",
              textAlign: "left",

              width: "60%",
              border: "none",
              
              margin: "5px",
            
          }} />
        
        <input
            className="edit-image-link"
            placeholder="Primary Preview Link"
            value={product.imgURL}
            name='imgURL'
            required
            onChange={handleChange}
            type='text'
          
            style={{
                 
              fontFamily: "Roboto",
              fontSize: "18px", 
              color: "#5F2758",
              fontWeight: "300",
              textAlign: "left",

              width: "60%",
              border: "none",
              
              margin: "5px",
            
            }}/>

          <input
            className="edit-image-link"
            placeholder='Image Link'
            value={product.imgURL2}
            name='imgURL2'
            required
            onChange={handleChange}
          
            style={{
                  
              fontFamily: "Roboto",
              fontSize: "18px", 
              color: "#5F2758",
              fontWeight: "300",
              textAlign: "left",

              width: "60%",
              border: "none",
              
              margin: "5px",
            
            }}/>
 
          <input
            className="edit-image-link"
            placeholder='Image Link'
            value={product.imgURL3}
            name='imgURL3'
            required
            onChange={handleChange}
            
            style={{
                  
                    fontFamily: "Roboto",
                    fontSize: "18px", 
                    color: "#5F2758",
                    fontWeight: "300",
                    textAlign: "left",

                    width: "60%",
                    border: "none",
                    
                    margin: "5px",
                  
                  }}/>
 

        <div className='edit-buttons-container' style={{
              
              width: "45vw",

              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",

              }}>
          <button type='submit' className="edit-update-button" onClick={(e) => handleSubmit(e)}  style={{
                  
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

                }}>Update</button>
          <button type='cancel' className="edit-cancel-button" onClick={changeVisibility}  style={{
                  
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

                }}>Cancel</button>
        </div>

      </form>

    </div>
  );
};
