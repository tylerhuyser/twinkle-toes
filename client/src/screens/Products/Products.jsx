import React, { useState, useEffect } from "react";
import './Products.css'

import Product from "../../components/Product/Product";
import Layout from '../../components/shared/Layout/Layout'

import Sort from "../../components/Sort/Sort";
import { AZ, ZA, lowestFirst, highestFirst } from "../../utils/sort";
import { getProducts } from "../../services/products";

const Products = (props) => {

  const [queriedProducts, setQueriedProducts] = useState([]);
  const [sortType, setSortType] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setQueriedProducts(products);
    };
    fetchProducts();
  }, []);

  const handleSort = (type) => {
    setSortType(type);
    switch (type) {
      case "name-ascending":
        setQueriedProducts(AZ(queriedProducts));
        break;
      case "name-descending":
        setQueriedProducts(ZA(queriedProducts));
        break;
      case "price-ascending":
        setQueriedProducts(lowestFirst(queriedProducts));
        break;
      case "price-descending":
        setQueriedProducts(highestFirst(queriedProducts));
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => event.preventDefault();

  const productsJSX = queriedProducts.map((product, index) => (
    <Product
      _id={product._id}
      name={product.name}
      rating={product.rating}
      imgURL={product.imgURL}
      price={product.price}
      admin_rating={product.admin_rating}
      key={index}
    />
  ));

  return (
    <>
      <Layout
        handleChange={props.handleChange}
        handleSubmit={props.handleSubmit}>
        <Sort onSubmit={handleSubmit} onChange={handleSort} sortType={sortType} />
        <div className="products-container">{productsJSX}</div>
        <button style={{
          
          background: "#DB93D3",
          width: "150px",
          height: "35px",
          borderRadius: "12px",
          margin: "50px auto",

          color: "#FFFFFF",
          fontFamily: "Source Sans Pro",
          fontSize: "18px",
          textAlign: "center",
          letterSpacing: "0.75px",
          border: "none",

        }}>Edit Products</button>
      </Layout>
    </>
  );
};

export default Products;
