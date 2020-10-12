import React from 'react';
import './Search.css';
// import { Redirect } from 'react-router-dom';

const Search = (props) => {

  let search = props.search;

  return (
    <form className="search-form" tabIndex="-1" onSubmit={(e) => props.handleSubmit(e)} >
      <input
        className="search-input"
        value={search}
        onChange={(e) => props.handleChange(e)}
        name="Search"
        placeholder="Search"
        type="text"
        autoFocus
      />
      <button className="search-button" style={{
        
        backgroundColor: "transparent",
        color: "#E67CDA",
        border: "none",

      }}>
        <i className="fas fa-search"></i>
      </button>

    </form>
  )
}

export default Search