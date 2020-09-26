import React from "react";

export default function heroCarousel() {
  
  const heroImages = [
    "https://i.imgur.com/DZm54TS.jpeg",
    "https://i.imgur.com/RgAkNr1.jpg",
    "https://i.imgur.com/V9x68t8.jpg",
    "https://i.imgur.com/MlLrEWk.jpg",
    "https://i.imgur.com/x8emXbx.jpg",
  ]

  const heroSlides = heroImages.map((element, idx) => {
    return (
      <div className="mySlides fade">
      <div className="numbertext">{idx} / 5</div>
      <img src={element} alt={idx} style={{
      width: "100%",
    }} />
    </div>
    )
  })

  function createHeroCarouselButtons() {
    for (let i = 1; i <= 5; i++) {
      return (
        <span className="dot" onClick={() => currentSlide(i)}></span>
      )
    }
  }
  
  const heroCarouselButtons = createHeroCarouselButtons()

  let slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  };

  function showSlides(n) {
    let i;
    let slides = heroSlides
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    heroSlides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  };

  return (
    <div classname="hero-carousel-container">    
      <div className="hero-carousel">
        {heroSlides}
      </div>
    
      <a className="prev" onClick={plusSlides(-1)} > &#10094;</a>
      <a className="next" onClick={plusSlides(1)} > &#10095;</a>
      
      <br></br>
  
      <div className="hero-carousel-buttons" style={{
          textAlign: "center",
        }}>
        {heroCarouselButtons}
      </div>
</div>
  )
}

