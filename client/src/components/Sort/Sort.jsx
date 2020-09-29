//Sort component for SearchResults.jsx and Products.jsx

import React from 'react';
import './Sort.css'

const Sort = (props) => {

  const handleChange = (event) => {
    //props.onChange from Products.jsx for line 9
    props.onChange(event.target.value)
  }

  return (
    //props.handleSubmit from Products.jsx component for line 14
    <form className="sort-container" onSubmit={props.handleSubmit}>
      {/* <label htmlFor="sort">SORT BY:</label> */}
      <select className="sort" onChange={handleChange}>
        <option defaultValue value="">Sort By</option>
        <option className="option" value="name-ascending">&nbsp; Alphabetically, A-Z &nbsp;</option>
        <option value="name-descending">&nbsp; Alphabetically, Z-A &nbsp;</option>
        <option value="price-ascending">&nbsp; Price, low to high &nbsp;</option>
        <option value="price-descending">&nbsp; Price, high to low &nbsp;</option>
        {/* Recommended option for line 22 Post-MVP*/}
        {/* <option value="recommended">&nbsp; Recommended &nbsp;</option> */}
      </select>
    </form>
  );
};

export default Sort;