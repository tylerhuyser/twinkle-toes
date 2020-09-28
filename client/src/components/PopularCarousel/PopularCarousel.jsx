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
  }, [popularLowerIndex || popularLowerIndex ])


  let popularItemCards = popularProducts.map((element, idx) => {
    return (
      <div className="popular-item-container" key={idx} style={{
       maxWidth: "15vw",
        height: "auto",
        display: "flex",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
        padding: "5px",
        background: "#F7ECEC",
        borderRadius: "8px",
        border: "3px solid #D091C9"
      }}>
        <img src={element.imgURL} alt={idx} key={idx} style={{

          // flexGrow: "1",
          objectFit: "scale-down",
          maxWidth: "15vw",
          maxHeight: "15vh",
          borderRadius: "8px",
          
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