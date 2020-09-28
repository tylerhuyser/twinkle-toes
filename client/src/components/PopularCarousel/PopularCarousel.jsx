import React, { useState, useEffect } from "react";
import './PopularCarousel.css';

const PopularCarousel = (props) => {

  const { popularUpperIndex, setPopularUpperIndex } = props;
  const { popularLowerIndex, setPopularLowerIndex } = props;
  const [popularCarousel, setPopularCarousel] = useState([])

  console.log(props)

  function compare(a, b) {

    const productA = a.rating
    const productB = b.rating
    // console.log(productA)

    let comparison = 0;
    if (productA < productB) {
      comparison = 1;
    } else if (productA > productB) {
      comparison = -1
    }
    return comparison
  }

  const popularProducts = props.allProducts.sort(compare)
  console.log(popularProducts)

  useEffect(() => {
    showSlides(popularUpperIndex, popularLowerIndex)
  }, [popularLowerIndex || popularLowerIndex])


  let popularItemCards = popularProducts.map((element, idx) => {
    return (
      <div className="popular-item-container" key={idx} style={{
       maxWidth: "15vw",
        height: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

      }}>
        <img src={element.imgURL} alt={idx} key={idx} style={{

          // flexGrow: "1",
          objectFit: "scale-down",
          
      }} />
      </div>
    )
  })

  console.log(popularItemCards)

  function showSlides(a, b) {
    if (a === undefined || b === undefined) {
      a = 4
      b = 0
    } 
    console.log(a)
    console.log(b)
    setPopularUpperIndex(a)
    setPopularLowerIndex(b)
    setPopularCarousel(popularItemCards.splice(a, b))
  }

  function plusSlides(n) {

    let tempUpperIndex = popularUpperIndex
    let tempLowerIndex = popularLowerIndex

    if ((n === (-1)) && (popularLowerIndex === 0)) {
     
      tempUpperIndex -= 1;
      tempLowerIndex = (popularItemCards.length -= 1);
      
    };
    
    if ((n === (-1)) && (popularLowerIndex !== 0)) {
      
      tempUpperIndex -= 1;
      tempLowerIndex -= 1;
    };
    if (n === 1 && (popularUpperIndex === (popularItemCards.length - 1))) {
      
      tempUpperIndex = 0;
      tempLowerIndex += 1

    };
    if (n === 1 && (popularUpperIndex !== (popularItemCards.length -1))) {
      tempUpperIndex += 1
      tempLowerIndex += 1
    };

    showSlides(tempUpperIndex, tempLowerIndex)

  };

  return (


    <div className="popular-items-carousel">

      <a className="prev" onClick={() => plusSlides(-1)} > &#10094;</a>

      <div className="popularItemsCards">
        {popularCarousel}
      </div>

      <a className="next" onClick={() => plusSlides(1)} > &#10095;</a>
      
    </div>

  )
}

export default PopularCarousel;