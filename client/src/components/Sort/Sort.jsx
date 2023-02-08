import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import './Sort.css'

const Sort = (props) => {

  const handleChange = (event) => {
    props.onChange(event.target.value)
  }

  return (
      
      <div className="sort-wrapper" onSubmit={props.handleSubmit}>

        <select placeholder="Sort By" name="Sort By" className="sort-input" onChange={handleChange}>
          <option defaultValue value="">Sort By...</option>
          <option className="sort-option" value="name-ascending">&nbsp; Alphabetically, A-Z &nbsp;</option>
          <option className="sort-option" value="name-descending">&nbsp; Alphabetically, Z-A &nbsp;</option>
          <option className="sort-option" value="price-ascending">&nbsp; Price, low to high &nbsp;</option>
          <option className="sort-option" value="price-descending">&nbsp; Price, high to low &nbsp;</option>
        </select>
      
        <FontAwesomeIcon icon={faChevronDown} />

      </div>
  );
};

export default Sort;