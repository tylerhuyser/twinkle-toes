import React, { useState } from 'react'
import Sort from '../../components/Sort/Sort'
import './Search.css'

const Search = (props) => {

  const [queriedProducts, setQueriedProducts] = useState([])
  const [search, setSearch] = useState('')
  const { allProducts, setAllProducts } = props;

  const handleSearch = event => {
    setSearch(event.target.value)
    const newQueriedProducts = allProducts.filter(product => product.name.toLowerCase().includes(event.target.value.toLowerCase()))
    setQueriedProducts(newQueriedProducts)
  }


  const handleSubmit = event => event.preventDefault()


  return (
    <form className="search-form" onSubmit={(e) => handleSubmit(e)} onChange={(e) => handleSearch(e)}>
      <input
        className="search-input"
        value={search}
        onChange={(e) => handleSearch(e)}
        name="Search"
        placeholder="Search"
        type="text"
        autoFocus
      />
    </form>
  )
}

export default Search