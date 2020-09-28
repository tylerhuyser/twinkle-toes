import React, { useState } from 'react';
import Sort from '../../components/Sort/Sort';
import './Search.css';
import { Redirect, Link, Route } from 'react-router-dom';

const Search = (props) => {


  let search = props.search;
  const { allProducts, setAllProducts } = props;
  const [queriedProducts, setQueriedProducts] = useState([])

  const [isSearched, setSearched] = useState(false)

  // const handleSearch = e => {
  //   e.preventDefault()
  //   console.log(search)
  //   const newQueriedProducts = allProducts.filter(product => product.name.toLowerCase().includes(search.toLowerCase()))
  //   setQueriedProducts(newQueriedProducts)
  //   setSearched(!isSearched)
  // }

  console.log(queriedProducts)

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   handleSearch(e)
  // }

  if (isSearched) {
    return (
      <Redirect to={`/search-results`} />
    )
  }

  console.log(search)


  return (
    <form className="search-form" onSubmit={(e) => props.handleSubmit(e)} >
      <input
        className="search-input"
        value={search}
        onChange={(e) => props.handleChange(e)}
        name="Search"
        placeholder="Search"
        type="text"
        autoFocus
      />
    </form>
  )
}

export default Search