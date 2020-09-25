import React, {useState, useEffect} from 'react';

import { getProducts } from '../../services/products'

const Home = () => {

    const [allProducts, setAllProducts] = useState([])
    const [queriedProducts, setQueriedProducts] = useState([])
  
    useEffect(() => {
      const fetchProducts = async () => {
        const products = await getProducts()
        // setAllProducts(products)
        // setQueriedProducts(products)
        console.log(products)
      }
      fetchProducts()
    }, [])

    return (
        <div>
           
        </div>
    );
};

export default Home;