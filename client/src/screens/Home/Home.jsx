import React, {useState, useEffect} from 'react';
import { getProducts } from '../../services/products'
import './Home.css';

const Home = () => {

    const [allProducts, setAllProducts] = useState([])

  
    useEffect(() => {
      const fetchProducts = async () => {
        const products = await getProducts()
        setAllProducts(products)
        console.log(products)
      }
      fetchProducts()
      showSlides(slideIndex)
    }, [])
  
    // Hero Carousel Functionality Below:
  
  let slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    console.log(slides);
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }
    

    return (
      <div className="home-container">

          <div classname="hero-carousel-container">

            <div class="mySlides fade">
              <div class="numbertext">1 / 5</div>
              <img src="https://i.imgur.com/DZm54TS.jpeg" alt="hero-1" style={{
              width: "100%",
            }} />
            </div>

            <div class="mySlides fade">
              <div class="numbertext">2 / 5</div>
            <img src="https://i.imgur.com/RgAkNr1.jpg" alt="hero-2" style={{
              width: "100%",
            }} />
            </div>

            <div class="mySlides fade">
              <div class="numbertext">3 / 5</div>
              <img src="https://i.imgur.com/V9x68t8.jpg" alt="hero-3" style={{
              width: "100%",
            }} />
            </div>
          
            <div class="mySlides fade">
              <div class="numbertext">4 / 5</div>
              <img src="https://i.imgur.com/MlLrEWk.jpg" alt="hero-4" style={{
              width: "100%",
            }} />
            </div>
          
            <div class="mySlides fade">
              <div class="numbertext">5 / 5</div>
              <img src="https://i.imgur.com/x8emXbx.jpg" alt="hero-5" style={{
              width: "100%",
            }} />
            </div>
          
          <a class="prev" onClick={plusSlides(-1)} > &#10094;</a>
          <a class="next" onClick={plusSlides(1)} > &#10095;</a>
                
              
            <br></br>

            <div className="hero-carousel-buttons" style={{
              textAlign: "center",
            }}>
            <span class="dot" onClick={currentSlide(1)}></span>
            <span class="dot" onClick={currentSlide(2)}></span>
            <span class="dot" onClick={currentSlide(3)}></span>
            <span class="dot" onClick={currentSlide(4)}></span>
            <span class="dot" onClick={currentSlide(5)}></span>
            </div>
        
          </div>
        
          <div className="hero-copy">
            <div className="tagline">We Sparkle. You Shine.</div>
            <div className="store-description">Welcome to Twinkle Toes, your source for the best glittery shoes in the world. As a pioneer in the sparkle-only online shoe industry, Twinkle Toes has been bedazzling the feet of our customers since 2012. Today we are an online shopping destination for everyone seeking a little flare; a shining beacon amongst the Internet’s selection of conventional shoe retailers.</div>
          </div>
        
          <div className="popular-items-carousel-container">
          
            <div className="popular-items-title">Popular Items</div>
                
            <div className="popular-items-carousel">
            
            </div>
          
          </div>
        
          <button>Products</button>
     
      </div>
    );
};

export default Home;