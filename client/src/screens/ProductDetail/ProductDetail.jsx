import React, { useState, useEffect } from 'react'
import './ProductDetail.css'
import Layout from '../../components/shared/Layout/Layout'
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

  if (!isLoaded) {
    return <h1>Loading...</h1>
  }
  // carosel
  // let slideIndex = 1;


  // const plusSlides = (x) => {
  //   showSlides(slideIndex += x);
  // }
  // const currentSlide = (x) => {
  //   showSlides(slideIndex = x);
  // }
  // const showSlides = (x) => {
  //   let i;
  //   let slides = document.getElementsByClassName("mySlides");
  //   let dots = document.getElementsByClassName("demo");
  //   let captionText = document.getElementById("caption");
  //   if (x > slides.length) { slideIndex = 1 }
  //   if (x < 1) { slideIndex = slides.length }
  //   for (i = 0; i < slides.length; i++) {
  //     slides[i].style.display = "none";
  //   }
  //   for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  //   }
  //   slides[slideIndex - 1].style.display = "block";
  //   dots[slideIndex - 1].className += " active";
  //   captionText.innerHTML = dots[slideIndex - 1].alt;
  // }
  // showSlides(slideIndex)

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
          <div classname="rating">{product.rating}</div>
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
        <div className="reviews">
          <h5>REVIEWS:</h5>
          <div className="review">{product.reviews.author}</div>
          <div className="review">{product.reviews.rating}</div>
          <div className="review">{product.reviews.description}</div>
        </div>
      </div>
    </Layout>
  )
}

export default ProductDetail