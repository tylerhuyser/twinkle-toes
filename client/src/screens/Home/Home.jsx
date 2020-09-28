import React, { useState, useEffect } from 'react';
import Layout from '../../components/shared/Layout/Layout'
import HeroCarousel from "../../components/HeroCarousel/HeroCarousel.jsx";
import PopularCarousel from "../../components/PopularCarousel/PopularCarousel.jsx";

const Home = (props) => {

  const { allProducts, setAllProducts } = props;
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [popularUpperIndex, setPopularUpperIndex] = useState(4);
  const [popularLowerIndex, setPopularLowerIndex] = useState(0);

  return (
    <Layout
      allProducts={allProducts}
      setAllProducts={setAllProducts}
      handleChange={props.handleChange}
      handleSubmit={props.handleSubmit}
    >
      <div className="home-container" style={{

        display: "flex",
        flexDirection: "column"

      }}>

        <HeroCarousel currentIndex={currentHeroIndex} setCurrentIndex={setCurrentHeroIndex} />

        <div className="hero-copy">
          <div className="tagline" style={{

            letterSpacing: "1.25px",
            color: "#B752AC",
            textTransform: "uppercase",
            fontSize: "58px",
            fontFamily: "Roboto",

          }}>We Sparkle. You Shine.</div>
          <div className="store-description" style={{

            textAlign: "center",
            fontFamily: "Source Sans Pro",
            letterSpacing: "0px",
            color: "#BF84B9",

          }}>Welcome to Twinkle Toes, your source for the best glittery shoes in the world. As a pioneer in the sparkle-only online shoe industry, Twinkle Toes has been bedazzling the feet of our customers since 2012. Today we are an online shopping destination for everyone seeking a little flare; a shining beacon amongst the Internet’s selection of conventional shoe retailers.</div>
        </div>

        <div className="popular-items-carousel-container">

          <div className="popular-items-title" style={{

            textAlign: "left",
            fontFamily: "Roboto",
            letterSpacing: "0.93px",
            color: "#9A7395",
            textTransform: "uppercase",
            margin: "80px 25px",

          }}>Popular Items</div>

          <PopularCarousel allProducts={allProducts} setPopularUpperIndex={setPopularUpperIndex} popularUpperIndex={popularUpperIndex} setPopularLowerIndex={setPopularLowerIndex} popularLowerIndex={popularLowerIndex} style={{

            display: "flex",
            flexWrap: "none",
            width: "100vw",
            minWidth: "100vw",

          }} />

        </div>

        <button style={{

          width: "260px",
          height: "45px",
          textAlign: "center",
          fontFamily: "Sans Pro",
          letterSpacing: "0.75px",
          color: "#FFFFFF",
          opacity: "1",
          background: "#DB93D3",
          borderRadius: "12px",
          margin: "150px auto"

        }}>Products</button>

      </div>
    </Layout>
  );
};

export default Home;