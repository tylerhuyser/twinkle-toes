import React, { useState, useEffect } from "react";

import PopularProduct from '../../components/PopularProduct/PopularProduct.jsx'
import './PopularCarousel.css';
import { highestRatingFirst } from "../../utils/sort"

const PopularCarousel = (props) => {

  const [popularCarousel, setPopularCarousel] = useState([]);

  const { popularLowerIndex, setPopularLowerIndex } = props;
  const { popularUpperIndex, setPopularUpperIndex } = props;

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


  useEffect(() => {
    const getPopularCarousel = () => {
      setPopularCarousel(popularItemCards.slice(0, 5))
    }
    getPopularCarousel();
  }, [])


  function plusSlides(n) {

    let tempLowerIndex = popularLowerIndex
    let tempUpperIndex = popularUpperIndex

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

    <div className="popular-items-carousel-container">

      <div className="popular-items-carousel-desktop">

        <button className="carousel-buttons prev-button" id="popular-items-prev-button" onClick={() => plusSlides(-1)} > &#10094;</button>

        <div className="popular-items-cards-container">
          {popularCarousel}
        </div>

        <button className="carousel-buttons next-button" id="popular-items-next-button" onClick={() => plusSlides(1)} > &#10095;</button>

      </div>

      <div className="popular-items-mobile">

        {popularCarousel}

      </div>
      
    </div>

  )
}

export default PopularCarousel;