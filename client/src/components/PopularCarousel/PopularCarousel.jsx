import React, { useState, useEffect, useLayoutEffect } from "react";

import PopularProduct from '../../components/PopularProduct/PopularProduct.jsx'
import './PopularCarousel.css';
import { highestRatingFirst } from "../../utils/sort"
import { getProducts } from "../../services/products";

const PopularCarousel = (props) => {


  const { popularIndex, setPopularIndex } = props;
  // const { popularUpperIndex, setPopularUpperIndex } = props;
  // const { popularLowerIndex, setPopularLowerIndex } = props;
  const [popularProducts, setPopularProducts] = useState(props.allProducts);
  const [popularCarousel, setPopularCarousel] = useState([])

  // console.log(props)

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const products = await getProducts()
  //     const sortedProducts = highestRatingFirst(products)
  //     console.log(sortedProducts)
  //     setPopularProducts(sortedProducts.splice(0, 7))
  //     setPopularCarousel(popularItemCards.splice(0,4))
  //   }
  //   fetchProducts()
  // }, [])

  // useLayoutEffect(() => {
  //   const setPopularProducts = () => {
  //       console.log('begin layout effect')
  //       console.log(props.allProducts)
  //       console.log(popularProducts)
  //     setPopularProducts(highestRatingFirst(props.allProducts.splice(0, 7)))
  //       console.log('end LayoutEffect')
  //       console.log(popularProducts)
  //   }
  //   setPopularProducts();
  // }, [])

  useEffect(() => {
    const getPopularCarousel = () => {
      console.log('begin use effect')
      console.log(highestRatingFirst(props.allProducts.splice(0, 7)))
      setPopularCarousel(popularItemCards.splice(0, 5))
        console.log('end use effect')
    }
    getPopularCarousel();
  }, [])



  // const popularProducts = props.allProducts
  // console.log(popularProducts)

  // useEffect(() => {
  //   // showSlides(popularUpperIndex, popularLowerIndex)
  //   // console.log(popularProducts)
  //   showSlides(popularIndex)
  //   setPopularProducts(highestRatingFirst(props.allProducts.splice(0, 7)))


  //   console.log(popularProducts)
  // }, [popularIndex])


  // const popularItemCards = popularProducts.map((element, idx) => {
  //   if (idx < 7) {
  //     return (
  //       <div className="popular-item-container" key={idx}
  //         style={{

  //           maxWidth: "15vw",
  //           height: "auto",
  //           display: "flex",
  //           alignItems: "center",
  //           alignContent: "center",
  //           justifyContent: "center",
  //           padding: "5px",
  //           background: "#F7ECEC",
  //           borderRadius: "8px",
  //           border: "3px solid #D091C9"
        
  //         }}>
  //         <img src={element.imgURL} alt={idx} key={idx} style={{

  //           // flexGrow: "1",
  //           objectFit: "scale-down",
  //           maxWidth: "15vw",
  //           maxHeight: "15vh",
  //           borderRadius: "8px",
          
  //         }} />
  //       </div>
  //     )
  //   }
  // })

  const popularItemCards = highestRatingFirst(props.allProducts.splice(0, 7)).map((product, idx) => (
    <PopularProduct
    _id={product._id}
    name={product.name}
    imgURL={product.imgURL}
    price={product.price}
    key={idx}
  />))

  function showSlides(a) {
    if (a === undefined) {
      a = 0
      // b = 0
    } 
    console.log(a)
    // console.log(b)
    console.log(popularItemCards)
    // setPopularUpperIndex(a)
    // setPopularLowerIndex(b)
    setPopularCarousel(popularItemCards.splice(a, a+5))
  }

  function plusSlides(n) {

    // let tempUpperIndex = popularUpperIndex
    // let tempLowerIndex = popularLowerIndex

    let tempIndex = popularIndex

    if ((n === (-1)) && (popularIndex === 0)) {
     
      // tempUpperIndex -= 1;
      // tempLowerIndex = (popularItemCards.length - 1);
      console.log(popularItemCards.length)
      tempIndex = (popularItemCards.length - 1)
      
    };
    
    if ((n === (-1)) && (popularIndex !== 0)) {
      
      // tempUpperIndex -= 1;
      // tempLowerIndex -= 1;

      tempIndex -= 1;

    };
    if (n === 1 && (popularIndex === (popularItemCards.length - 1))) {
      
      // tempUpperIndex = 0;
      // tempLowerIndex += 1

      tempIndex = 0;

    };
    if (n === 1 && (popularIndex !== (popularItemCards.length - 1))) {

      // tempUpperIndex += 1
      // tempLowerIndex += 1

      tempIndex += 1;

    };
    showSlides(tempIndex)
  };

  
  return (


    <div className="popular-items-carousel" style={{
      display: "flex",
      flexDirection: "row",
      minWidth: "100vw",
      alignItems: "center",
      justifyContent: "center",
      height: "150px",

    }}>

      <a className="prevPopular" onClick={() => plusSlides(-1)} > &#10094;</a>

      <div className="popularItemsCards" style={{
        minWidth: "80vw",
        flexGrow: "1",
        display: "flex",
        flexDirection: "row",

      }}>
        {popularCarousel}
      </div>

      <a className="nextPopular" onClick={() => plusSlides(1)} > &#10095;</a>
      
    </div>

  )
}

export default PopularCarousel;