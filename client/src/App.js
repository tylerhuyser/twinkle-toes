import React from 'react';
import './App.css';
import Home from './screens/Home/Home';
// import Products from './screens/Products/Products';
// import ProductCreate from './screens/ProductCreate/ProductCreate';
// import ProductDetail from './screens/ProductDetail/ProductDetail';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/" component={Home} />
        {/* <Route exact path="/products" component={Products} />
        <Route path="/add-product" component={ProductCreate} />
        <Route exact path="/products/:id" component={ProductDetail} /> */}
      </Switch>
    </div>
  );
}

export default App;
