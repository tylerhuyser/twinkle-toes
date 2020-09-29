import React, { useState, useEffect } from 'react';
import './ProductDetail.css';
import Layout from '../../components/shared/Layout/Layout';
import { getProduct, deleteProduct } from '../../services/products';
import { useParams, Redirect } from 'react-router-dom';
import ProductEdit from '../../components/Edit/ProductEdit.jsx';

const ProductDetail = (props) => {

  const { allProducts, setAllProducts } = props;
  const [product, setProduct] = useState(null)
  const [isLoaded, setLoaded] = useState(false)
  const { id } = useParams()
  const [editVisibility, setEditVisibility] = useState(false);
  const [isUpdated, setUpdated] = useState(false)

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct(id)
      setProduct(product)
      setLoaded(true)
    }
    fetchProduct()
  }, [id])

  const changeVisibility = (e) => {
    e.preventDefault()
    setEditVisibility(!editVisibility)
  }

  const loadUpdate = () => {
    setUpdated(!isUpdated)
  }

  if (isUpdated) {
    return <Redirect to={`/products/${id}`} />
  }

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
            <button className="edit-button" onClick={(e) => changeVisibility(e)}>Edit</button>
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