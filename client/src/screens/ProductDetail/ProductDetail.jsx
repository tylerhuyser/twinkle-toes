import React, { useState, useEffect } from 'react'
import './ProductDetail.css'
import Layout from '../../components/shared/Layout/Layout'
import Reviews from '../../components/Reviews/Reviews'
import { getProduct, deleteProduct } from '../../services/products'
import { useParams, Link } from 'react-router-dom'

const ProductDetail = (props) => {

  const { allProducts, setAllProducts } = props;
  const [product, setProduct] = useState(null)
  const [isLoaded, setLoaded] = useState(false)
  const { id } = useParams()
  
  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct(id)
      setProduct(product)
      setLoaded(true)
    }
    fetchProduct()
  }, [id])
    // const reviews = props.products.reviews
    // if (!reviews === null) {
    //         return <p>reviews</p>
    //     }
  if (!isLoaded) {
    return <h1>Loading...</h1>
  }
   
    
  return (
    <Layout
      handleChange={props.handleChange}
      handleSubmit={props.handleSubmit}>
      <div className="product-detail">
        <div>
          <img className="product-detail-image" src={product.imgURL} alt={product.name} />
          <img className="product-detail-image" src={product.imgURL2} alt={product.name} />
          <img className="product-detail-image" src={product.imgURL3} alt={product.name} />
          {/* <a href={currentSlide} class="prev" onclick={plusSlides(-1)}>❮</a>
          <a href={currentSlide} class="next" onclick={plusSlides(1)}>❯</a> */}
        </div>

        <div className="detail">
          <div className="name">{product.name}</div>
          <div className="rating">{product.rating}</div>
          <div className="price">{`${product.price}`}</div>
          <div className="description">{product.description}</div>
          <div className="button-container">
            <button className="edit-button"><Link className="edit-link" to={`/products/${product._id}/edit`}>Edit</Link></button>
            <button className="delete-button" onClick={() => deleteProduct(product._id)}>Delete</button>
          </div>
        </div>
        <div className="similarItems">
          <h5>SIMILAR ITEMS</h5>

        </div>
        <Reviews reviews={product.reviews}/>
      </div>
    </Layout>
  )
}

export default ProductDetail