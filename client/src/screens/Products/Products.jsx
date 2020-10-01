import React, { useState, useEffect } from "react";
import './Products.css'
// Did not import search component since it's part of the layout component
import Product from "../../components/Product/Product";
import Layout from '../../components/shared/Layout/Layout'
// Where will Sort component be if it will be passed down to Products and
// SearchResult component?
import Sort from "../../components/Sort/Sort";
import { AZ, ZA, lowestFirst, highestFirst } from "../../utils/sort";
import { getProducts } from "../../services/products";

const Products = (props) => {

  const { allProducts, setAllProducts } = props;
  const [queriedProducts, setQueriedProducts] = useState([]);
  const [sortType, setSortType] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      console.log(products)
      setAllProducts(products);
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

  // const handleSearch = (event) => {
  //   const newQueriedProducts = allProducts.filter((product) =>
  //     product.name.toLowerCase().includes(event.target.value.toLowerCase())
  //   );
  //   setQueriedProducts(newQueriedProducts, () => handleSort(sortType));
  // };

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
        <Sort onSubmit={handleSubmit} onChange={handleSort} />
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
