import React, { useState } from 'react';
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
      handleSubmit={props.handleSubmit}
      style={{
        
        zIndex: "2",

      }}
    >
      <div className="home-container" style={{

        display: "flex",
        flexDirection: "column",
        position: "relative",
        bottom: "100px",

      }}>

        <HeroCarousel currentIndex={currentHeroIndex} setCurrentIndex={setCurrentHeroIndex} />

        <div className="hero-copy">
          <div className="tagline" style={{

            fontSize: "36px",
            fontFamily: 'Roboto',
            letterSpacing: "1.25px",
            color: "#B752AC",
            textTransform: "uppercase",

            textAlign: "center",
            margin: "20px 0px",

          }}>We Sparkle. You Shine.</div>
          <div className="store-description" style={{

            fontFamily: "Source Sans Pro",
            fontSize: "18px",
            letterSpacing: "0px",
            color: "#BF84B9",

            textAlign: "center",
            margin: "25px",
            
            
          }}>Welcome to Twinkle Toes, your source for the best glittery shoes in the world. As a pioneer in the sparkle-only online shoe industry, Twinkle Toes has been bedazzling the feet of our customers since 2012. Today we are an online shopping destination for everyone seeking a little flare; a shining beacon amongst the Internet’s selection of conventional shoe retailers.</div>
        </div>

        <div className="popular-items-carousel-container">

          <div className="popular-items-title" style={{
            
            fontFamily: "Roboto",
            fontSize: "24px",
            letterSpacing: "0.93px",
            textTransform: "uppercase",
            textAlign: "left",
            color: "#9A7395",
            
            margin: "50px 25px",

          }}>Popular Items</div>

          {allProducts.length === 0 ? <div>"Loading..."</div>

            :

            <PopularCarousel
              allProducts={allProducts}
              popularIndex={popularIndex}
              setPopularIndex={setPopularIndex} setPopularUpperIndex={setPopularUpperIndex} popularUpperIndex={popularUpperIndex} setPopularLowerIndex={setPopularLowerIndex} popularLowerIndex={popularLowerIndex}

              style={{

              display: "flex",
              flexWrap: "none",
              width: "100vw",
              minWidth: "100vw",

            }} />
          
          }

        </div>

        <Link to="/products"><button style={{
          
          background: "#DB93D3",
          width: "150px",
          height: "35px",
          borderRadius: "12px",
          margin: "50px auto",

          color: "#FFFFFF",
          fontFamily: "Source Sans Pro",
          fontSize: "18px",
          textAlign: "center",
          letterSpacing: "0.75px",
          border: "none",

        }}>Products</button></Link>

      </div>
    </Layout>
  );
};

export default Home;