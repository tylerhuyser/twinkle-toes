import React, {useState} from 'react'
import Sort from '../../components/Sort/Sort'
import './Search.css'

const Search = (props) => {
    const [queriedProducts, setQueriedProducts] = useState([])

    const handleSearch = event => {
        const newQueriedProducts = allProducts.filter(product => product.name.toLowerCase().includes(event.target.value.toLowerCase()))
        setQueriedProducts(newQueriedProducts, () => handleSort(sortType))
      }
    
      const handleSubmit = event => event.preventDefault()

    return (
        <form className="search-form" onSubmit={(e) => handleSubmit(e)} onChange={(e) => handleSearch(e)}>
            <input
                className="search-input"
                value={props.value}
                onChange={(e) => props.onChange(e)}
                name="Search"
                placeholder="Search"
                type="text"
                autoFocus
            />
        </form>
    )
}

export default Search