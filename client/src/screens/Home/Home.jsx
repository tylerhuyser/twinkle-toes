import React, { useState, useEffect } from 'react';
import Layout from '../../components/shared/Layout/Layout'
import { getProducts } from '../../services/products'
import Sort from '../../components/Sort/Sort'

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
    <Layout>
      <div>

      </div>
    </Layout>
  );
};

export default Home;