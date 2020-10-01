import React, { useState, useEffect } from "react";

import PopularProduct from '../../components/PopularProduct/PopularProduct.jsx'
import './PopularCarousel.css';
import { highestRatingFirst } from "../../utils/sort"

const PopularCarousel = (props) => {

  const [popularCarousel, setPopularCarousel] = useState([]);

  const { popularLowerIndex, setPopularLowerIndex } = props;
  const { popularUpperIndex, setPopularUpperIndex } = props;


  useEffect(() => {
    const getPopularCarousel = () => {
      setPopularCarousel(popularItemCards.slice(0, 5))
    }
    getPopularCarousel();
  }, [])


  const popularItemCards = highestRatingFirst(props.allProducts).slice(0, 7).map((product, idx) => (

    <PopularProduct
      _id={product._id}
      name={product.name}
      imgURL={product.imgURL}
      price={product.price}
      rating={product.admin_rating}
      key={idx}
    />

  ))


  function plusSlides(n) {

    let tempLowerIndex = popularLowerIndex
    let tempUpperIndex = popularUpperIndex

    console.log(popularItemCards)
    console.log(popularCarousel)

    if ((n === (-1)) && (tempLowerIndex === 0)) {

      popularCarousel.pop()
      setPopularCarousel(popularCarousel)

      tempLowerIndex = (popularItemCards.length - 1)
      tempUpperIndex -= 1;

      setPopularLowerIndex(tempLowerIndex)
      setPopularUpperIndex(tempUpperIndex)

      setPopularCarousel(prevPopularCarousel => {
        return [popularItemCards[tempLowerIndex], ...prevPopularCarousel]
      });

    } else if ((n === (-1)) && (tempUpperIndex === 0)) {
     
      popularCarousel.pop()
      setPopularCarousel(popularCarousel)
      
      tempLowerIndex -= 1
      tempUpperIndex = (popularItemCards.length - 1);

      setPopularLowerIndex(tempLowerIndex)
      setPopularUpperIndex(tempUpperIndex)

      setPopularCarousel(prevPopularCarousel => {
        return [popularItemCards[tempLowerIndex], ...prevPopularCarousel]
      })
    
    } else if ((n === (-1)) && (tempLowerIndex !== 0)) {

      popularCarousel.pop()
      setPopularCarousel(popularCarousel)

      tempUpperIndex -= 1;
      tempLowerIndex -= 1;

      setPopularLowerIndex(tempLowerIndex)
      setPopularUpperIndex(tempUpperIndex)

      setPopularCarousel(prevPopularCarousel => {
        return [popularItemCards[tempLowerIndex], ...prevPopularCarousel]
      });

    } else if (n === 1 && (tempUpperIndex === (popularItemCards.length - 1))) {

      popularCarousel.shift()
      setPopularCarousel(popularCarousel)
      console.log(popularCarousel)

      tempUpperIndex = 0;
      tempLowerIndex += 1

      setPopularLowerIndex(tempLowerIndex)
      setPopularUpperIndex(tempUpperIndex)

      setPopularCarousel(prevPopularCarousel => {
        return [...prevPopularCarousel, popularItemCards[tempUpperIndex]]
      });

    }  else if (n === 1 && (tempLowerIndex === (popularItemCards.length - 1))) {

      popularCarousel.shift()
      setPopularCarousel(popularCarousel)
      console.log(popularCarousel)
      
      tempUpperIndex += 1;
      tempLowerIndex = 0;

      setPopularLowerIndex(tempLowerIndex)
      setPopularUpperIndex(tempUpperIndex)

      setPopularCarousel(prevPopularCarousel => {
        return [...prevPopularCarousel, popularItemCards[tempUpperIndex]]
      });

    } else if (n === 1 && (tempUpperIndex !== (popularItemCards.length - 1))) {

      popularCarousel.shift()
      setPopularCarousel(popularCarousel)
      console.log(popularCarousel)

      tempUpperIndex += 1
      tempLowerIndex += 1

      setPopularLowerIndex(tempLowerIndex)
      setPopularUpperIndex(tempUpperIndex)

      setPopularCarousel(prevPopularCarousel => {
        return [...prevPopularCarousel, popularItemCards[tempUpperIndex]]
      });
    };
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

      <a className="prevPopular" onClick={() => plusSlides(-1)} href="prevPopular" > &#10094;</a>

      <div className="popularItemsCards" style={{

        flexGrow: "1",

        minWidth: "80vw",

        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-between',


      }}>
        {popularCarousel}
      </div>

      <a className="nextPopular" onClick={() => plusSlides(1)} href="nextPopular" > &#10095;</a>

    </div>

  )
}

export default PopularCarousel;