import React, { useState, useEffect } from 'react';
import Search from "../../components/Search/Search.jsx";
import Product from "../../components/Product/Product.jsx";
import Layout from '../../components/shared/Layout/Layout'
import { getProducts } from '../../services/products';

const SearchResults = (props) => {

  const { allProducts, setAllProducts } = props;
  const { search, setSearch } = props;
  const [queriedProducts, setQueriedProducts] = useState([])


  const searchResultCards = queriedProducts.map((product, index) =>
    <Product _id={product._id} name={product.name} imgURL={product.imgURL} price={product.price} key={index} />
  )

  const handleSearch = event => {
    setSearch(event.target.value)
    console.log(search)
    const newQueriedProducts = allProducts.filter(product => product.name.toLowerCase().includes(event.target.value.toLowerCase()))
    setQueriedProducts(newQueriedProducts)
  }

  return (
    <Layout>
      <div className="search-results-container">
        {searchResultCards}
      </div>
    </Layout>
  )
}

export default SearchResults