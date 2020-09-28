import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './screens/Home/Home';
import Products from './screens/Products/Products';
import ProductCreate from './screens/ProductCreate/ProductCreate';
import ProductDetail from './screens/ProductDetail/ProductDetail';
import SearchResults from './screens/SearchResults/SearchResults';
import { Route, Switch } from 'react-router-dom';
import { getProducts } from './services/products';


function App() {

  const [allProducts, setAllProducts] = useState([])

  useEffect(() => {

    const fetchProducts = async () => {
      const products = await getProducts()
      setAllProducts(products)
      console.log(products)
    }
    fetchProducts()
  }, [])

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home
            allProducts={allProducts}
            setAllProducts={setAllProducts}
          />
        </Route>

        <Route exact path="/products" >
          <Products
            allProducts={allProducts}
            setAllProducts={setAllProducts}
          />
        </Route>

        <Route path="/add-product" >
          <ProductCreate />
        </Route>

        <Route exact path="/products/:id">
          <ProductDetail
            allProducts={allProducts}
            setAllProducts={setAllProducts}
          />
        </Route>

        <Route exact path="/search-results">
          <SearchResults
            allProducts={allProducts}
            setAllProducts={setAllProducts}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
