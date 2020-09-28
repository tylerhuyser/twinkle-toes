import React, { useState, useEffect } from "react";
import './HeroCarousel.css';

const HeroCarousel = (props) => {

  // Below sets state for the "current" carousel image displayed (using integers to refer to the index)
  const [currentIndex, setCurrentIndex] = useState(0);
  const { update, setUpdate } = props;

    // Below array contains the image sources for the Hero Carousel.
  const heroImages = [
      "https://i.imgur.com/DZm54TS.jpeg",
      "https://i.imgur.com/RgAkNr1.jpg",
      "https://i.imgur.com/V9x68t8.jpg",
      "https://i.imgur.com/MlLrEWk.jpg",
      "https://i.imgur.com/x8emXbx.jpg",
  ]

  useEffect(() => {

  }, [update])

  useEffect(() => {
  
    showSlides(currentIndex);
    props.updateFunction()
  }, [currentIndex])
  

  // Below creates a set of divs containing each hero slide
  let heroSlides = heroImages.map((element, idx) => {
    return (
      <div className="invisible fade" key={idx}>
        <div className="number-text">{idx} / 5</div>
        <img src={element} alt={idx} key={idx} style={{
        width: "100%",
      }} />
      </div>
    )
  })

  function createHeroCarouselButtons() {
    for (let i = 1; i <= heroImages.length; i++) {
      return(
        <span className="dot" key={i}></span>
        // <span className="dot" onClick={() => currentSlide({ i })}></span>
      )
    }
  }
  
  const heroCarouselButtons = createHeroCarouselButtons()

  function showSlides(n) {
    console.log(heroSlides);
    console.log(n)
  
    heroSlides[n] = { ...heroSlides[n], props: { className: "visible fade" } }

    console.log(heroSlides[n])
    console.log(heroSlides)
    props.updateFunction()
    return heroSlides

  // let currentSlideProps = currentSelect.props
  //   console.log(currentSlideProps)
  // let currentSlideClassName = currentSlideProps.className
  // currentSlideClassName = "visible";
  //   console.log(currentSlideClassName)
  // currentSlideProps.className = { currentSlideClassName }
    // console.log(currentSlideProps)
  // setHeroCarousel[n] =

  // heroCarousel[(n - 1)].style.display = "none";
  // heroCarouselButtons[n].classname += " active";
  // heroCarouselButtons[n - 1].className = "";
  }

function currentSlide(n) {
    showSlides(n);
  };

function plusSlides(n) {
    if ((n === (-1)) && ({ currentIndex } === 0)) {
      setCurrentIndex(heroSlides.length - 1);
    };
    if (n === (-1)) {
      setCurrentIndex({ currentIndex } - 1);
    };
    if (n === 1 && ({ currentIndex } === (heroSlides.length - 1))) {
      setCurrentIndex(0);
    };
    if (n === 1) {
      setCurrentIndex({ currentIndex } + 1);
    };
    showSlides(currentIndex);
  };


  // function showSlides(n) {
  //   let i;
  //   let slides = document.getElementsByClassName("mySlides");
  //   let dots = document.getElementsByClassName("dot");
  //   if (n > slides.length) {slideIndex = 1}
  //   if (n < 1) {slideIndex = slides.length}
  //   for (i = 0; i < slides.length; i++) {
  //       slides[i].style.display = "none";
  //   }
  //   for (i = 0; i < dots.length; i++) {
  //       dots[i].className = dots[i].className.replace(" active", "");
  //   }
  //   console.log(slides)
  //   slides[slideIndex-1].style.display = "block";
  //   dots[slideIndex-1].className += " active";
  // }



  return (
    <div className="hero-carousel-container">    
      
      <div className="hero-carousel">
        {heroSlides}
      </div>
    
      {/* <a className="prev" onClick={plusSlides(-1)} > &#10094;</a> */}
      {/* <a className="next" onClick={plusSlides(1)} > &#10095;</a> */}
      
      <br></br>
  
      <div className="hero-carousel-buttons" style={{
          textAlign: "center",
        }}>
        {heroCarouselButtons}
      </div>

  </div>
  )
}

export default HeroCarousel;