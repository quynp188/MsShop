import React from "react";
import { products } from "./data";
import Product from "./Product";
import { Container } from "./styles";

const Products = () => {
  return (
    <Container>
      {products.map((item) => (
        <Product item ={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
