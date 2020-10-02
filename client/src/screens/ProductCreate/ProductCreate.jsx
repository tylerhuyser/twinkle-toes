import React, { useState } from 'react';
import './ProductCreate.css';
import Layout from '../../components/shared/Layout/Layout';
import { Redirect } from 'react-router-dom';
import { createProduct } from '../../services/products';

export default function ProductCreate(props) {

  const [product, setProduct] = useState({
    name: "",
    imgURL: "",
    imgURL2: "",
    imgURL3: "",
    description: "",
    price: "",
    admin_rating: "",
    tag: "street",
    reviews: []
  });

  const [review, setReview] = useState({
    author: "",
    rating: "",
    description: ""
  });

  const [isCreated, setCreated] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setProduct({
      ...product,
      [name]: value
    })
  }

  const handleChange2 = (event) => {
    const { name, value } = event.target
    setReview({
      ...review,
      [name]: value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    product.reviews.push(review)
    const created = await createProduct(product)
    setCreated({ created })
  }

  if (isCreated) {
    return <Redirect to={`/products`} />
  }

  return (
    <Layout user={props.user}
      handleChange={props.handleChange}
      handleSubmit={props.handleSubmit}>
      
      <div className="create-products-page-container" style={{

      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",

      }}>

                <h5 className="review-title" style={{
                
                fontFamily: "Roboto",
                fontSize: "32px",
                color: "#9A7395",
                letterSpacing: "0.9px",
                textAlign: "left",
                fontWeight: "300",
                    
                margin: "20px 0px",
                marginLeft: "10vw",
                width: "90vw",
              
              }}>CREATE A NEW PRODUCT</h5>

        <div className="create-products-container" style={{

          // Visual Props:
          // minHeight: "80vh",
          margin: "20px 0px",

          // Container Properties:
          display: "flex",
          flexDirection: "row",

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

            <div className="primary-product-image-upload-container" style={{

              width: "35vw",

              backgroundColor: "#F7ECEC",
              border: "3px solid #D091C9",
              borderRadius: "12px",
              padding: "0px 10px",

              display: "flex",
              justifyContent: "center",
              alignItems: "center",

            }}>

              <img className="primary-product-detail-image-preview" src={product.imgURL} alt="primary" onError={(e) => { e.target.onerror = null; e.target.src = "https://www.flaticon.com/svg/static/icons/svg/1103/1103496.svg" }} style={{


                borderRadius: "12px",
                width: "30vw",
                height: "30vw",
                objectFit: "cover",
                objectPosition: "50% 55%",
                margin: "20px 10px",

              }} />

            </div>

            <div className="alternate-product-detail-images-container" style={{

              width: "35vw",

              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              margin: "10px 0px"
            }}>

              <img className="product-detail-image-preview" src={product.imgURL} alt="1" onError={(e) => { e.target.onerror = null; e.target.src = "https://www.flaticon.com/svg/static/icons/svg/1837/1837526.svg" }} style={{

                width: "9vw",
                maxHeight: "6vw",

                objectFit: "contain",
                // objectPosition: "50% 50%",

                border: "2px solid #D091C9",
                borderRadius: "12px",

              }} />

              <img className="product-detail-image-preview" src={product.imgURL2} alt="2" onError={(e) => { e.target.onerror = null; e.target.src = "https://www.flaticon.com/svg/static/icons/svg/1837/1837526.svg" }} style={{

                width: "9vw",
                maxHeight: "6vw",

                objectFit: "contain",
                // objectPosition: "50% 95%",

                border: "2px solid #D091C9",
                borderRadius: "12px",
                padding: "0px 0px 5px 0px",

              }} />

              <img className="product-detail-image" src={product.imgURL3} alt="3" onError={(e) => { e.target.onerror = null; e.target.src = "https://www.flaticon.com/svg/static/icons/svg/1837/1837526.svg" }} style={{

                width: "10vw",
                maxHeight: "6vw",

                objectFit: "contain",
                // objectPosition: "50% 95%",

                border: "2px solid #D091C9",
                borderRadius: "12px",
                padding: "0px 0px 5px 0px",

              }} />

            </div>

          </div>

          <form className="create-new-product-form" onSubmit={handleSubmit} style={{

            // Visual Properties:
            width: "45vw",
            padding: "10px 10px 20px 10px",

            // Container Properties:
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",

          }}>

            <h4 className="review-author-name" style={{

            fontSize: "18px",
            letterSpacing: "0.9px",
            textAlign: "left",
            fontWeight: "300",

            width: "100%",
            margin: "0px 0px 25px 0px",
                          
            }}>PRODUCT INFO</h4>
                    
            <input
              className="create-name"
              placeholder='Product Name'
              value={product.name}
              name='name'
              required
              onChange={handleChange}
              type='text'
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
                webkitBoxShadow: "0 5px 5px -6px lightgray",
                mozBoxShadow: "0 5px 5px -6px lightgray",
                    boxShadow: "0 5px 5px -6px lightgray",

              }} />

            <input
              className="create-price"
              placeholder='Product Price'
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

              width: "100%",
              border: "none",
                
              margin: "5px",
              webkitBoxShadow: "0 5px 5px -6px lightgray",
              mozBoxShadow: "0 5px 5px -6px lightgray",
              boxShadow: "0 5px 5px -6px lightgray",

              }}         

              />
              
            <textarea
              className="create-textarea-description"
              rows={10}
              placeholder='Product Description...'
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

                width: "100%",
                border: "none",
                
                margin: "5px",
                webkitBoxShadow: "0 5px 5px -6px lightgray",
                mozBoxShadow: "0 5px 5px -6px lightgray",
                    boxShadow: "0 5px 5px -6px lightgray",
              }}/>
                  
              <input
                className="create-rating"
                placeholder='Product Rating (1-5)...'
                value={product.admin_rating}
                name='admin_rating'
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
                
                  width: "100%",
                  border: "none",
                        
                  margin: "5px",
                  webkitBoxShadow: "0 5px 5px -6px lightgray",
                  mozBoxShadow: "0 5px 5px -6px lightgray",
                  boxShadow: "0 5px 5px -6px lightgray",
                
                }} />
                    
                <select
                  name="tag"
                  Placeholder="Product Tag"
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
                    webkitBoxShadow: "0 5px 5px -6px lightgray",
                    mozBoxShadow: "0 5px 5px -6px lightgray",
                      boxShadow: "0 5px 5px -6px lightgray",
                
                  }}>
                    <option disabled value="">Product Tag</option>
                    <option value="street">Street</option>
                    <option value="formal">Formal</option>
            </select> 
            
            <h4 className="review-author-name" style={{

              fontSize: "18px",
              letterSpacing: "0.9px",
              textAlign: "left",
              fontWeight: "300",

              width: "100%",
              margin: "25px 0px",
                            
              }}>PRODUCT IMAGES</h4>
           
            <input
                className="create-image-link"
                placeholder="Primary Preview Link"
                value={product.imgURL}
                name='imgURL'
                required
                onChange={handleChange}
                type='text'
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
                  webkitBoxShadow: "0 5px 5px -6px lightgray",
                  mozBoxShadow: "0 5px 5px -6px lightgray",
                      boxShadow: "0 5px 5px -6px lightgray",
  
              }} />
            
              <input
                className="create-image-link"
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
  
                  width: "100%",
                  border: "none",
                  
                  margin: "5px",
                  webkitBoxShadow: "0 5px 5px -6px lightgray",
                  mozBoxShadow: "0 5px 5px -6px lightgray",
                      boxShadow: "0 5px 5px -6px lightgray",
  
              }} />
            
              <input
                className="create-image-link"
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
  
                  width: "100%",
                  border: "none",
                  
                  margin: "5px",
                  webkitBoxShadow: "0 5px 5px -6px lightgray",
                  mozBoxShadow: "0 5px 5px -6px lightgray",
                      boxShadow: "0 5px 5px -6px lightgray",
  
                }} />
                    
            <div className="button-container" style={{

              width: "45vw",

              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",

            }}>
              <button className="submit-button" onSubmit={handleSubmit} style={{

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

              }}>Submit</button>
                      
            </div>
          </form>
      
        </div>
      </div>
    </Layout>
  )
}

