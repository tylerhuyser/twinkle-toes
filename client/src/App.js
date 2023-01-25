import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './screens/Home/Home';
import Products from './screens/Products/Products';
import ProductCreate from './screens/ProductCreate/ProductCreate';
import ProductDetail from './screens/ProductDetail/ProductDetail';
import SearchResults from './screens/SearchResults/SearchResults';
import { Route, Switch, useHistory } from 'react-router-dom';
import { getProducts } from './services/products';


function App() {

  const [allProducts, setAllProducts] = useState([]);
  const history = useHistory();
  const [queriedProducts, setQueriedProducts] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);

  useEffect(() => {

    const fetchProducts = async () => {
      console.log('before 1st useEFFECT')
      const products = await getProducts()
      console.log(products)
      setAllProducts(products)
    }
    fetchProducts()
  }, [isDeleted])

  const handleChange = (e) => {

    if (e.target.value.length > 2) {
      const newQueriedProducts = allProducts.filter(product => product.name.toLowerCase().includes(e.target.value.toLowerCase()))
      setQueriedProducts(newQueriedProducts)

    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleSearch(e)
  }
  const handleSearch = (e) => {

    history.push('/search-results')

  }

  return (
  
  <>

      { allProducts.length === 0 ? <div className="loader"></div>

        :

        <div className="App">
          <Switch>
            <Route exact path="/">
              <Home
                allProducts={allProducts}
                setAllProducts={setAllProducts}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
              />
            </Route>

            <Route exact path="/products" >
              <Products
                allProducts={allProducts}
                setAllProducts={setAllProducts}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                isDeleted={isDeleted}
                setIsDeleted={setIsDeleted}
              />
            </Route>

            <Route path="/add-product" >
              <ProductCreate
                handleChange={handleChange}
                handleSubmit={handleSubmit}
              />
            </Route>

            <Route exact path="/products/:id">
              <ProductDetail
                allProducts={allProducts}
                setAllProducts={setAllProducts}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                isDeleted={isDeleted}
                setIsDeleted={setIsDeleted}
              />
            </Route>

            <Route exact path="/search-results">
              <SearchResults
                allProducts={allProducts}
                setAllProducts={setAllProducts}
                queriedProducts={queriedProducts}
                setQueriedProducts={setQueriedProducts}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
              />
            </Route>
          </Switch>
        </div>
      }
      </>
  );   
}

export default App;
