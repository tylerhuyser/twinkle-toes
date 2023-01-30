import React, { useState, useEffect } from "react";
import './HeroCarousel.css';

const HeroCarousel = (props) => {

  // Below sets state for the "current" carousel image displayed (using integers to refer to the index)
  const { currentIndex, setCurrentIndex } = props;
  const [heroCarousel, setHeroCarousel] = useState([])
  const [heroButtons, setHeroButtons] = useState([])

  // Below array contains the image sources for the Hero Carousel.
  const heroImages = [
    "https://i.imgur.com/DZm54TS.jpeg",
    "https://i.imgur.com/RgAkNr1.jpg",
    "https://i.imgur.com/V9x68t8.jpg",
    "https://i.imgur.com/MlLrEWk.jpg",
    "https://i.imgur.com/x8emXbx.jpg",
  ]

  useEffect(() => {
    showSlides(currentIndex);
  }, [currentIndex])
  
  // Below creates a set of divs containing each hero slide
  let heroSlides = heroImages.map((element, idx) => {
    return (
      <div className="carousel-image invisible fade" key={idx}>
        <img className="carousel-image" id="hero-carousel-image" src={element} alt={idx} key={idx} />
      </div>
    )
  })

  function createHeroCarouselButtons() {
    let buttons = [];
    for (let i = 0; i < heroImages.length; i++) {
      buttons[i] =
        <span className="hero-dot" key={i} onClick={() => currentSlide(i)} ></span>
    }
    return buttons
  }
  
  const heroCarouselButtons = createHeroCarouselButtons()

  function showSlides(n) {
 
    if (n === undefined) {
      n = 0
    }

    heroSlides.forEach((element, idx) => {
      if (idx === n) {
        const selectedSlide = heroSlides[idx].props.children

        heroSlides[idx] = {
          ...heroSlides[idx], props: {
            className: "visible fade", children:
              selectedSlide
          }
        }
      }
      if (idx !== n) {
        const selectedSlide = heroSlides[idx].props.children

        heroSlides[idx] = {
          ...heroSlides[idx], props: {
            className: "invisible fade", children:
              selectedSlide
          }
        }
      }
    }
    )

    heroCarouselButtons.forEach((element, idx) => {
      if (idx === n) {
        const buttonFunction = heroCarouselButtons[idx].props.onClick

        heroCarouselButtons[idx] = {
          ...heroCarouselButtons[idx], props: {
            className: "hero-dot hero-active", onClick:
              buttonFunction
          }
        }
      }
      if (idx !== n) {

        const buttonFunction = heroCarouselButtons[idx].props.onClick

        heroCarouselButtons[idx] = {
          ...heroCarouselButtons[idx], props: {
            className: "hero-dot", onClick:
              buttonFunction
          }
        }

      }
    }
    )
    setCurrentIndex(n)
    setHeroCarousel(heroSlides)
    setHeroButtons(heroCarouselButtons)
  }

  function currentSlide(n) {
    showSlides(n);
  };

  function plusSlides(n) {
    let tempIndex = currentIndex

    if ((n === (-1)) && (currentIndex === 0)) {

      tempIndex = (heroSlides.length -= 1);

    };
    if (n === (-1) && (currentIndex !== 0)) {
      tempIndex -= 1;
    };
    if (n === 1 && (currentIndex === (heroSlides.length - 1))) {
      tempIndex = 0;
    };
    if (n === 1 && (currentIndex !== (heroSlides.length - 1))) {
      tempIndex += 1;
    };

    showSlides(tempIndex)
  };

  return (
    <div className="hero-carousel-container" style={{
      
      zIndex: "0",

    }} >    
      
      <div className="hero-carousel" style={{
      }}>
        {heroCarousel}
      </div>
    
      <button className="carousel-buttons prev-button" id="hero-prev-button" onClick={() => plusSlides(-1)} > &#10094;</button>
      <button className="carousel-buttons next-button" id="hero-next-button" onClick={() => plusSlides(1)} > &#10095;</button>
      
      <br></br>
  
      <div className="carousel-buttons-container" id="carousel-slide-buttons-container" style={{
          textAlign: "center",
          zIndex: "1",

        }}>
        {heroButtons}
      </div>

  </div>
  )
}

export default HeroCarousel;