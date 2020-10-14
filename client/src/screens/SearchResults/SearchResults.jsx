import React, { useState } from "react";
import Product from "../../components/Product/Product.jsx";
import Layout from "../../components/shared/Layout/Layout";
import './SearchResults.css'

import Sort from "../../components/Sort/Sort";
import { AZ, ZA, lowestFirst, highestFirst } from "../../utils/sort";

const SearchResults = (props) => {
  const [sortType, setSortType] = useState([]);
  const { queriedProducts, setQueriedProducts } = props;

  const searchResultCards = queriedProducts.map((product, index) => (
    <Product
      _id={product._id}
      name={product.name}
      imgURL={product.imgURL}
      price={product.price}
      admin_rating={product.admin_rating}
      key={index}
    />
  ));

  const handleSort = (type) => {
    setSortType(type);
    switch (type) {
      case "name-ascending":
        setQueriedProducts(AZ(queriedProducts));
        break;
      case "name-descending":
        setQueriedProducts(ZA(queriedProducts));
        break;
      case "price-ascending":
        setQueriedProducts(lowestFirst(queriedProducts));
        break;
      case "price-descending":
        setQueriedProducts(highestFirst(queriedProducts));
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => event.preventDefault();

  return (
    <Layout handleChange={props.handleChange} handleSubmit={props.handleSubmit}>

      <div className="search-results-page-container">
        
        <div style={{

          color: "#9A7395",
          fontSize: "20px"

        }}>

          RESULTS FOUND: {queriedProducts.length}

        </div>
        
        <div className="sort-container" style={{

          margin: "10px 0px",
          
        }}>

          <Sort onSubmit={handleSubmit} onChange={handleSort} sortType={sortType} />

        </div>

          <div className="search-results-container">
            
            {searchResultCards}
          
          </div>
      </div>
    </Layout>
  );
};

export default SearchResults;
