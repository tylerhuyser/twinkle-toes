import React, { useState, useEffect } from 'react';
import Search from "../../components/Search/Search.jsx";
import Product from "../../components/Product/Product.jsx";
import Layout from '../../components/shared/Layout/Layout'
import { getProducts } from '../../services/products';

const SearchResults = (props) => {

  // const { allProducts, setAllProducts } = props;
  const queriedProducts = props.queriedProducts;

  // const [queriedProducts, setQueriedProducts] = useState([])

  // setQueriedProducts(props.queriedProducts)

  // console.log(queriedProducts)

  const searchResultCards = queriedProducts.map((product, index) =>
    <Product _id={product._id} name={product.name} imgURL={product.imgURL} price={product.price} key={index} />
  )




  return (
    <Layout
      handleChange={props.handleChange}
      handleSubmit={props.handleSubmit}>

      <div className="search-results-container">
        {searchResultCards}
      </div>
    </Layout>
  )
}

export default SearchResults