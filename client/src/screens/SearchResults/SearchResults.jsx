import React, { useState } from 'react';
import Product from "../../components/Product/Product.jsx";
import Layout from '../../components/shared/Layout/Layout'

import Sort from "../../components/Sort/Sort";
import { AZ, ZA, lowestFirst, highestFirst } from "../../utils/sort";

const SearchResults = (props) => {

  const [sortType, setSortType] = useState([]);
  const { queriedProducts, setQueriedProducts } = props;

  const searchResultCards = queriedProducts.map((product, index) =>
    <Product _id={product._id} name={product.name} imgURL={product.imgURL} price={product.price} key={index} />
  )

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
    <Layout
      handleChange={props.handleChange}
      handleSubmit={props.handleSubmit}>

      {searchResultCards && searchResultCards.length !== 0 ?

        <div className="search-results-container" style={{

          margin: "0 auto",
          width: "80%",
          display: "flex",
          flexWrap: "wrap",
          justifycontent: "space-between",

        }}>
          <Sort onSubmit={handleSubmit} onChange={handleSort} />
          {searchResultCards}
        </div>
        
        :

        <div className="search-results-container" style={{

          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexGrow: "1",

        }}>
          <p className="search-error-message" style={{

            color: "#B752AC",
            fontWeight: "bold",
            flexGrow: "1",
            
          }}>Whoopsies! No Results!</p>
        </div>
      }
      
    </Layout>
  )
}

export default SearchResults