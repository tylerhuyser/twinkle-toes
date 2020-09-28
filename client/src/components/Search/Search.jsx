import React, { useState } from 'react';
import Sort from '../../components/Sort/Sort';
import './Search.css';
import SearchResults from '../../screens/SearchResults/SearchResults';
import { Redirect } from 'react-router-dom';

const Search = (props) => {


  const [search, setSearch] = useState('')
  const { allProducts, setAllProducts } = props;


  const [isSearched, setSearched] = useState(false)


  const handleSubmit = event => {
    event.preventDefault()
    setSearched({ search })
  }

  if (isSearched) {
    return (

      <Redirect to={`/search-results`}>
        <SearchResults
          search={search}
        />
      </Redirect>

    )
  }
  return (
    <form className="search-form" onChange={(e) => handleSubmit(e)} >
      <input
        className="search-input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        name="Search"
        placeholder="Search"
        type="text"
        autoFocus
      />
    </form>
  )
}

export default Search