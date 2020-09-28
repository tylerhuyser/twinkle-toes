import React, { useState, useEffect } from 'react';
import Search from "../../components/Search.jsx"

import { getProducts } from '../../services/products';

const SearchResults = (props) => {

  const { queriedProducts } = props

  const searchResultCards = queriedProducts.map((product, index) =>
    <Product _id={product._id} name={product.name} imgURL={product.imgURL} price={product.price} key={index} />
  )

  return (
    <div className="search-results-container">
      {searchResultCards}
    </div>
  )
}

export default SearchResults