{/* <div className="whole-page-container">

        <form className="create-form" onSubmit={handleSubmit}>

        
    
        <input
            className="create-name"
            placeholder='Product Name'
            value={product.name}
            name='name'
            required
            onChange={handleChange}
          />
      
        <input
            className="create-price"
            placeholder='Price'
            value={product.price}
            name='price'
            required
            onChange={handleChange}
          />
       
        <textarea
            className="create-textarea-description"
            rows={10}
            placeholder='Description'
            value={product.description}
            name='description'
            required
            onChange={handleChange}
          />
        Rating:
        <input
            className="create-rating"
            placeholder='Rated _/5'
            value={product.admin_rating}
            name='admin_rating'
            required
            onChange={handleChange}
            type='number'
            max="5"
            min="0"
          />
        Tag/Type: (for similar products)
        <select name="tag"
            className="create-tag"
            onChange={handleChange}
            value={product.tag}>
            <option value="street">Street</option>
            <option value="formal">Formal</option>
          </select>
          <div className="create-review-container">Initial Review
        <input
              className="create-review-author"
              placeholder='Author'
              value={review.author}
              name='author'
              required
              onChange={handleChange2}
              type="text"
            />
            <input
              className="create-review-rating"
              placeholder='Rated _/5'
              value={review.rating}
              name='rating'
              required
              onChange={handleChange2}
              type="number"
              max="5"
              min="0"
            />
            <textarea
              className="create-review-description"
              rows={5}
              placeholder='Your opinion of these shoes.'
              value={review.description}
              name='description'
              required
              onChange={handleChange2}
              type="text"
            />


          </div>

          <button type='submit' className="create-submit-button">SUBMIT</button>
        </form>

        <div className="create-preview">
          <main className="create-row">
            <div className="create-photos-column">
              Main Photo(displays on products page)
          <img className="create-img-preview" src={product.imgURL} alt="primary"></img>
              <br />
              <div className="create-img-angles">
                <img className="create-img-preview2" src={product.imgURL} alt="primary-mini"></img>
                <img className="create-img-preview2" src={product.imgURL2} alt="2-mini"></img>
                <img className="create-img-preview2" src={product.imgURL3} alt="3-min"></img>
              </div>
            </div>

            <aside className="create-content-preview">
              <div className="create-bold">Name-{product.name}</div>
              <div className="create-bold">Price-${product.price}</div>
              <div>Description-{product.description}</div>
              <div>Admin's Rating-{product.admin_rating}</div><br />
              <div>Tag-{product.tag}<br />(The tag show up on the page; it's here for your confirmation during product creation.</div>
            </aside>
          </main>
        </div>

          </div>
          </div>
    </Layout> */}