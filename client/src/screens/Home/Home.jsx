import React, {useState, useEffect} from 'react';

import { getProducts } from '../../services/products';
import HeroCarousel from "../../components/HeroCarousel/HeroCarousel.jsx";
import './Home.css';

const Home = () => {

  const [allProducts, setAllProducts] = useState([])

  // function createHeroSlides() {
  //   return (
  //     <div className="mySlides fade">
  //       <div className="numbertext">1 / 5</div>
  //       <img src="https://i.imgur.com/DZm54TS.jpeg" alt="hero-1" style={{
  //       width: "100%",
  //     }} />
  //     </div>
  //     )
  // }

  
    useEffect(() => {
      const fetchProducts = async () => {
        const products = await getProducts()
        setAllProducts(products)
        console.log(products)
      }
      fetchProducts()
    }, [])

    

    return (
      <div className="home-container">

          <HeroCarousel  />
        
          <div className="hero-copy">
            <div className="tagline">We Sparkle. You Shine.</div>
            <div className="store-description">Welcome to Twinkle Toes, your source for the best glittery shoes in the world. As a pioneer in the sparkle-only online shoe industry, Twinkle Toes has been bedazzling the feet of our customers since 2012. Today we are an online shopping destination for everyone seeking a little flare; a shining beacon amongst the Internet’s selection of conventional shoe retailers.</div>
          </div>
        
          <div className="popular-items-carousel-container">
          
            <div className="popular-items-title">Popular Items</div>
                
            <div className="popular-items-carousel"></div>
          
          </div>
        
          <button>Products</button>
     
      </div>
    );
};

export default Home;