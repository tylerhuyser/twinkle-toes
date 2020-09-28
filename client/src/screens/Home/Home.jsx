import React, {useState, useEffect} from 'react';

import { getProducts } from '../../services/products';
import HeroCarousel from "../../components/HeroCarousel/HeroCarousel.jsx";
import PopularCarousel from "../../components/PopularCarousel/PopularCarousel.jsx";

const Home = () => {

  const [allProducts, setAllProducts] = useState([])
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [popularUpperIndex, setPopularUpperIndex] = useState(4);
  const [popularLowerIndex, setPopularLowerIndex] = useState(0);

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

          <HeroCarousel currentIndex={currentHeroIndex} setCurrentIndex={setCurrentHeroIndex}  />
        
          <div className="hero-copy">
            <div className="tagline">We Sparkle. You Shine.</div>
            <div className="store-description">Welcome to Twinkle Toes, your source for the best glittery shoes in the world. As a pioneer in the sparkle-only online shoe industry, Twinkle Toes has been bedazzling the feet of our customers since 2012. Today we are an online shopping destination for everyone seeking a little flare; a shining beacon amongst the Internet’s selection of conventional shoe retailers.</div>
          </div>
        
          <div className="popular-items-carousel-container">
          
            <div className="popular-items-title">Popular Items</div>
              
              <PopularCarousel allProducts={allProducts} setPopularUpperIndex={setPopularUpperIndex} popularUpperIndex={popularUpperIndex} setPopularLowerIndex={setPopularLowerIndex} popularLowerIndex={popularLowerIndex} />
          
          </div>
        
          <button>Products</button>
     
      </div>
    );
};

export default Home;