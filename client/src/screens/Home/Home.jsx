import React, { useState } from 'react';
import "./Home.css"

import Layout from '../../components/shared/Layout/Layout'
import HeroCarousel from "../../components/HeroCarousel/HeroCarousel.jsx";
import PopularCarousel from "../../components/PopularCarousel/PopularCarousel.jsx";

import { Link } from 'react-router-dom';

const Home = (props) => {

  const { allProducts, setAllProducts } = props;
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [popularIndex, setPopularIndex] = useState(0);

  const [popularUpperIndex, setPopularUpperIndex] = useState(4);
  const [popularLowerIndex, setPopularLowerIndex] = useState(0);

  return (
    <Layout
      allProducts={allProducts}
      setAllProducts={setAllProducts}
      handleChange={props.handleChange}
      handleSubmit={props.handleSubmit}>
      
      <div className="home-container">

        <div className='body-section' id="hero-section">

          <HeroCarousel currentIndex={currentHeroIndex} setCurrentIndex={setCurrentHeroIndex} />

        </div>

        <div className="body-section" id="hero-title-section">
          <div className="hero-copy title-copy" id="hero-title">We Sparkle. You Shine.</div>
          <div className="hero-copy subtitle-copy" id="hero-subtitle">Welcome to Twinkle Toes, your source for the best glittery shoes in the world. As a pioneer in the sparkle-only online shoe industry, Twinkle Toes has been bedazzling the feet of our customers since 2012. Today we are an online shopping destination for everyone seeking a little flare; a shining beacon amongst the Internet’s selection of conventional shoe retailers.</div>
        </div>

        <div className="body-section" id="popular-items-section">

          <div className='popular-items-copy title-copy' id="popular-items-title">Popular Items</div>

          {allProducts.length === 0 ? <div class="loader"></div>

            :

            <PopularCarousel
              allProducts={allProducts}
              popularIndex={popularIndex}
              setPopularIndex={setPopularIndex} setPopularUpperIndex={setPopularUpperIndex} popularUpperIndex={popularUpperIndex} setPopularLowerIndex={setPopularLowerIndex} popularLowerIndex={popularLowerIndex} />
          
          }

        </div>

        <Link to="/products"><button className="body-section-button subtitle-copy" id="home-products-button">Products</button></Link>

      </div>
    </Layout>
  );
};

export default Home;