import { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  
  useEffect(() => {
    const getProducts = async () => {
      try {
        const url = cat
          ? `http://localhost:5001/api/products?category=${cat}`
          : "http://localhost:5001/api/products";
          
        const res = await axios.get(url);
        setProducts(res.data);
      } catch (err) {
        console.log("Error fetching products:", err);
      }
    };
    getProducts();
  }, [cat]);


  useEffect(() => {
    if (cat && products) { 
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
    }
  }, [products, cat, filters]);

 
  useEffect(() => {
    if (cat && filteredProducts) {
      if (sort === "newest") {
        setFilteredProducts((prev) =>
          [...prev].sort((a, b) => a.createdAt - b.createdAt)
        );
      } else if (sort === "asc") {
        setFilteredProducts((prev) =>
          [...prev].sort((a, b) => a.price - b.price)
        );
      } else {
        setFilteredProducts((prev) =>
          [...prev].sort((a, b) => b.price - a.price)
        );
      }
    }
  }, [sort]);

  return (
    <Container>
      {}
      {cat
        ? filteredProducts.map((item) => <Product item={item} key={item._id} />)
        : products
            .slice(0, 8)
            .map((item) => <Product item={item} key={item._id} />)}
            
      {}
      {cat && filteredProducts.length === 0 && (
          <h2 style={{color: "gray", textAlign: "center", width: "100%", marginTop: "20px"}}>
             No Products Found for {cat.toUpperCase()} 🛍️
          </h2>
      )}
    </Container>
  );
};

export default Products;