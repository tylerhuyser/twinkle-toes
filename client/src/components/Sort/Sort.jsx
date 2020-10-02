import React from 'react';
import './Sort.css'

const Sort = (props) => {

  const handleChange = (event) => {
    props.onChange(event.target.value)
  }

  return (
    <form className="sort-container" onSubmit={props.handleSubmit}>
      
      <div className="select-wrapper">

        <select placeholder="Sort By" name="Sort By" className="sort" onChange={handleChange}>
          <option defaultValue value="">Sort By</option>
          <option className="option" value="name-ascending">&nbsp; Alphabetically, A-Z &nbsp;</option>
          <option className="option" value="name-descending">&nbsp; Alphabetically, Z-A &nbsp;</option>
          <option className="option" value="price-ascending">&nbsp; Price, low to high &nbsp;</option>
          <option className="option" value="price-descending">&nbsp; Price, high to low &nbsp;</option>
        </select>

      </div>
      
    </form>
  );
};

export default Sort;