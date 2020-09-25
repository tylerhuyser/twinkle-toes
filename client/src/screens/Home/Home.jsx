import React, { useState, useEffect } from 'react';
import { getProducts } from '../../services/products';
import Layout from '../../components/shared/Layout/Layout.jsx';

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
        stuff
      </div>
      <div>
        to
      </div>
      <div>
        separate
      </div>
      <div>
        nav
      </div>
      <div>
        from
      </div>
      <div>
        footer
      </div>
    </Layout>
  );
};

export default Home;